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
    }
}