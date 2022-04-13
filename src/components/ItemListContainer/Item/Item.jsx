import React from 'react'
import { Card, CardContainer, ProductImg, SHeading, SLink, SPrice, STitle } from './styles';



function Item({ product }) {

	const {id, pictureUrl, title, price } = product

  return (
    <CardContainer>
      <SLink to={`/detalle/${id}`}>
        <Card>
          <ProductImg src={pictureUrl} alt='' />
          <STitle>
            <SHeading>{title}</SHeading>
            <SPrice>${price} </SPrice>
          </STitle>
        </Card>
      </SLink>
    </CardContainer>
  )
}

export default Item;
