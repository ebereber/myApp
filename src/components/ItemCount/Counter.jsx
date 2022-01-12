import React,{useState} from 'react'
import {FiPlus} from "react-icons/fi"
import {FiMinus} from "react-icons/fi"

function Counter({ stock, onAdd }) {
  const inicial = 1;

  const [count, setCount] = useState(inicial);

  const decrementCount = () => {
    count > inicial && setCount((prev) => prev - 1);
  };

  const incrementCount = () => {
    count < stock && setCount((prev) => prev + 1);
  };
  
  return (
    <div className="counter">
      <br />
      <div className="buttons">
        <FiMinus onClick={decrementCount} className="decrement" />
        <h4 className="count-number">{count}</h4>
        <FiPlus onClick={incrementCount} className="increment" />
      </div>
      <br />
      <button onClick={() => onAdd(count)} className="addCart">
        Añadir al carrito
      </button>
    </div>
  );
}

export default Counter;
