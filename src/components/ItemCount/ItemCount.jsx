import React,{useState} from 'react'
import "./ItemCount.css"
import {FiPlus} from "react-icons/fi"
import {FiMinus} from "react-icons/fi"

function ItemCount({stock, onAdd}) {

    const inicial = 1;
    // const max = 8;

    const [count, setCount] = useState(inicial);

    const decrementCount = () =>{ 
        count > inicial && setCount(prev => prev - 1)
}

    const incrementCount = () =>{
        count < stock && setCount(prev => prev + 1)
}

  return (
    <div className="counter">
    
      <br />
      <div className="buttons">
        <button onClick={decrementCount} className="decrement"><FiMinus/></button>
        <h4>{count}</h4>
        <button onClick={incrementCount} className="increment"><FiPlus/></button>
      </div>
      <br />
        <button onClick={()=> onAdd(count)} className="addCart">Añadir al carrito</button>
    </div>
  );
}

export default ItemCount

