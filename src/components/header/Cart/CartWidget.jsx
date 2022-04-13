
import {MdOutlineShoppingCart} from "react-icons/md"
import { Link } from "react-router-dom";

import styled from 'styled-components';
import { useCartContext } from "../../../Context/CartContext";
import { b, space } from "../../../styles/Variables";
import CartUnits from "./CartUnits";





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

const SLink =styled(Link)`
text-decoration: none;
color: inherit;
`

const Cart = styled.div`
	display: flex;
    align-items: center;
	margin-right: ${space.md};
	cursor: pointer;
	;
	 @media ${b.md}{
		margin-left: ${space.xl}
		
	} 
	
`;

const CartIcon = styled.div`
font-size: 1.5rem;
`

const TotalItems = styled.div`
  background: ${({theme})=> theme.text};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    color: ${({theme}) => theme.primary};
    display: flex;
    justify-content: center;
    align-items: center;
`