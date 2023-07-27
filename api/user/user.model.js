const mongoose = require('mongoose');
var jwt = require("jsonwebtoken");

const User = mongoose.Schema({
    firstName: {
        type:String,
        minlength: 5,
        maxlength:50
    },
    lastName: {
        type:String,
        minlength: 5,
        maxlength:50
    },
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
        require:true,
        type:String
    },
    contactInfo:{
        phoneNo: Number,
        countryCode: String,
        isPrivate: {
            type: Boolean,
            default: false
        },
        isEditable: {
            type: Boolean,
            default: true
        }
    },
    invitationCode: String,
    industry: {
        Value: String,
        isEditable: {
            type: Boolean,
            default: true
        }
    },
    jobRole: {
        Value: String,
        isEditable: {
            type: Boolean,
            default: true
        }
    },
    experience: {
        Value: String,
        isEditable: {
            type: Boolean,
            default: true
        }
    },
    companyName: {
        Value: String,
        isEditable: {
            type: Boolean,
            default: true
        }
    },
    img: {
        url: String,
        isEditable: {
            type: Boolean,
            default: true
        }
    },
    status: {
        Value: String,
        isEditable: {
            type: Boolean,
            default: true
        }
    },
    isUserActive: {
        type: Boolean,
        default: true
    },
    isUserVerified: {
        type: Boolean,
        default: false
    },
    userType:{
        type:String, 
        enum:['individual','Company','Reseller','superadmin'],
        default:'individual'
    }, // For role base API
    orgLogo: String,
    GstNo: String,
    userName: String,
    address: {
      address1: String,
      address2: String,
      country: String,
      state: String,
      city: String,
      pincode: Number,
    }
},{ timestamps: true });

User.methods.generateAuthToken = function(){
    let genToken =  jwt.sign({_id:this._id,role:this.userType}, 'structure_private_key');
    return genToken;
}
module.exports = mongoose.model('user',User);