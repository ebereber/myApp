
import React,{useState} from 'react'
import { useProduct } from '../../../hooks/useProduct';
import { AddCart, Decrement, Increment, SButtons, SCounter, SCountNumber } from './styles';

function Counter({ onAdd }) {

  const { product } = useProduct()
  
  const stock = product.stock

  const inicial = 1;

  const [count, setCount] = useState(inicial);

  const decrementCount = () => {
    count > inicial && setCount((prev) => prev - 1);
  };

  const incrementCount = () => {
    count < stock && setCount((prev) => prev + 1);
  }; 
  
  return (
    <SCounter>
       <SButtons>
          <Decrement onClick = {decrementCount}/>
          <SCountNumber>{count}</SCountNumber>
          <Increment onClick={incrementCount}/>
        </SButtons>

      <AddCart onClick={() => onAdd(count)} >
        Añadir al carrito
      </AddCart>
    </SCounter>
  );
}

export default Counter;
