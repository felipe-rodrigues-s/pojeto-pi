import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { ProductsCategory } from "./page/ProductsCategory";

import { Cart } from "./page/Cart";
import { Catalogo } from "./page/Catalogo";
import { Home } from "./page/Home";

const url = window.location.pathname;


export function AppRoutes() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/teclados" element={<ProductsCategory />} />
        <Route path={url} element={<ProductsCategory />} />
      </Routes>
    </Router>

  )
}
