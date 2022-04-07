import { Header, Footer, CarouselContainer } from "../components/Layout";
import { Category } from "../components/Categoria";

export function Home() {
  return (
    <>
      <Header />
      <CarouselContainer />

      <div className="Categorys">
        <Category />
      </div>

      <Footer />
    </>
  )

}
