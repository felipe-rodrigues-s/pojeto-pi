const ProdutosRecomendados =  require('../model/produtos-recomendados.json')

const PoductContoller = {
  product:(req, res) => {
    res.render('pages/product/index',{listaProdutos: ProdutosRecomendados});
  }
} 

module.exports = PoductContoller