const user = require("./user.model");
var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const sendMail =  require('../../common/sendMail');
const reference = require('../reference/reference.controller');

module.exports = {

  signUp: async (req, res, next) => {
    try {
      let result = await user.findOne({ email: req.body.email });
      if (result) res.status(208).send({ message: "User already exist..." });
      else {
        let User = new user(req.body);
        User.invitationCode = (req.body.userType.charAt(0)).toUpperCase() + parseInt(Date.now() + Math.random())
        let newUser = await User.save();
        let referedTo = {}
        referedTo["invitationCode"] = newUser.invitationCode
        referedTo["userType"] = newUser.userType
        referedTo["_id"] = newUser._id
        if(req.user && req.user._id)
         referedTo["referredUserId"] = req.user._id
         await reference.referedUser(referedTo)
         await sendMail.mail({})
        res.status(200).send({result: true,message: "Please check your mail.."});
      }
    } catch (e) {
      next(e);
    }
  },

  setPassword: async(req,res,next) =>{
    try {
      let result = await user.findById(req.body.id).populate('isUserVerified','-_id');
      if (!result) res.status(404).send({ message: "User not found..." });
      else {
        /*--------------Hashing Password---------------*/
        let salt = await bcrypt.genSalt(10);
         let password = await bcrypt.hash(req.body.password, salt);
         await user.updateOne({_id: req.body.id},{isUserVerified: true, password: password});
        res.status(200).send({result: true,message: "Password is updated!"});
      }
    } catch (e) {
      next(e);
    }
  },

  createSuperAdmin: async (req, res, next) => {
    try {
        let User = new user(req.body);
        let salt = await bcrypt.genSalt(10);
        User.password = await bcrypt.hash(password, salt);
        await User.save();
        res.status(200).send({result: true,message: "Super Admin Is created"});
    } catch (e) {
      next(e);
    }
  },

  login: async (req, res, next) => {
    try {
      let isUser = await user.findOne({ email: req.body.email });
      if (isUser == undefined || !isUser)
        res.status(208).send({ result: false, message: "Invalid User Name...!" });
      else {
        let isValidPassword = await bcrypt.compare(req.body.password,isUser.password);
        if (!isValidPassword)
          res.status(400).send({ result: false, message: "Invalid Password...!" });
        else {
          let token = isUser.generateAuthToken();
          res.status(200).header("x-auth-token", token).send({ result: true });
        }
      }
    } catch (e) {
      next(e);
    }
  },
  
  forgetPassword: async(req,res,next)=>{
    try{
      let isUser = await user.findOne({ email: req.body.email })
      if (isUser == undefined || !isUser)
        res.status(208).send({ result: false, message: "Invalid Email'Id...!" });
      else{
        await sendMail.mail(isUser)
        res.status(200).send({result: true,message: "Please check your mail.."});
      }
    }catch(e){
      next(e);
    }
  }
};