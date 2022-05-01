import React, {useContext} from "react"

import { AuthContext} from "../components/context/auth"

export function Cart() {
  const {autenticated,logout} = useContext(AuthContext)
const handleLogout = ()=> {
  logout()
}
  return (
    <>
      <h1>Carts</h1>;
      <nav>
        <ul>
          <a href="/">
            <li>Home</li>
          </a>

          <a href="/catalogo">
            <li>catalogo</li>
          </a>

          <a href="/cart">
            <li>cart</li>
          </a>
        </ul>
      </nav>
      <p>{String(autenticated)}</p>
    <button onClick={handleLogout}>Logout</button>
    </>
  )
}
