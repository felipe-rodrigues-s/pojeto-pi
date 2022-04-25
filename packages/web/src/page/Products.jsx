import { CallCenter } from "../components/CallCenter";
import { Footer, Header } from "../components/Layout";
import "../styles/page/products.css"

export function Product() {


  return (
    <>
      <div className="header_product">
        <Header />
      </div>

      <div className="produto">
        <div className="img_product">
          <img src="https://api.kromgaming.com/thumbnails/product_gallery_background/uploads/product/gallery/backgrounds/krom_kasic_tkl_bacground-4e850zrpe6.jpg"/>
        </div>

        <div className="product_detalhes">
        <div className="product_title">
            <h1>nome produto</h1>
        </div>
        <div className="product_description">
            <ul>
              <li>text 1</li>
              <li>text 2</li>
              <li>text 3</li>
            </ul>
        </div>
          <div className="product_price">
            <p>R$ 200.50</p>
          </div>

        </div>
      </div>


      <CallCenter />
      <div className="footer_product">
        <Footer />
      </div>
    </>
  )
}
