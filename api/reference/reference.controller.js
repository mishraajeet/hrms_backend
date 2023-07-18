 const reference = require("./reference.model");
 const user = require('../user/user.model');

module.exports = {
    referedUser: async (refUser) =>{
        try{
            return new Promise(async(resolve,reject) =>{
                const referedUser = {
                    "referedFrom" : {},
                    "referedTo": {}
                }
                if(refUser.referredUserId){
                   let referredUser = await user.findById(refUser.referredUserId)
                   referedUser["referedFrom"]["invitationCode"] = referredUser.invitationCode
                   referedUser["referedFrom"]["userType"] = referredUser.userType
                   referedUser["referedFrom"]["userId"] = referredUser._id
                } else{
                    let referredUser = await user.findOne({"userType": "superadmin"})
                    referedUser["referedFrom"]["invitationCode"] = referredUser.invitationCode
                    referedUser["referedFrom"]["userType"] = referredUser.userType
                    referedUser["referedFrom"]["userId"] = referredUser._id
                }
                referedUser["referedTo"]["invitationCode"] = refUser.invitationCode
                referedUser["referedTo"]["userType"] = refUser.userType
                referedUser["referedTo"]["userId"] = refUser._id
                let ref = new reference(referedUser);
                await ref.save();
                resolve(true)
            })
        } catch(e){
            console.log(e.message)
        }
    }
}