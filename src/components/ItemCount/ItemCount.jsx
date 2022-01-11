
import Counter from "./Counter";
import "./ItemCount.css"



function ItemCount({stock, onAdd}) {

  

  return (
    <>
      <Counter stock={stock} onAdd={onAdd}/>
    </>
  );
}

export default ItemCount

