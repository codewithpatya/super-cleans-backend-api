const mongoose = require('mongoose')

const dailySchema = new mongoose.Schema({
    status: {
        type: String,
        required: true
    },
    packing_type: {
        type: Number,
        required: true
    },
    filling: {
        type: Number,
        required: true
    },
    total_product_kg: {
        type: Number,
        required: true
    },
    batch: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    bag: {
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

module.exports= mongoose.model('daily',dailySchema)