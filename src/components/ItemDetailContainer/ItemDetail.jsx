import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react/cjs/react.development'
import { useCartContext } from '../../Context/CartContext'
import ItemCount from '../ItemCount/ItemCount'
import "../ItemDetailContainer/ItemDetail.css"

function ItemDetail({product}) {

    

    const[cart, setCart]=useState(false)
    const{cartList,addToCart} = useCartContext()

    const onAdd= quantityToAdd =>{
        console.log(quantityToAdd)
        setCart(true)
        addToCart({...product,quantity:quantityToAdd})
    }
console.log(cartList);
    return (
      <div className="container">
        <div className="images">
          <img src={product.pictureUrl} alt="" />
        </div>
        <div className="producto">
          <p>{product.description}</p>
          <h1>{product.title}</h1>
          <p>{product.price}</p>
          <p>{product.detail}</p>
          {!cart ? (
            <div className="item-count">
              <ItemCount stock={product.stock} onAdd={onAdd} />
            </div>
          ) : (
              <Link to="/carrito">
            <button className='btnCart'>Ir al carrito</button>
            </Link>
          )}
        </div>
      </div>
    );
}

export default ItemDetail
