import React,{useState} from 'react'
import "./ItemCount.css"
import {FiPlus} from "react-icons/fi"
import {FiMinus} from "react-icons/fi"

function ItemCount() {

    const inicial = 1;
    const max = 8;

    const [count, setCount] = useState(inicial);

    const decrementCount = () =>{ 
        count > inicial && setCount(prev => prev - 1)
}

    const incrementCount = () =>{
        count < max && setCount(prev => prev + 1)
}

  return (
    <div className="counter">
        <h3 className="title">Counter</h3>
      <br />
      <div className="buttons">
        <button onClick={decrementCount} className="decrement"><FiMinus/></button>
        <h4>{count}</h4>
        <button onClick={incrementCount} className="increment"><FiPlus/></button>
      </div>
      <br />
        <button className="addCart">Añadir al carrito</button>
    </div>
  );
}

export default ItemCount

