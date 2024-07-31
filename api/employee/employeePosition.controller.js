const employeePosition = require("./employeePosition.model");
const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

module.exports = {

  getAllPositions: async(req,res,next)=>{
    try{
        let pageNumber = req.body.initial;
        let pageSize = 100;

        let filter ={}
        if(req.body.type)
          filter["type"] = req.body.type
        if(req.body.isActive)
          filter["isActive"] = true

        let result = await employeePosition.find(filter)
                    .sort({createAt:-1})
                    .skip((pageNumber -1)* pageSize)
                    .limit(pageSize)
        res.status(200).send({result: true, data: result});
    }catch(e){
        console.log(e);
    }
},

addPosition: async (req, res, next) => {
    try {
        let emp = new employeePosition(req.body);
       let record = await emp.save();
        res.status(200).send({ result: true, message: "position registered successfully!",data: record });
    } catch (e) {
      next(e);
    }
  },


  updatePosition: async (req, res, next) => {
    try {
      let find = {
        _id: req.query.id
      }
      delete req.body._id;
      let result = await employeePosition.findByIdAndUpdate(find, req.body);
      if (result)
        res.status(200).send({ result: true, message: "updated successfully!" })
    } catch (e) {
      next(e);
    }
  },

 
  deleteemployeePosition: async (req, res, next) => {
    try {
      let result = await employeePosition.findByIdAndDelete(req.query.id);
      if (result)
        res.status(200).send({ result: true, message: "successfully delete." });
    } catch (e) {
      next(e);
    }
  }

};