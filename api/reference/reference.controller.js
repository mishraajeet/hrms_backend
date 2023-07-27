const reference = require("./reference.model");
const user = require('../user/user.model');

module.exports = {
    referedUser: async (refUser) => {
        try {
            return new Promise(async (resolve, reject) => {
                const referedUser = {
                    "referedFrom": {},
                    "referedTo": {}
                }
                if (!refUser && refUser.referedFrom && refUser.referedFrom.invitationCode) {
                    let referredUser = await user.findOne({ "userType": "superadmin" })
                    refUser["referedFrom"]["invitationCode"] = referredUser.invitationCode
                    refUser["referedFrom"]["userType"] = referredUser.userType
                    refUser["referedFrom"]["userId"] = referredUser._id
                }
                let ref = new reference(refUser);
                await ref.save();
                resolve(true)
            })
        } catch (e) {
            console.log(e.message)
        }
    }
}