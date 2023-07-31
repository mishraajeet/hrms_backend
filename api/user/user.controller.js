const user = require("./user.model");
const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const sendMail = require('../../common/sendMail');
const reference = require('../reference/reference.controller');
const refmodule = require("../reference/reference.model");

module.exports = {

  getAllUsers: async(req,res,next)=>{
    try{
        let pageNumber = req.body.initial;
        let pageSize = 10;

        let filter ={}
        if(req.body.isActive)
          filter["isUserActive"] = true
        let result = await user.find(filter)
                    .sort({createAt:-1})
                    .skip((pageNumber -1)* pageSize)
                    .limit(pageSize)
        res.status(200).send({result: true, data: result});
    }catch(e){
        console.log(e);
    }
},
  signUp: async (req, res, next) => {
    try {
      let result = await user.findOne({ email: req.body.email });
      if (result) res.status(208).send({ message: "User already exist..." });
      else {
        let User = new user(req.body);
        User.invitationCode = (req.body.userType.charAt(0)).toUpperCase() + parseInt(Date.now() + Math.random())
        let newUser = await User.save();
        const referedUser = {
          "referedFrom": {},
          "referedTo": {}
        }
        referedUser["referedTo"]["invitationCode"] = newUser.invitationCode
        referedUser["referedTo"]["userType"] = newUser.userType
        referedUser["referedTo"]["userId"] = newUser._id

        referedUser["referedFrom"]["invitationCode"] = req.body.invitationCode
        referedUser["referedFrom"]["userType"] = req.body.referedUserType
        referedUser["referedFrom"]["userId"] = req.body.referedUserId

        await reference.referedUser(referedUser)
        let url = `http://localhost:4200/setpassword/${newUser._id}`
        await sendMail.mail(req.body.email, url)
        res.status(200).send({ result: true, message: "Please check your mail.." });
      }
    } catch (e) {
      next(e);
    }
  },

  setPassword: async (req, res, next) => {
    try {
      let isUser = await user.findById(req.body.id).populate('isUserVerified');
      if (!isUser) res.status(404).send({ message: "User not found..." });
      else {
        /*--------------Hashing Password---------------*/
        let salt = await bcrypt.genSalt(10);
        let password = await bcrypt.hash(req.body.password, salt);
        let token = isUser.generateAuthToken();
        await user.updateOne({ _id: req.body.id }, { isUserVerified: true, password: password });
        res.status(200).header("x-auth-token", token).send({ result: true, message: "Password is updated!" });
      }
    } catch (e) {
      next(e);
    }
  },

  createSuperAdmin: async (req, res, next) => {
    try {
      let result = await user.findOne({ email: req.body.email });
      if (result) res.status(208).send({ message: "User already exist..." });
      else {
        let User = new user(req.body);
        let salt = await bcrypt.genSalt(10);
        User.password = await bcrypt.hash(req.body.password, salt);
        User.invitationCode = (req.body.userType.charAt(0)).toUpperCase() + parseInt(Date.now() + Math.random())
        await User.save();
        res.status(200).send({ result: true, message: "Super Admin Is created" });
      }
    } catch (e) {
      next(e);
    }
  },

  resellerLogin: async (req, res, next) => {
    try {
      let isUser = await user.findOne({ email: req.body.email });
      if (isUser && isUser.userType === 'individual')
        res.status(404).send({ result: false, message: "Unautherised user..." });
      else if (isUser == undefined || !isUser)
        res.status(404).send({ result: false, message: "Invalid User Name...!" });
      else {
        let isValidPassword = await bcrypt.compare(req.body.password, isUser.password);
        if (!isValidPassword)
          res.status(400).send({ result: false, message: "Invalid Password...!" });
        else {
          let token = isUser.generateAuthToken();
          res.status(200).header("x-auth-token", token).send({ result: true, email: isUser.email, id: isUser._id, role: isUser.userType, invitationCode: isUser.invitationCode });
        }
      }
    } catch (e) {
      next(e);
    }
  },

  login: async (req, res, next) => {
    try {
      let isUser = await user.findOne({ email: req.body.email });
      if (isUser && isUser.userType !== 'individual')
        res.status(404).send({ result: false, message: "Unautherised user..." });
      else if (isUser == undefined || !isUser)
        res.status(404).send({ result: false, message: "Invalid User Name...!" });
      else {
        let isValidPassword = await bcrypt.compare(req.body.password, isUser.password);
        if (!isValidPassword)
          res.status(400).send({ result: false, message: "Invalid Password...!" });
        else {
          let token = isUser.generateAuthToken();
          res.status(200).header("x-auth-token", token).send({ result: true, email: isUser.email, id: isUser._id, role: isUser.userType, invitationCode: isUser.invitationCode });
        }
      }
    } catch (e) {
      next(e);
    }
  },

  forgetPassword: async (req, res, next) => {
    try {
      let isUser = await user.findOne({ email: req.body.email })
      if (isUser == undefined || !isUser)
        res.status(208).send({ result: false, message: "Invalid Email'Id...!" });
      else {
        await sendMail.mail(isUser)
        res.status(200).send({ result: true, message: "Please check your mail.." });
      }
    } catch (e) {
      next(e);
    }
  },

  // ******************************Start Indivisual User**************************//
  signUpUser: async (req, res, next) => {
    try {
      let result = await user.findOne({ email: req.body.email });
      if (result) res.status(208).send({ message: "User already exist..." });
      else {
        let User = new user(req.body);
        await User.save();
        await sendMail.mail(req.body.email)
        res.status(200).send({ result: true, message: "Please check your mail.." });
      }
    } catch (e) {
      next(e);
    }
  },


  RegisterUserProfile: async (req, res, next) => {
    try {
      let refData = {
        "referedFrom": {},
        "referedTo": {}
      }
      let refUser = ''
      if (req.body.invitationCode) {
        refUser = await user.findOne({ invitationCode: req.body.invitationCode }).populate('invitationCode', 'userType');
      } else {
        refUser = await user.findOne({ "userType": "superadmin" })
      }
      refData["referedFrom"]["invitationCode"] = refUser.invitationCode
      refData["referedFrom"]["userType"] = refUser.userType
      refData["referedFrom"]["userId"] = refUser._id

      let invitationCode = (req.user.role.charAt(0)).toUpperCase() + parseInt(Date.now() + Math.random())
      refData["referedTo"]["invitationCode"] = invitationCode
      refData["referedTo"]["userType"] = req.user.role
      refData["referedTo"]["userId"] = req.user._id

      req.body.invitationCode = invitationCode
      let ref = new refmodule(refData);
      await ref.save();
      await user.updateOne({ email: req.body.email }, req.body);
      res.status(200).send({ result: true, message: "User registered successfully..." });
    } catch (e) {
      next(e);
    }
  },

  updateUserProfile: async (req, res, next) => {
    try {
      let find = {
        _id: req.query.id
      }
      delete req.body._id;
      let result = await user.findByIdAndUpdate(find, req.body);
      if (result)
        res.status(200).send({ result: true, message: "profile updated successfully!" })
    } catch (e) {
      next(e);
    }
  },

  sofDeleteUser: async (req, res, next) => {
    try {
      let find = {
        _id: req.query.id
      }
      delete req.body._id;
      let result = await user.findByIdAndUpdate(find, { isUserActive: false });
      if (result)
        res.status(200).send({ result: true, message: "user is not active longer" })
    } catch (e) {
      next(e);
    }
  },

  deleteUser: async (req, res, next) => {
    try {
      let result = await user.findByIdAndDelete(req.query.id);
      if (result)
        res.status(200).send({ result: true, message: "user successfully delete." });
    } catch (e) {
      next(e);
    }
  }
  // ******************************End Indivisual User**************************//

};