import { Header, Footer, CarouselContainer } from "../components/Layout";
import { Category } from "../components/Categoria";
import { CallCenter } from "../components/CallCenter";
import'../styles/components/category.css'

//api
// import api from '../utils/api'

export function Home() {

  return (
    <>
      <Header />
      <CarouselContainer />

      <div className="Categorys">
        {}
        <Category />
      </div>
      <CallCenter />

      <Footer />
    </>
  )

}
