import React from 'react'
import { useCartContext } from "../../Context/CartContext";

function HeaderCart() {

    const {deleteCart } = useCartContext()

    return (
        <div className="header">
          <h2 className="title-cart"> Carrito</h2>
          <h5 className="delete-cart" onClick={deleteCart}>
            Vaciar Carrito
          </h5>
        </div>
    )
}

export default HeaderCart
