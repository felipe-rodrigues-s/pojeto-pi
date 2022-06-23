import './styles.css'
import { useEffect, useState } from 'react'
import useFlashMessage from '../../hooks/useFlashMessage'
import { Link, useHistory } from 'react-router-dom'


//api
import api from '../../services/api'

function ProductDetails(props) {
    const [selectImage, setSelectImage] = useState('')
    const [images, setImages] = useState([])
    const { setFlashMessage } = useFlashMessage()
    const history = useHistory()
    const [product, setProduct] = useState({})
    const [token] = useState(localStorage.getItem('token') || '')

    useEffect(() => {

        const { pathname } = window.location
        const id = parseInt(pathname.split('/')[2])
        api.get('/products/' + id)
            .then(response => {
                setSelectImage(`${process.env.REACT_APP_API}/images/products/${response.data.product.images[0]}`)
                setImages(response.data.product.images)
                setProduct(response.data.product)
            })
    }, [token])

    function handleclick(e) {
        setSelectImage(e.target.src)
    }

    let products = JSON.parse(localStorage.getItem("product"))|| []
    
    function  handleAddToCart() {
        { token ? history.push('/cart') : history.push('/login') }
        products.push(product)   
        localStorage.setItem( 'product', JSON.stringify(products))
    }



    return (
        <div className='product-details-content'>
            <div className='left'>
                <div className='up'>
                    <img src={selectImage} alt="" />
                </div>

                <div className='down'>
                    {images.map(img => (
                        <div
                            className='each-img'
                            onClick={handleclick}
                        >
                            <img src={`${process.env.REACT_APP_API}/images/products/${img}`} alt="" />
                        </div>
                    ))}


                </div>
            </div>
            <div className='rigth'>
                <h3>{product.name}</h3>
                <h2>R$ {product.price}</h2>
                <Link to='/cart/' onClick={handleAddToCart}><input className='buynow' type='button' value='Comprar agora' /></Link>
                <input onClick={handleAddToCart} className='addcart' type='button' value='Adcicionar ao carrinho' />

            </div>
        </div>
    );
}


export default ProductDetails