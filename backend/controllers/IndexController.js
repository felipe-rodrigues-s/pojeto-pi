//models
const Slider = require('../model/Slider')

//helper

module.exports = class IndexController {
    static async getAllSlides(req, res) {
      await  Slider.findAll({ raw: true })
            .then(slides => {
                res.render('index', {slides})
            })
    }
    static async details(req, res) {
        console.log('alii')
    }
}