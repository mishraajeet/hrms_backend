const user = require("./user.model");
const profile = require('./profile.model');
const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const sendMail = require('../../common/sendMail');
const SequenceNumber = require('./sequenceNumber.model');

module.exports = {

  getAllUsers: async(req,res,next)=>{
    try{
        let pageNumber = req.body.initial;
        let pageSize = 10;

        let filter ={}
        let search = []

        if(req.body.searchUsers){
          const regexPattern = new RegExp(req.body.searchUsers, 'i');

          let firstFilter = {}
          let secondFilter = {}
          firstFilter["fullName"] = { $regex: regexPattern }
          secondFilter["EmployeeNo"] = { $regex: regexPattern }

          search.push(firstFilter)
          search.push(secondFilter)
          filter["$or"] = search
        }

        if(req.body.isActive)
          filter["isUserActive"] = true
        let result = await profile.find(filter)
                    .sort({createAt:-1})
                    .skip((pageNumber -1)* pageSize)
                    .limit(pageSize)
        res.status(200).send({result: true, data: result});
    }catch(e){
        console.log(e);
    }
},

getReportingManager: async(req,res,next)=>{
  try{
      let filter ={}
      // filter["isUserActive"] = true
      let result = await profile.find(filter).select('fullName -_id')
                  .sort({fullName:-1})
      res.status(200).send({result: true, data: result});
  }catch(e){
      console.log(e);
  }
},

getEmpBirthday: async(req,res,next)=>{
   try{
  const today = new Date();
  const startOfDay = new Date(today.setHours(0, 0, 0, 0));
  const endOfDay = new Date(today.setHours(23, 59, 59, 999));

    let filter = {
      "DOB": {
        $gte: startOfDay,
        $lte: endOfDay
      }
    }
    let result = await profile.find(filter)
    res.status(200).send({result: true, data: result});
   } catch(e){
    next(e)
   }
},

getNewJoiningEmp: async(req,res,next)=>{
  try{
 const startOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(),1);
 const endOfMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1 ,0,23,59,59,999);
 
   let filter = {
     "DateOfJoining": {
       $gt: startOfMonth,
       $lte: endOfMonth
     }
   }
   let result = await profile.find(filter)
   res.status(200).send({result: true, data: result});
  } catch(e){
   next(e)
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
        await User.save();
        res.status(200).send({ result: true, message: "Super Admin Is created" });
      }
    } catch (e) {
      next(e);
    }
  },

  login: async (req, res, next) => {
    try {
      let isUser = await user.findOne({ email: req.body.email });
      if (isUser == undefined || !isUser)
        res.status(404).send({ result: false, message: "Invalid User Name...!" });
      else {
        let isValidPassword = await bcrypt.compare(req.body.password, isUser.password);
        if (!isValidPassword)
          res.status(400).send({ result: false, message: "Invalid Password...!" });
        else {
          let token = isUser.generateAuthToken();
          res.status(200).header("x-auth-token", token).send({ result: true, email: isUser.email, role: isUser.userType });
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

  // ******************************Start Employee**************************//
  registerUser: async (req, res, next) => {
    try {
      let result = await profile.findOne({ EmployeeNumberSeries: req.body.EmployeeNumberSeries, isActive: true });
      if (result) res.status(208).send({ message: "Employee Number Series already exist..." });
      else {
        let userProfile = new profile(req.body);
        await userProfile.save();
        await SequenceNumber.findByIdAndUpdate({_id: req.body.seriel_id},{isActive: true})
        let credential = {
          email: req.body.email,
          password: 'test@123'
        }
        let User = new user(credential);
        let salt = await bcrypt.genSalt(10);
        User.password = await bcrypt.hash(req.body.password, salt);
        await User.save();
        // await sendMail.mail(req.body.email)
        res.status(200).send({ result: true, message: "user registered successfully!" });
      }
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
      let result = await profile.findByIdAndUpdate(find, req.body);
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
  },

  saveSequenceNumber: async(req,res,next)=>{
    try{
        let result = await SequenceNumber.findOne({"isActive": false})
        if(result){
          res.status(200).send({result: true, message: "next sequence number", data: result})
        } else {
          const lastRecord = await SequenceNumber.findOne({},{},{ sort: { 'createdAt' : -1 } })
          if(lastRecord){
            const seq = parseInt(lastRecord.sequence) + 1; 
            const obj = {"isActive": false,sequence: seq}
            let sequence = new SequenceNumber(obj)
            let data = await sequence.save();
            res.status(200).send({result: true, message: "new sequence number", data: data})
          } else {
            const seq = 100
            const obj = {"isActive": false,sequence: seq}
            let sequence = new SequenceNumber(obj)
            let data = await sequence.save();
            res.status(200).send({result: true, message: "new sequence number", data: data})
          }
        }
    } catch(e){
      next(e)
    }
  }
};