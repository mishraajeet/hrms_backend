const mongoose = require('mongoose');
var jwt = require("jsonwebtoken");

const User = mongoose.Schema({
    email:{ 
        type:String,
        unique:true,
        trim:true,
        lowercase:true,
        required: 'Email address is required',
      //  validate: [validateEmail,'Please fill valid email...'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,'Please fill a valid email address'] 
    },
    password:{
        type:String
    },
},{ timestamps: true });

User.methods.generateAuthToken = function(){
    let genToken =  jwt.sign({_id:this._id}, 'hra_private_key');
    return genToken;
}
module.exports = mongoose.model('user',User);