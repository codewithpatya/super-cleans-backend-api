const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    productname:{
        type:String,
        required:true
    },
    createdby:{
        type:String
    },
    createdat:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model("product",productSchema)