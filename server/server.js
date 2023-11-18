const userRoutes = require('./routes/userRoutes')
const mongoose = require('mongoose')
const express = require('express')
const app = express()
require('dotenv').config()

// DB connection && Listening App on port


mongoose.connect(process.env.MONGO_URL, {
}, (err)=>{
    if(err) console.log (err);    
    console.log('Your DATABASE is connected successfully')

    const PORT = 8000
    app.listen(PORT, ()=>{
    console.log(`Your app is listened on port ${PORT}`)
})
})

// Middlewares
app.use(express.json())
express.urlencoded({extended : true})
 
//routes


app.use(userRoutes)