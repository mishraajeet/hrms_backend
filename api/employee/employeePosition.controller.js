const employeePosition = require("./employeePosition.model");
const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

module.exports = {

  getAllPositions: async(req,res,next)=>{
    try{

        let filter ={}

        let result = await employeePosition.find(filter)
                    .sort({createAt:-1})
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
      let id =new mongoose.Types.ObjectId(req.query.id.trim());
      let result = await employeePosition.findByIdAndUpdate(
        id,
        { $push: { sub_position: req.body } },
        { new: true, useFindAndModify: false }
      );
      if (result)
        res.status(200).send({ result: true, message: "updated successfully!",data:result })
    } catch (e) {
      next(e);
    }
  },

 
  deleteemployeePosition: async (req, res, next) => {
    try {
      let result = await employeePosition.findByIdAndDelete(req.query.id,{new: true});
      if (result)
        res.status(200).send({ result: true, message: "successfully delete.",data: result });
    } catch (e) {
      next(e);
    }
  },


  deleteSubPosition: async (req, res, next) => {
    try {
      let id =new mongoose.Types.ObjectId(req.query.id.trim());
      let sub_id = new mongoose.Types.ObjectId(req.body.id.trim());
      let result = await employeePosition.findByIdAndUpdate(
        id,
        {
          $pull: {
            sub_position: { _id: sub_id}
          }
        },{
          new: true
        }
      );
      if (result)
        res.status(200).send({ result: true, message: "successfully delete.",data: result });
    } catch (e) {
      next(e);
    }
  }

};