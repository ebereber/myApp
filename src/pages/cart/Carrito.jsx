
import ItemsCart from "./items-cart";
import HeaderCart from "./header-cart"
import EmptyCart from "./empty-cart"
import TotalAmount from "./total-amount";
import { CartContainer } from "./styles";
import { useCartContext } from "../../Context/CartContext";
import Button from "../../components/button";

function Carrito() {
  const { cartList } = useCartContext();
 
  return cartList.length ? (
    <CartContainer>
      <HeaderCart />
      <ItemsCart />
      <hr />
      <TotalAmount />
    </CartContainer>
  ) : (
    <EmptyCart />
  );
}
export default Carrito
 