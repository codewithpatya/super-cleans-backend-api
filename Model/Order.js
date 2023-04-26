const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    product_name: {
        type: String,
        required: true
    },
    order_in_kg: {
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

module.exports = mongoose.model('order', orderSchema)