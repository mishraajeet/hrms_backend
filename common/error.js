module.exports = (err,req,res,next)=>{
    res.status(500).send({result:false,message: err.message});
 }