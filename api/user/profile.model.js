const mongoose = require('mongoose');
var jwt = require("jsonwebtoken");

const Profile = mongoose.Schema({
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
    EmployeeNumberSeries: {
        type: String,
        required: true
    },
    EmployeeNo: {
        type: String,
        required: true
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
    img: {
        url: String,
    },
    status: {
        Value: String,
    },
    Gender: {
        type: String,
    },
    ReportingManager: {
        type: String
    },
    MobileNumber: {
        type: String
    },
    Status: {
        type: String
    },
    DateOfJoining: {
        type: Date
    },
    ProbationPeriod: {
        type: Number
    },
    ConfirmationDate: {
        type: String
    },
    EmergencyContactName: {
        type: String
    },
    EmergencyContactNumber: {
        type: String
    },
    isEditableByEmp: {
        type: String
    },
    Division: {
        type: String
    },
    Cost_Center: {
        type: String
    },
    Department: {
        type: String
    },
    Grade: {
        type: String
    },
    Designation: {
        type: String
    },
    Location: {
        type: String
    },
    Company: {
        type: String
    },
    Job_Title: {
        type: String
    },
    panNumber: {
        type: String
    },
    IncludePF: {
        type: Boolean
    },
    IncludeESI: {
        type: Boolean
    },
    IncludeLWF: {
        type: Boolean
    },
    PFNumber: {
        type: String
    },
    UANNumber: {
        type: String
    },
    contribution: {
        type: String
    },
    ESINumber: {
        type: String
    },
    paymentType: {
        type: String
    },
    bankName: {
        type: String
    },
    bankBranch: {
        type: String
    },
    accountNumber: {
        type: String
    },
    dDPayableAt: {
        type: String
    },
},{ timestamps: true });

Profile.methods.generateAuthToken = function(){
    let genToken =  jwt.sign({_id:this._id}, 'hra_private_key');
    return genToken;
}
module.exports = mongoose.model('profile',Profile);