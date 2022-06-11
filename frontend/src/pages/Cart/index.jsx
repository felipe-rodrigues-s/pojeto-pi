import './styles.css'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { AiOutlineMinus } from 'react-icons/ai'

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

  const [product, setProduct] = useState({})


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

  { token ? history.push('/cart') : history.push('/login') }

  const carts = JSON.parse(localStorage.getItem("product"))
  console.log(carts)
  return (
    <>
      <div className='cart-content'>
        <h2>Carinho de compras</h2>
        {carts.length > 0 ? (
          <div className='cart-itens'>

            {carts.map((product) => {
              const { images } = product

              return (
                <>
                  <div className="item_cart">
                    <div className="description_item">
                      <div className="item_img">
                        <img src={'../../../../bacnkend/public/images/products/' + { images }} alt="Imagens dos produtos" />
                      </div>
                      <div className="item">
                        <h1>{product.name}</h1>
                        <span>{product.price}</span>
                      </div>
                    </div>
                    <button type="reset"><i><AiOutlineMinus /></i></button>
                  </div>
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