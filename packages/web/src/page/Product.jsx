import { CallCenter } from "../components/CallCenter";
import { Footer, Header } from "../components/Layout";
import "../styles/page/products.css"

import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";




export function Product() {

  const idProduct = window.location.pathname

  let product = idProduct.split('/')[2]


  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/src/assets/produtos.json")
      .then((res) => res.json())
      .then(setData);
  }, []);

  if (!data || !data.length) return null;



  return (
    <div id="secaoProduto">
      <div className="header_product">
        <Header />
      </div>



      <div id="areaProduto">
        {data.map((item) => {

          let products = JSON.parse(localStorage.getItem("product"))|| []

          const { id, img, name, description, amount } = item;

          function SubmitProduct(){

            products.push(item)

            if (item.id == product) {
               localStorage.setItem( 'product', JSON.stringify(products))
            }
          }


          if (item.id == product) {


            return (
              <>
                <div className="img_product">

                    <img
                      className="d-block w-100"
                      src={img[1]}
                      alt="First slide"
                    />

                </div>
                <div className="product_detalhes">
                  <div className="product_title">
                    <h1>{name}</h1>
                  </div>
                  <div className="product_description">
                    <ul>
                      <li>{description[0]}</li>
                      <li>{description[1]}</li>
                    </ul>
                  </div>
                  <div className="product_price">
                    <p>R${amount}</p>
                  </div>

                  <a href="/cart" onClick={SubmitProduct} className="button">Compra</a>
                  <a onClick={SubmitProduct} >Adicionar ao carrinho</a>

                </div>


              </>
            )
          }


        })}



      </div>


      <CallCenter />
      <div className="footer_product">
        <Footer />
      </div>
    </div>
  )
}



