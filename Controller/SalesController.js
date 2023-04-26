const Sales = require("../Model/Sales")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

exports.getSales = async (req,res)=>{
    try {
        const data = await Sales.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.postSales = async (req,res)=>{
    try {
        // check user exists or not
        const userExist = await Sales.findOne({email:req.body.email})
        if(userExist) return res.json({errors:true,message:"User Already Exists!!"})

        // password encryption
        const salt = await bcrypt.genSalt(10)
        req.body.password = await bcrypt.hash(req.body.password,salt)

        const newUser = new Sales(req.body)
        const data = await newUser.save()

        return res.json({errors:false,data:data}) 
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

// login for sales
exports.salesLogin = async (req,res)=>{
    try {
        const userExist = await Sales.findOne({email:req.body.email})
        if (!userExist) return res.json({errors:true,message:"User And Password Is Invalid!!"})

        const chechPassword = await bcrypt.compare(req.body.password,userExist.password)
        if (!chechPassword) return res.json({errors:true,message:"User And Password Is Invalid!!"})

        const token = await jwt.sign({_id:userExist._id},process.env.SEC)

        return res.json({errors:false,data:{token:token,user:userExist}})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.putSales = async (req,res)=>{
    try {
        const data = await Sales.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})  
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message}) 
    }
}

exports.deleteSales = async (req,res)=>{
    try {
        const data = await Sales.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})    
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message}) 
    }
}

