import { useState } from 'react'
import { useProduct } from './useProduct'
import { useCartContext } from '../../Context/CartContext'

export const useCounterAdd = () => {
  const { product } = useProduct()
  const [cart, setCart] = useState(false)
  const { addToCart } = useCartContext()

  const stock = product.stock

  const onAdd = (quantityToAdd) => {
    setCart(true)
    addToCart({ ...product, quantity: quantityToAdd })
  }

  const inicial = 1

  const [count, setCount] = useState(inicial)

  const decrementCount = () => {
    count > inicial && setCount((prev) => prev - 1)
  }

  const incrementCount = () => {
    count < stock && setCount((prev) => prev + 1)
  }

  return { cart, count, onAdd, decrementCount, incrementCount, stock, product }
}
