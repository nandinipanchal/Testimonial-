const Testimonial = require('../model/testimonialmodel')
const fs = require('fs')
const path = require('path')
const upload = require('../middleware/imageupload')

const getalltestimonial = async (req, res) => {
    try {
        const test = await Testimonial.find()
        res.status(200).json({
            test,
            count: test.length
        })
    }
    catch (error) {
        console.error(error)
    }
}

const createtestimonial = async (req, res) => {
    try {

        console.log(req.body.thought);
        if (req.file === undefined) {
            return res.send("you must select a file.")
        }
        else {

            var obj = {
                thought: req.body.thought,
                img: {
                    data: fs.readFileSync('./uploads/' + req.file.filename),
                    contentType: req.file.mimetype //'image/jpeg'
                }
            }
            const test = await Testimonial.create(obj)

            res.status(200).json({
                fileUrl: 'http://localhost:5000/uploads/' + req.file.filename
            })
        }



    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    getalltestimonial,
    createtestimonial
}

