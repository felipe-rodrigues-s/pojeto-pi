import { Header, Footer, CarouselContainer } from "../components/Layout";
import { Card } from "../components/Cards";

export function Home() {
  return (
    <>
      <Header />
      <CarouselContainer />

      <div className="Cards">
        <Card />
        <Card />
        <Card />
      </div>

      <Footer />
    </>
  )

}
