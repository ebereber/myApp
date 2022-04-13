import { useEffect, useState } from "react";
import { useCartContext } from "../../../Context/CartContext";
import styled from 'styled-components';

function CartUnits() {
  const { cartList } = useCartContext();
  const [units, setUnits] = useState(0);

  const totalItems = () => {
    let counter = 0;
    cartList.forEach((item) => {
      counter += item.quantity;
    });
    return counter;
  };

  useEffect(() => {
    setUnits(totalItems);
  }, [cartList]);

  return <SUnits>{units}</SUnits>;
}

export default CartUnits;


const SUnits = styled.h4`
font-size: .8rem;

`