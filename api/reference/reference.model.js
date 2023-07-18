const mongoose = require('mongoose');

const reference = mongoose.Schema({
   referedFrom: {
      invitationCode: String,
      userType: String,
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
      }
   },
   referedTo: {
    invitationCode: String,
    userType: String,
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user'
    }
 }
},{ timestamps: true });

module.exports = mongoose.model('reference',reference);