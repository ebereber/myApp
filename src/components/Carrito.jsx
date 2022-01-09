import { useCartContext } from "../Context/CartContext";
import {useState, useEffect} from "react"
import{Link} from "react-router-dom"
import "./Carrito.css"
import {FiTrash2} from "react-icons/fi"
import{GiShoppingCart} from "react-icons/gi"
import CartUnits from "./NavBar/CartUnits";
import ItemCount from "./ItemCount/ItemCount";



function Carrito({product}) {

  
  
    const { cartList, deleteCart, removeItem } = useCartContext()
    const[ totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        if(cartList.length > 0){
            setTotalPrice(
                cartList
                .map((item) => item.price * item.quantity)
                .reduce((total, valor) => total + valor)
            )
        }
        
    }, [cartList]) 

    

    

    return cartList.length > 0 ? (
      <div className="cart-container">
        <div className="header">
          <h2 className="title-cart"> Carrito</h2>
          <h5 className="delete-cart" onClick={deleteCart}>
            Vaciar Carrito
          </h5>
        </div>

        {cartList.map((item) => (
          <li key={item.id} className="productli">
            <img className="img-product" src={item.pictureUrl} alt="" />

            <div className="title-detail">
              <h4 className="title-item">{item.title}</h4>
              <p className="sub-item">{item.detail}</p>
            </div>
           {/*  <ItemCount/> */}
            <p className="item-quantity">{item.quantity}</p>

            <p className="amount">${item.price}</p>
            <div className="removeItem">
              <FiTrash2 className="trash" onClick={() => removeItem(item.id)} />
            </div>
          </li>
        ))}
        <hr />

        <div className="checkout">
        <div className="total">
        <div>
        <div className="Subtotal">Sub-Total</div>
        <div className="units-items">
            <CartUnits/> 
            <p className="p-units"> unidades</p>
        </div>
        </div>
        <div className="total-amount">${totalPrice}</div>
        </div>
        
        </div>



      </div>
    ) : (
      <div className="cajadiv">
        <div className="alert">
          <GiShoppingCart className="empty-cart" width="2em" height="2em" />
          <p> Todavía no agregaste productos al carrito.</p>
          <p className="sub-cart">Cuando lo hagas, podrás verlos acá.</p>
          <Link className="btn" to="/">
            <h3>Comprar productos</h3>
          </Link>
        </div>
      </div>
    );
}

export default Carrito
 /* 
      <div className="product-cart">
            <h3>Carrito</h3>
                {cartList.map((item) => (
                <div key={item.id} className="cart-item">
                    <div className='cart'>
                        <div className="cart-product-info">
                            <div className="cart-image">
                               <img src={item.pictureUrl} alt="" /> 
                            </div>
                            <div className="cart-product-info">
                            <p>{item.title}</p>
                            <p className="cart-price">{item.price}</p>
                            </div>
                            <div className="cart-quatity">
                            <div className="cart-quantity-controls">
                                <button>-</button>
                                {item.quantity}
                                <button>+</button>
                            </div>
                            </div>
                            <div className="cart-unit-price">
                            <p> {item.price}</p>
                            </div>
                        </div>
                    </div>
          </div>
        ))}
      </div>
      */