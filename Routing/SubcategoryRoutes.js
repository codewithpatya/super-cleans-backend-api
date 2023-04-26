const {getSubcategory,postSubcategory,putSubcategory,deleteSubcategory} = require("../Controller/SubcategoryController")

const route = require("express").Router()

route.get("/",getSubcategory)

route.post("/",postSubcategory)

route.put("/:id",putSubcategory)

route.delete("/:id",deleteSubcategory)

module.exports = route


