
import "./Carrito.css"
import ItemsCart from "./items-cart";
import HeaderCart from "./header-cart"
import EmptyCart from "./EmptyCart";
import TotalAmount from "./total-amount";
import { Link } from "react-router-dom";
import { BtnPurchase, CartContainer } from "./styles";
import { useCartContext } from "../../Context/CartContext";

function Carrito() {
  const { cartList } = useCartContext();
 
  return cartList.length ? (
    <CartContainer>
      <HeaderCart />
      <ItemsCart />
      <hr />
      <TotalAmount />
      <Link to="/checkout">
        <BtnPurchase>Finalizar compra</BtnPurchase>
      </Link>
    </CartContainer>
  ) : (
    <EmptyCart />
  );
}
export default Carrito
 