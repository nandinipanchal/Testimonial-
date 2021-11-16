const Testimonial = require('../model/testimonialmodel')
const fs = require('fs')
const path = require('path')


const getalltestimonial = async(req,res) =>{
   try{
       const test = await Testimonial.find()
       res.status(200).json({
           test,
           count : test.length
       })
   }
   catch(error){
       console.error(error)
   }
}

const createtestimonial = async(req,res) =>{
    try{
      
        console.log('createtestimonial: ');
        var obj ={
            thought : req.body.thought,
            img :{
                data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
                contentType: 'image/jpeg'
            }
        }
        const test = await Testimonial.create(obj)
        
        // res.status(200).json({
        //     test
        // })
        res.redirect('/');
       
    }catch(error){
        console.error(error)
    }
}

module.exports ={
    getalltestimonial,
    createtestimonial
}