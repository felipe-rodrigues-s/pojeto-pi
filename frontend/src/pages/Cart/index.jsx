import './styles.css'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { AiOutlineLine, AiOutlinePlus } from 'react-icons/ai'

//components
import CardContainer from '../../components/CardContainer'

//api
import api from '../../services/api'

function Cart(props) {
  const [products, setProdutos] = useState([])
  const [token, setToken] = useState(localStorage.getItem('token') || '')
  const [total, setTotal] = useState(0)
  const [carts, setCarts] = useState(JSON.parse(localStorage.getItem("product")) || {})

  const history = useHistory()
  useEffect(() => {
    // group()
    countTotal()
    setToken(localStorage.getItem('token'))
    api.get('/products/')
      .then(response => setProdutos(response.data.products))

    api.get('/carts/', {
      headers: {
        Authorization: `Bearer ${JSON.parse(token)}`,
      }
    })
      .then(response => console.log(response.data))
  }, [token])

  { token ? history.push('/cart') : history.push('/login') }

  const countTotal = () => {
    let totalAux = 0
    for (let pr of carts) {
      if (pr.price) {
        totalAux += pr.price
      }
    }
    totalAux = parseFloat(totalAux.toFixed(2));
    setTotal(totalAux)
  }

  // const group = () => {
  //   function groupBy(array, key) {
  //     return array.reduce((acc, item) => ({
  //       ...acc,
  //       [item[key]]: [...(acc[item[key]] ?? []), item],
  //     }),
  //       {})
  //   }



  //   const cartsGruped = groupBy(carts, 'id')
  //   let cartsGrupedRemoveTrash = []

  //   Object.keys(cartsGruped).forEach((item) => {
  //     if (item != 'undefined') {
  //       cartsGrupedRemoveTrash.push(cartsGruped[item])
  //     }
  //   });
  //   setCarts(cartsGrupedRemoveTrash)
  // }

  // console.log(carts)

  const handleRemoveProduct = (id) => {
    const elment = document.getElementById(id)
    let cartsAux = carts.filter(function (value, index) {
      return index != elment.id;
    });
    localStorage.setItem('product', JSON.stringify(cartsAux))
    setTotal(countTotal())
    setCarts(cartsAux)
  }


  return (
    <>
      <div className='cart-content'>
        <h2>Carinho de compras</h2>
        {carts.length > 0 ? (
          <div className='cart-itens'>

            {carts.map((product, i) => {
              return (
                <>
                  {product.name && (
                    <div className="item_cart">
                      <div className="item_cart_img_price">
                        <img src={`${process.env.REACT_APP_API}/images/products/${product.images}`} />
                        <div className="item_cart_price">
                          <span>Preço: R$ {product.price}  </span>
                        </div>
                      </div>
                      <div className='item_cart_name'>
                        <h3>{product.name}</h3>
                      </div>
                      <div className="add_remove">
                        <AiOutlineLine onClick={() => handleRemoveProduct(i)} id={i} />
                        <AiOutlinePlus />
                      </div>
                    </div>
                  )}
                </>
              )
            })}
          </div>
        ) : (
          <div className='cart-itens nothing'>
            <h1>Sem nenhum produto no carinho</h1>
          </div>
        )}
      </div>
      <div className="total_price">
        <h3>Total: R$ {total} </h3>
        <input type="button" value="Finalizar compra" />
      </div>
      <h4>Destaque</h4>
      {products.length == 0 ? (
        <h1>Sem produtos cadastrados</h1>
      ) : (
        <div className='cart-content-down'>
          <CardContainer cards={products} />
        </div>
      )}
    </>



  )
}


export default Cart