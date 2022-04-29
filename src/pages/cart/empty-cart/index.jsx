import React from 'react'
import Button from '../../../components/button';

import { Alert, EmptyCartContainer, EmptyCartIcon, SubtitleCart } from './styles';

function EmptyCart() {
  return (
    <EmptyCartContainer>
      <Alert>
        <EmptyCartIcon width="2em" height="2em" />
        <p> Todavía no agregaste productos al carrito.</p>
        <SubtitleCart>Cuando lo hagas, podrás verlos acá.</SubtitleCart>
        <Button to="/">
          Comprar productos
        </Button>
      </Alert>
    </EmptyCartContainer>
  );
}

export default EmptyCart;
