import { Header, Footer, CarouselContainer } from "../components/Layout";
import { Products } from "../components/Products";
import { CallCenter } from "../components/CallCenter";
import'../styles/components/produto.css'

//api
// import api from '../utils/api'

export function Home() {

  return (
    <>
      <Header />
      <CarouselContainer />


      <div id="Produtos">

        <Products />
      </div>
      <CallCenter />

      <Footer />
    </>
  )

}
