//models
const Product = require('../model/Product')
const { Op } = require('sequelize')

//helper
const getAllProducts = require('../helpers/get-products');


module.exports = class ProductController {
    static async add(req, res) {
        Product.findAll({ raw: true })
        res.render('pages/product/add');
    }

    static async search(req, res) {
        let search = ''
        if (req.query.search) {
            search = req.query.search
        }

        const productData = await Product.findAll({
            raw: true,
            where: {
                name: { [Op.like]: `%${search}%` }
            }, order: [['createdAt', 'ASC']]
        })

        console.log(productData.image)

        res.render('pages/product/searchResult', { search, productData })
    }

    static async details(req, res) {
        const id = req.params.id

        const product = await Product.findOne({
            raw: true,
            where: {
                id
            }
        })
            .then(product => {
                getAllProducts.then(products => {
                    console.log(product)
                    res.render('pages/product/details', { product, products })
                })
                    .catch(error => {
                        console.log(error)
                    })
            })
    }
}