const mongoose = require('mongoose');

const position = mongoose.Schema({
   Description: {
    require: true,
    type: String
   },
   Code: {
    require: true,
    type: String
   },
   isActive: {
    default: false,
    type: Boolean
   },
   type:{
    type:String, 
    enum:['Division','Cost Center','Department','Grade','Designation','Location','Company','Job Title']
}, 
},{ timestamps: true });

module.exports = mongoose.model('position',position);