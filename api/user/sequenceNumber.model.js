const mongoose = require('mongoose');
var jwt = require("jsonwebtoken");

const SequenceNumber = mongoose.Schema({
    sequence: {
        type:String,
    },
    isActive: {
        type: Boolean
    }
},{ timestamps: true });

module.exports = mongoose.model('SequenceNumber',SequenceNumber);