const mongoose = require('mongoose');
var jwt = require("jsonwebtoken");

const account = mongoose.Schema({
    paymentType: String,
    bankName: String,
    bankBranch: String,
    accountNumber: String,
    ifsc_code: String
});

const position = mongoose.Schema({
    position: String,
    selectedSubPosition: String
});

const emp_pfDetails = mongoose.Schema({
    panNumber: String,
    IncludePF: String,
    IncludeESI: String,
    IncludeLWF: String,
    PFNumber: String,
    UANNumber: String,
    contribution: String,
    ESINumber : String
})

const User = mongoose.Schema({
    fullName: {
        type:String,
    },
    DOB:  {
        type: Date
    },
    Email:{ 
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
    EmployeeNumberSeries: {
        type: String,
        required: true
    },
    EmployeeNo: {
        type: String,
        required: true
    },
    Gender: {
        type: String,
    },
    MobileNumber: {
        type: String
    },
    DateOfJoining: {
        type: Date
    },
    FatherName: {
        type: String
    },
    SpouseName: {
        type: String,
    },
    AdhaarNumber: {
        type: String,
    },
    EmergencyContactName: {
        type: String
    },
    EmergencyContactNumber: {
        type: String
    },
    Status: {
        type: String
    },
    img: {
        url: String,
    },
    ReportingManager: {
        type: mongoose.Schema.ObjectId,
        ref: 'user'
    },
    previous_rm: [],
    accountdetails: account, 
    emp_position: [position],
    emp_pf: emp_pfDetails
},{ timestamps: true });

User.methods.generateAuthToken = function(){
    let genToken =  jwt.sign({_id:this._id}, 'hra_private_key');
    return genToken;
}
module.exports = mongoose.model('user',User);