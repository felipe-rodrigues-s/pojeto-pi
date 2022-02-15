var express = require('express');
var router = express.Router();

const IndexContoller = require('../controller/IndexController')

/* GET home page. */
router.get('/', IndexContoller.index);

module.exports = router;
