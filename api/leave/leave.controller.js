const model = require('./leave.module');


module.exports = {
    createLeave: async(req,res,next)=>{
        try {
              let leave = new model(req.body);
              await leave.save();
              res.status(200).send({ result: true, message: "Leave has been applyed successfully!" });
          } catch (e) {
            next(e);
          }
    },

    ActionTakenLeave: async(req,res,next)=>{
      try {
        let find = {
          emp: req.query.id
        }
        let Update = {
          status: req.body.action
        }
        let result = await leave.findOneAndUpdate(find, Update);
        if (result)
          res.status(200).send({ result: true, message: "profile updated successfully!" })
      } catch (e) {
        next(e);
      }
    },

    getLeave: async(req,res,next)=>{
      try{
        let filter = {}
        if(req.body.userId)
          filter['emp'] = req.body.userId
        if(req.body.approver)
          filter['approver'] = req.body.approver
        
        let result = await leave.find(filter)
        .sort({createAt:-1})
        .skip((pageNumber -1)* pageSize)
        .limit(pageSize)
        res.status(200).send({result: true, data: result});
      } catch(e){
        next(e)
      }
    }
}