
const Order = require('../Model/Order')


// get
exports.getOrder= async (req,res)=>{
    try {
        const data = await Order.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:false,message:error.message})
        
    }
}
// post
exports.postOrder= async (req,res)=>{
    try {
        const neworder= new Order(req.body)
        const data = await neworder.save()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:false,message:error.message})
        
    }
}
// put
exports.putOrder= async (req,res)=>{
    try {
        const id = req.params.id
        const data = await Order.findByIdAndUpdate(id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:false,message:error.message})
        
    }
}
// delete
exports.deleteOrder= async (req,res)=>{
    try {
        const id = req.params.id
        const data = await Order.findOneAndDelete(id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:false,message:error.message})
        
    }
}