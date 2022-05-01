import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { ProductsCategory } from "./page/ProductsCategory";
import { Cart } from "./page/Cart";
import { Catalogo } from "./page/Catalogo";
import { Home } from "./page/Home";
import { Product } from "./page/Products";
import { Login } from "./page/Log";
import StorageProvider from './components/Store/Provider'
import RoutesPrivate from './components/Routes/Private/Private'


export function AppRoutes() {
  return (

    <StorageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/product" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/teclados" element={<ProductsCategory />} />
          <Route path="/mouses" element={<ProductsCategory />} />
          <Route path="/headsets" element={<ProductsCategory />} />
          <Route path="/controllers" element={<ProductsCategory />} />
          <Route path="/mousepads" element={<ProductsCategory />} />
          <Route path="/microfones" element={<ProductsCategory />} />
        </Routes>
      </Router>
    </StorageProvider>

  )
}
