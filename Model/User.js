
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile_no: {
        type: Number,
        required: true
    },
    created_by: {
        type: String
        
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('user', userSchema)