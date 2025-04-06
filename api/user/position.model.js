const mongoose = require('mongoose');
var jwt = require("jsonwebtoken");

const position = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    value: []
},{ timestamps: true });

const emp_position = mongoose.Schema({
    emp_position: [position]
})

module.exports = mongoose.model('emp_position',emp_position);