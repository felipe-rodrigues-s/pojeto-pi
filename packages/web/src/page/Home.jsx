import { Header, Footer, CarouselContainer } from "../components/Layout";
import { Category } from "../components/Categoria";
import { CallCenter } from "../components/CallCenter";
import'../styles/components/category.css'

export function Home() {
  return (
    <>
      <Header />
      <CarouselContainer />

      <div className="Categorys">
        <Category />
      </div>
      <CallCenter />

      <Footer />
    </>
  )

}
