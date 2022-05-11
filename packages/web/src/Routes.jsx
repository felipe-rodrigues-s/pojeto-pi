import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { ProductsCategory } from "./page/ProductsCategory";
import { Cart } from "./page/Cart";
import { Catalogo } from "./page/Catalogo";
import { Home } from "./page/Home";
import { Product } from "./page/Products";
import { Login } from "./page/Log";

import { AuthProvider} from './components/context/auth'
import { Private } from './components/Routes/Private/Private'


export function AppRoutes() {
  return (


    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Private><Cart /></Private>} />
          <Route exact path="/catalogo" element={<Catalogo />} />
          <Route exact path="/product" element={<Product />} />
          <Route path="projeto-pi-nine.vercel.app/login" element={<Login />} />
          <Route exact path="/teclados" element={<ProductsCategory />} />
          <Route exact path="/mouses" element={<ProductsCategory />} />
          <Route exact path="/headsets" element={<ProductsCategory />} />
          <Route exact path="/controllers" element={<ProductsCategory />} />
          <Route exact path="/mousepads" element={<ProductsCategory />} />
          <Route exact path="/microfones" element={<ProductsCategory />} />
        </Routes>
      </AuthProvider>
    </Router>

  )
}
