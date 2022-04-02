const Product = require('../model/Product')
const getAllProducts = Product.findAll({ raw: true })

module.exports = getAllProducts 