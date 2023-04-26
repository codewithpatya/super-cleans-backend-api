const {getSales,postSales,putSales,deleteSales,salesLogin} = require("../Controller/SalesController")

const route = require("express").Router()

route.get("/",getSales)

route.post("/",postSales)

route.post("/login",salesLogin)

route.put("/:id",putSales)

route.delete("/:id",deleteSales)

module.exports = route


