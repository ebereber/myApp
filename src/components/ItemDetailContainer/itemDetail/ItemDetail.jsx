
import { useState } from "react";
import { useCartContext } from "../../../Context/CartContext";
import Button from "../../button";
import ItemCount from "../../ItemCount/ItemCount";
import { Buttons, DetailContainer, Left, ProductCategory, ProductDetail, ProductImg, ProductName, ProductPrice, Right, SBoxBtn } from "./styles";

function ItemDetail({ product }) {

  const {pictureUrl, description, title, detail, price} = product
  const [cart, setCart] = useState(false);
  const { addToCart } = useCartContext();

  const onAdd = (quantityToAdd) => {
    setCart(true);
    addToCart({ ...product, quantity: quantityToAdd });
  };

  return (
    <>
      <Left>
        <ProductImg src={pictureUrl} alt="" />
      </Left>

      <Right>
        <DetailContainer>
          <ProductCategory>{description}</ProductCategory>
          <ProductName>{title}</ProductName>
          <ProductDetail>
            {detail}.<br /> Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Velit architecto laboriosam explicabo minima
            aliquid esse pariatur.
          </ProductDetail>
          <ProductPrice>${price}</ProductPrice>
          {!cart ? (
              <SBoxBtn>
               <ItemCount onAdd={onAdd} />
              </SBoxBtn>
        
          ) : (
            
            <Buttons>
				{btn.map(({name, to,}, index) =>
				<Button key={index} to={to}>{name}</Button>
				)}
            </Buttons>
           
          )}
        </DetailContainer>
      </Right>
    </>
  )
}

export default ItemDetail;

const btn = [
	{name:"Seguir Comprando", to:"/"},
	{name:"Ir al carrito", to:"/carrito"}
]