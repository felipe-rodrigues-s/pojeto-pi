import { Card } from "../components/Cards";
import { CallCenter } from "../components/CallCenter";
import { Footer, Header } from "../components/Layout";
import '../styles/components/products_catgory.css';

const url = window.location.pathname;

let urlSplit = url.split("/")[1];

export function ProductsCategory() {


  return (
    <>
      <div className="header_product">
        <Header />
      </div>

      <div className="Cards">
      <h1 className="titel_category">{urlSplit}</h1>
        <Card />
      </div>

      <CallCenter />
      <div className="footer_product">
        <Footer />
      </div>
    </>
  )
}

