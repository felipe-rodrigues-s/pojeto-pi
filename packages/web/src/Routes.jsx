import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { Cart } from "./page/Cart";
import { Catalogo } from "./page/Catalogo";
import { Home } from "./page/Home";




export function AppRoutes() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/catalogo" element={<Catalogo />} />
      </Routes>
    </Router>

  )
}
