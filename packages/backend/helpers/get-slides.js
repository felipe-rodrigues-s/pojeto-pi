const Slider = require('../model/Slider')
const getAllslides = Slider.findAll({ raw: true })

module.exports = getAllslides 