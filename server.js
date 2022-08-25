const express=require('express')
const dotenv=require('dotenv').config()

const {errorHandler}=require('./middleware/errorMiddleware')
const authRoutes = require("./routes/authRoutes");
const sellerRoutes=require("./routes/sellerRoutes")

const connectDB=require('./config/db/db')



const app=express()

app.use(express.json())  // middleware to print json data
app.use(express.urlencoded({extended:false}))
  


app.use('/api/auth',authRoutes)
app.use('/api/seller',sellerRoutes)

 app.use(errorHandler) // it will overRide the default express error handler

 app.listen(5000,()=>{
    console.log(`server running at port 5000 `)
})