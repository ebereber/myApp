import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useCartContext } from '../../Context/CartContext'

function CartUnits() {
  const { cartList } = useCartContext()
  const [units, setUnits] = useState(0)

  const totalItems = () => {
    let counter = 0
    cartList.forEach((item) => {
      counter += item.quantity
    })
    return counter
  }

  useEffect(() => {
    setUnits(totalItems)
  }, [cartList])

  return <SUnits>{units}</SUnits>
}

export default CartUnits

const SUnits = styled.h4`
  font-size: 0.8rem;
`
