var express = require('express');
var router = express.Router();
const PoductContoller = require('../controller/PoductContoller')

router.get('/',PoductContoller.product);

module.exports = router;
