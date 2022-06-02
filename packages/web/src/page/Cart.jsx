import React from "react"

import { Footer, Header } from "../components/Layout"

import "../styles/page/cart.css"


const  products = JSON.parse(localStorage.getItem("product"))


export function Cart() {


  return (

    <div className="cart">
      <Header />
      <section >

    { products.map((product) => {
           return (
            <>
               {/* <img src={img} />  */}
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>{product.amount}</p>
            </>
          )
    }
    )}

      </section>



      <Footer />
    </div>
  )
}
