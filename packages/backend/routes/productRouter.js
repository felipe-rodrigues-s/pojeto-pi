const express = require('express');
const router = express.Router();

//controllers
const ProductController =  require('../controllers/ProductController')

/* GET users listing. */
router.get('/add',ProductController.add)
router.get('/search', ProductController.search)
router.get('/details/:id',ProductController.details)




module.exports = router;
