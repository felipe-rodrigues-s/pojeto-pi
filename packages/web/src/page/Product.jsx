import { CallCenter } from "../components/CallCenter";
import { Footer, Header } from "../components/Layout";
import "../styles/page/products.css"

import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";



export function Product() {
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

      {console.log(data.map(function (item) {
        if (item.id == 2) {
          console.log(item.name)
        }

      }))}


      <div id="areaProduto">
        {data.map((item) => {
          const { id, img, name, description, amount } = item;
          if (item.id == 2) {
            return (
              <>
                <div className="img_product">
                <Carousel>
                  <Carousel.Item interval={10000}>
                    <img
                      className="d-block w-100"
                      // {for (let index = 0; index < img.length; index++) {
                      //   return image=img[index];
                      // }}
                      src={img[1]}
                      alt="First slide"
                    />
                  </Carousel.Item>
                </Carousel>
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

                  <Link to={`/cart/${id}`} className="button">Compra</Link>

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



