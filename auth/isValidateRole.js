function isAdmin(req,res,next){
    if(req.user.role != 'admin') return res.status(403).send({result:false,message:'Unautherised User...'});
    next();
 }
 
 module.exports = {
     isAdmin:isAdmin
 }