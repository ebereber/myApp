import React from 'react'
import { useCartContext } from '../../../Context/CartContext';
import CartUnits from "../../header/Cart/CartUnits";

function TotalAmount() {

  const{totalPrice}= useCartContext()

    return (
      <div className="checkout">
      <div className="total">
        <div>
          <div className="Subtotal">Total</div>
          <div className="units-items">
            <CartUnits />
            <p className="p-units"> unidades</p>
          </div>
        </div>
        <div className="total-amount">${totalPrice}</div>
      </div>
    </div>
    );
}

export default TotalAmount
