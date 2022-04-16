import React from 'react'

import {FiTrash2} from "react-icons/fi"
import { useCartContext } from '../../../Context/CartContext';
import { Amount, ImgProduct, ItemQuantity, Productli, RemoveItem, SubTitleItem, TitleDetail, TitleItem, TrashBtn } from './styles';


function ItemsCart() {

  const { cartList, removeItem } = useCartContext();

  return (
    <>
      {cartList.map((item) => (
        <Productli key={item.id}>
          <ImgProduct src={item.pictureUrl} alt="" />
          <TitleDetail>
            <TitleItem>{item.title}</TitleItem>
            <SubTitleItem>{item.detail}</SubTitleItem>
          </TitleDetail>
          
          <ItemQuantity>{item.quantity}</ItemQuantity>
         
          <Amount>${item.price}</Amount>
          <RemoveItem>
            <TrashBtn onClick={() => removeItem(item.id)} />
          </RemoveItem>
        </Productli>
      ))}
    </>
  );
}

export default ItemsCart
