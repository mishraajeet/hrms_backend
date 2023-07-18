
function isAdmin(req,res,next){
    if(req.user.role === 'individual') return res.status(403).send({result:false,message:'Unautherised User...'});
    next();
 }
 
 function individual(req,res,next){
    if(req.user.role != 'individual') return res.status(403).send({result:false,message:'Unautherised User...'});
    next();
 }
 

 module.exports = {
     isAdmin:isAdmin,
     individual: individual
 }