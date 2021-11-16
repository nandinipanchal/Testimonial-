const express = require('express')
const router = express.Router()
const upload = require('../middleware/imageupload')

const { getalltestimonial, createtestimonial } = require('../controllers/testimonial')


router.route('/').get(getalltestimonial)
router.route('/upload', upload.single('image')).post(createtestimonial)

module.exports = router



