import Counter from "./Counter";
import "./ItemCount.css";

function ItemCount({onAdd }) {

  return <Counter  
          onAdd={onAdd} />;
}

export default ItemCount;