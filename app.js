// import packages
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv/config')

// adding routers
const OrderRouter = require('./Routers/orderRouter')
const userRouter = require('./Routers/userRouter')
const Daily_manufRouter = require('./Routers/Daily_manufRouter')

// inilization
const app = express()
app.cors = cors()

// midd
app.use(express.json())

// url
app.use('/api/order',OrderRouter)
app.use('/api/user',userRouter)
app.use('/api/daily_manuf',Daily_manufRouter)

// listen
app.listen(process.env.PORT)

// default get
app.get('/', (req, res) => {
    res.send('This is Backend-2')
})


// connection string
async function main() {
    const res = await mongoose.connect(process.env.DB,{useNewUrlParser: true,
        useUnifiedTopology: true})
        const data = res.default
        console.log(data.STATES['1']);
}
main()


