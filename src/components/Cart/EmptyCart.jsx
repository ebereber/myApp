import React from 'react'
import{GiShoppingCart} from "react-icons/gi"
import{Link} from "react-router-dom"

function EmptyCart() {
  return (
    <div className="cajadiv">
      <div className="alert">
        <GiShoppingCart className="empty-cart" width="2em" height="2em" />
        <p> Todavía no agregaste productos al carrito.</p>
        <p className="sub-cart">Cuando lo hagas, podrás verlos acá.</p>
        <Link className="btn" to="/">
          <h3>Comprar productos</h3>
        </Link>
      </div>
    </div>
  );
}

export default EmptyCart;
