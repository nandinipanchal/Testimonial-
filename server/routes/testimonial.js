const express = require('express')
const router = express.Router()
const upload = require('../middleware/imageupload')

const { getalltestimonial, createtestimonial } = require('../controllers/testimonial')


router.route('/').get(getalltestimonial)
router.route('/upload').post(upload.single('file'),createtestimonial)


module.exports = router



