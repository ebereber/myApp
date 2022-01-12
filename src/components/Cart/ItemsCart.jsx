import React from 'react'
import { useCartContext } from "../../Context/CartContext";
import {FiTrash2} from "react-icons/fi"


function ItemsCart() {
  const { cartList, removeItem } = useCartContext();

  return (
    <>
      {cartList.map((item) => (
        <li key={item.id} className="productli">
          <img className="img-product" src={item.pictureUrl} alt="" />
          <div className="title-detail">
            <h4 className="title-item">{item.title}</h4>
            <p className="sub-item">{item.detail}</p>
          </div>
          <p className="item-quantity">{item.quantity}</p>
          <p className="amount">${item.price}</p>
          <div className="removeItem">
            <FiTrash2 className="trash" onClick={() => removeItem(item.id)} />
          </div>
        </li>
      ))}
    </>
  );
}

export default ItemsCart
