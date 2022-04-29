import React from 'react'
import { useCartContext } from '../../../Context/CartContext';
import { Amount, ImgProduct, ItemQuantity, Product, ProductDetail, ProductDetalTwo, RemoveItem, SBox, SubTitleItem, TitleDetail, TitleItem, TrashBtn } from './styles';


function ItemsCart() {

  const { cartList, removeItem } = useCartContext();

  return (
    <>
      {cartList.map((item) => (
        <Product key={item.id}>

          <ProductDetail>
            <ImgProduct src={item.pictureUrl} alt="" />
          </ProductDetail>

<SBox>
          <TitleDetail>
              <TitleItem>{item.title}</TitleItem>
              <SubTitleItem>{item.detail}</SubTitleItem>
              </TitleDetail>
              
           <ProductDetalTwo>
            <ItemQuantity>{item.quantity}</ItemQuantity>
            <Amount>${item.price}</Amount>
            <RemoveItem>
              <TrashBtn onClick={() => removeItem(item.id)} />
            </RemoveItem>
            </ProductDetalTwo>
         
            </SBox>
        </Product>
      ))}
    </>
  );
}

export default ItemsCart
