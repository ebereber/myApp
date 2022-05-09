import React from 'react'
import CartUnits from '../../../components/Cart/CartUnits'
import { useCartContext } from '../../../Context/CartContext'
import {
  Checkout,
  Subtotal,
  Total,
  Units,
  UnitsItems,
  TotalCheckAmount,
  SBox,
  ButtonCheckout,
} from './styles'

function TotalAmount() {
  const { totalPrice } = useCartContext()

  return (
    <Checkout>
      <SBox>
        <Total>
          <Subtotal>Total</Subtotal>
          <TotalCheckAmount>${totalPrice}</TotalCheckAmount>
        </Total>
        <UnitsItems>
          <CartUnits />
          <Units> unidades</Units>
        </UnitsItems>
        <ButtonCheckout to={'/checkout'}>Finalizar compra</ButtonCheckout>
      </SBox>
    </Checkout>
  )
}

export default TotalAmount
