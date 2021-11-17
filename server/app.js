require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

const testimonials = require('.//routes/testimonial')
const connectDB = require('./db/connect')


app.use('/api/v1',testimonials)


const start = async() =>{
    try{
        await connectDB(process.env.MONGO_URL)
        app.listen(5000, (req,res)=>{
            console.log('server started')
        })
    }
    catch(error){
        console.error(eror)
    }
}

start()

