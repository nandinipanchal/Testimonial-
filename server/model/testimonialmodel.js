require('dotenv').config()
const mongoose = require('mongoose')

const testimonialSchema = new mongoose.Schema({
    thought : String,
    img :{
        data : Buffer,
        contentType : String
    }
})

module.exports = new mongoose.model('Testimonial',testimonialSchema)