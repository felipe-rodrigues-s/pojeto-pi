import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { Cart } from "./page/Cart";
import { Home } from "./page/Home";
import { Product } from "./page/Product";
import { Login } from "./page/Log";

import { AuthProvider} from './components/context/auth'
import { Private } from './components/Routes/Private/Private'


export function AppRoutes() {
  return (


    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/produto/:id" element={<Product />} />
          <Route exact path="/cart/:id" element={<Cart />} />
        </Routes>
      </AuthProvider>
    </Router>

  )
}
