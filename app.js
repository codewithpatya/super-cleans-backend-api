// imports pacakges
const express = require("express")
const mongoose = require("mongoose")
const cors  = require("cors")
const app = express()
require("dotenv/config")

// route imports
const Salesroute = require("./Routing/SalesRoutes")
const Categoryroute = require("./Routing/CategoryRoutes") 
const Subategoryroute = require("./Routing/SubcategoryRoutes")
const Employeeroute = require("./Routing/EmployeeRoutings")
const Productroute = require("./Routing/ProductRoutes")


// middleware
app.use(express.json())
app.use(cors())


// By Default Get req
app.get('/',(req,res)=>{
    res.send("This Is Backend-1")
})

// apis
app.use("/api/sales",Salesroute)
app.use("/api/Categorys",Categoryroute)
app.use("/api/Subcategorys",Subategoryroute)
app.use("/api/employee",Employeeroute)
app.use("/api/product",Productroute)


// connection
app.listen(process.env.PORT)

async function main() {
    const res = await mongoose.connect(process.env.DB,{useNewUrlParser: true,
        useUnifiedTopology: true})
        const data = res.default
        console.log(data.STATES['1']);
}
main()

