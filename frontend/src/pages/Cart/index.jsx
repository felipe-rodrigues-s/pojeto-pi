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
  // const [carts, setCarts] = useState([])
  const [images, setImages] = useState([])
  const [selectImage, setSelectImage] = useState('')
  const [token, setToken] = useState(localStorage.getItem('token') || '')
  let total = 0

  const [product, setProduct] = useState({})
  let carts = JSON.parse(localStorage.getItem("product"))

  const history = useHistory()
  useEffect(() => {
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
  for (let pr of carts) {
    if (pr.price) {
      total += pr.price
    }
  }

  { token ? history.push('/cart') : history.push('/login') }

  const handleRemoveProduct = (id) => {
    const elment = document.getElementById(id)
    carts = carts.filter(function (value, index) {
      return index != elment.id;
    });
    localStorage.setItem( 'product', JSON.stringify(carts))
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
                          <span>Preço: R$ {product.price},00</span>
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