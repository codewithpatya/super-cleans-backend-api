const Category = require("../Model/Category")

exports.getCategory = async (req,res)=>{
    try {
        const data = await Category.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.postCategory = async (req,res)=>{
    try {
        const newCategory = new Category(req.body)
        const data = await newCategory.save()
        return res.json({errors:false,data:data}) 
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.putCategory = async (req,res)=>{
    try {
        const data = await Category.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})  
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message}) 
    }
}

exports.deleteCategory = async (req,res)=>{
    try {
        const data = await Category.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})    
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message}) 
    }
}

