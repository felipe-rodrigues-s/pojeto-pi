const express = require('express');
const router = express.Router();


//helpers
const getAllSlides = require('../helpers/get-slides')
const getAllProducts = require('../helpers/get-products')

/* GET home page. */
router.get('/', function (req, res, next) {

  getAllSlides.then(slides => {
    getAllProducts.then(products => {
      res.render('index', { slides, products })
    })
  })
    .catch(error => {
      console.log(error)
    })


});


module.exports = router;
