import { useEffect, useState } from "react";
import { useCartContext } from "../../Context/CartContext";

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

  return <h4>{units}</h4>;
}

export default CartUnits;
