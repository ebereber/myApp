import React from 'react'
import { useCartContext } from "../../../Context/CartContext";
import { DeleteCart, Header, Heading } from './styles';

function HeaderCart() {

    const {deleteCart } = useCartContext()

    return (
        <Header>
          <Heading> Carrito</Heading>
          <DeleteCart onClick={deleteCart}>
            Vaciar Carrito
          </DeleteCart>
        </Header>
    )
}

export default HeaderCart
