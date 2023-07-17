const user = require("./user.model");
var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const sendMail =  require('../../common/sendMail');
const res = require("express/lib/response");

module.exports = {

  signUp: async (req, res, next) => {
    try {
      let result = await user.findOne({ email: req.body.email });
      if (result) res.status(208).send({ message: "User already exist..." });
      else {
        let User = new user(req.body);
        await User.save();
        await sendMail.mail({})
        res.status(200).send({result: true,message: "Please check your mail.."});
      }
    } catch (e) {
      next(e);
    }
  },

  setPassword: async(req,res,next) =>{
    try {
      let result = await user.findById(req.body.id).populate('isUserVerified','-_id');;
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
};