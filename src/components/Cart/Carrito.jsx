import { useCartContext } from "../../Context/CartContext";

import "./Carrito.css"

import ItemsCart from "./ItemsCart";
import HeaderCart from "./HeaderCart";
import EmptyCart from "./EmptyCart";
import TotalAmount from "./TotalAmount";
import { Link } from "react-router-dom";



function Carrito() {

    const { cartList, } = useCartContext()
    
   
 

   


    return cartList.length > 0 ? (
      <div className="cart-container">
        
        <HeaderCart/>
        <ItemsCart/>
        <hr />
        {/* <div className="check"> */}
        <TotalAmount/>
        <Link to="/checkout">
        <button className="btn-purchase">Finalizar compra</button>
        </Link>
        {/* </div> */}
        
      </div>
    ) : (
      <EmptyCart/>
    );
}

export default Carrito
 