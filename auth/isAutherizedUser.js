var jwt = require("jsonwebtoken");

module.exports = (req,res,next)=>{
    let token = req.header('x-auth-token');
    if(!token) next()
    else{
        try{
            const decode = jwt.verify(token,'structure_private_key');
            req.user = decode;
            next();
        }
        catch(ex){
            res.status(400).send({result:false,message:'Invalid Token.'});
        }
    }
}