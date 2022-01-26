
import { Link } from "react-router-dom";
import { useState } from "react";
import { useCartContext } from "../../Context/CartContext";
import { useProduct } from "../Hooks/useProduct";
import ItemCount from "../ItemCount/ItemCount";
import "../ItemDetailContainer/ItemDetail.css";



function ItemDetail() {
  const { product } = useProduct();

  const [cart, setCart] = useState(false);
  const { addToCart } = useCartContext();

  const onAdd = (quantityToAdd) => {
    setCart(true);
    addToCart({ ...product, quantity: quantityToAdd });
  };

  return (
    <>
      <div className="left-wrap">
        <img className="img-detalle" src={product.pictureUrl} alt="" />
      </div>
     

      <div className="right-wrap">
        <div className="center-div">
          <p className="p-product-description">{product.description}</p>
          <h1>{product.title}</h1>
          <p className="p-product detalle">
            {product.detail}.<br /> Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Velit architecto laboriosam explicabo minima
            aliquid esse pariatur.
          </p>
          <h2 className="p-product precio">${product.price}</h2>
          {!cart ? (
            <div className="item-count">
              <ItemCount onAdd={onAdd} />
            </div>
          ) : (
            <div className="buttonsDeatail">
              <Link to="/">
                <button className="btnCart">Seguir comprando</button>
              </Link>
              <Link to="/carrito">
                <button className="btnCart">Ir al carrito</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ItemDetail;
