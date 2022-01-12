import { useCartContext } from "../../Context/CartContext";
import "./Carrito.css"
import ItemsCart from "./ItemsCart";
import HeaderCart from "./HeaderCart";
import EmptyCart from "./EmptyCart";
import TotalAmount from "./TotalAmount";
import { Link } from "react-router-dom";



function Carrito() {
  const { cartList } = useCartContext();

  return cartList.length ? (
    <div className="cart-container">
      <HeaderCart />
      <ItemsCart />
      <hr />
      <TotalAmount />
      <Link to="/checkout">
        <button className="btn-purchase">Finalizar compra</button>
      </Link>
    </div>
  ) : (
    <EmptyCart />
  );
}

export default Carrito
 