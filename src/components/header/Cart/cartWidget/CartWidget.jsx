
import {MdOutlineShoppingCart} from "react-icons/md"
import { useCartContext } from "../../../../Context/CartContext";
import CartUnits from "../CartUnits";
import { Cart, SLink, TotalItems } from "./styles";


function CartWidget() {

 const {cartList} = useCartContext()
   
    return (
		
        cartList.length  ?
<SLink to="/carrito">
        <Cart>
            <MdOutlineShoppingCart size="1.5em"/>
		
            <TotalItems>
            	<CartUnits/>
            </TotalItems>
        </Cart>
		</SLink>
        :
		<SLink to="/carrito">
		<Cart>
        <MdOutlineShoppingCart size="1.5em" />
		</Cart>
		</SLink>
		
    )
}

export default CartWidget

