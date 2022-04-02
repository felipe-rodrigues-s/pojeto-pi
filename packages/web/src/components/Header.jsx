export function Header() {
  return (
    <div>
      {/* <!-- Start header --> */}
      <header>
        {/* <!-- start logo --> */}
        <div class="logo">
          <a href="/">
            <img src="/" alt="" />
            LOGO
          </a>
        </div>
        {/* <!-- end logo --> */}
        {/* <!-- start menu --> */}
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
            <a id="menu-item" href="/mouse">
              Mouses
            </a>
            </li>
          <li>
            <a id="menu-item" href="/teclado">
              Teclado
            </a>
          </li>
        </ul>
        {/* <!-- end menu --> */}

        {/* <!-- start search-form --> */}
        <div class="search-form">
          <form action="/product/search" method="get">
            <input type="search" name="search" id="" placeholder="Pesquise aqui ..." />
            <button type="submit">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
        <div class="user-actions">
          <ul>
            <li>
              <a href="">
                <i class="fa-solid fa-user"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i class="fa-solid fa-bag-shopping"></i>
              </a>
            </li>
          </ul>
        </div>
        {/* <!-- end search-form --> */}
        <div id="menu-bars">
          <button onclick="openMenuDrodown()">
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>
      </header>
      {/* <!-- end header --> */}

      <div id="menu-bars-list">
        <div id="bar-form">
          <div class="bar-user-actions">
            <ul>
              <li>
                <a href="">
                  <i class="fa-solid fa-user"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="fa-solid fa-bag-shopping"></i>
                </a>
              </li>
            </ul>
          </div>
          <form action="/product/search" method="get">
            <input type="search" name="search" id="" placeholder="Pesquise aqui ..." />
            <button type="submit">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
      </div>
      <section id="call-center">
        <button>
          <img src="./src/assets/icons/user-headset.png" alt="Atendimento" />
        </button>
      </section>
    </div>
  )
}
