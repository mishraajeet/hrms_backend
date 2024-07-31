const monggose  = require('mongoose')

const leave = monggose.Schema({
    leaveType: {
        type: String
    },
    startDate: {
        type: Date
    },
    endDate: {
        type: Date
    },
    comment: {
        type: String
    },
    emp: {
      type: monggose.Schema.ObjectId,
      ref: 'user'
    },
    status: {
        type: String,
        enum: ['Approved', 'Pending', 'Reject'],
        default: 'Pending'
    },
    approver: {
        type: String
    }
})