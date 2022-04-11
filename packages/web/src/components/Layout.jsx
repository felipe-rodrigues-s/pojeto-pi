import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect,useState } from 'react';
import { Carousel } from 'react-bootstrap';


export function Header() {
  return (
    <>
      <header>
        <div className="logo">
          <a href="/">
            <img src="/" alt="" />
            LOGO
          </a>
        </div>
        <ul id="menu">
          <li>
            <a id="menu-item" href="/">
              Home
            </a>
          </li>
          <li>
            <a id="menu-item" href="/catalogo">
              Todos os Produtos
            </a>
          </li>

          <li>
            <a id="menu-item" href="/">
              Mouses
            </a>
          </li>
          <li>
            <a id="menu-item" href="/">
              Teclado
            </a>
          </li>
        </ul>
        <div className="search-form">
          <form action="/product/search" method="get">
            <input type="search" name="search" id="" placeholder="Pesquise aqui ..." />
            <button type="submit">
              <img src="./src/assets/icons/lupa-24.png" alt="Busca produto" />
            </button>
          </form>
        </div>
      </header>
      <section id="call-center">
        <button>
          <img src="./src/assets/icons/headset-64.png" alt="Atendimento" />
        </button>
      </section>
    </>
  )
};

export function CarouselContainer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/src/assets/img-carousel.json")
      .then((res) => res.json())
      .then(setData);
  }, []);

  if (!data || !data.length) return null;

  return (
    <Carousel>
       {data.map((item) => {
        const {img, category} = item;
        return (
          <Carousel.Item interval={10000}>
        <img
          className="d-block w-100"
          src={img}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{category}</h3>
        </Carousel.Caption>
      </Carousel.Item>
        )
      })}


      {/* <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://api.kromgaming.com/thumbnails/product_gallery_background/uploads/product/gallery/backgrounds/krom_kappa_background-ttk40jd770.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Teclados</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://api.kromgaming.com/thumbnails/product_gallery_background/uploads/product/gallery/backgrounds/8fkqbktnfv-krom_kane_setup_01.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Mouses</h3>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
};


export function Footer() {
  return (
    <footer>
      <section className="contacts">
        <h3>ATENDIMENTO</h3>
        <ul>
          <li>
            <a href="">
              <i className="fa-brands fa-whatsapp"></i>

              (00)9 0000-0000
            </a>
          </li>
          <li>
            <a href="">
              <i className="fa-solid fa-at"></i>

              faleconosco@sac.com.br
            </a>
          </li>
        </ul>
      </section>

      <section className="payments">
        <h3>ACEITAMOS</h3>
        <ul>
          <li>
            <a href="">
              <i className="fa-brands fa-cc-visa"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className="fa-brands fa-pix"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className="fa-brands fa-cc-mastercard"></i>
            </a>
          </li>
        </ul>
      </section>

      <section className="social-media">
        <h3>social media</h3>
        <ul>
          <li>
            <a href="">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className="fa-brands fa-facebook-square"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </li>
        </ul>
      </section>
    </footer>
  )
}
