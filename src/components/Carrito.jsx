import { useCartContext } from "../Context/CartContext";
import {useState, useEffect} from "react"
import{Link} from "react-router-dom"
import "./Carrito.css"
import {FiTrash2} from "react-icons/fi"


function Carrito() {

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

    

    

    return (
        	
            cartList.length > 0 ?
      <div className="cart-container">
            <h2>Carrito</h2>
            <hr />
            <li className="list">
            <p>DETALLE</p>
            <div>
                <p>CANTIDAD</p>
                <p className="precio">PRECIO</p>
            </div>
            </li>
            {cartList.map((item) => (
            <li key={item.id} className="product">
                <div className="item-det">
                <div className="img">
                    <img src={item.pictureUrl} alt="" />
                </div>
                <div className="title-detail">
                    <h4 className="titulo">{item.title}</h4>
                    <p>{item.detail}</p>
                </div>
                <div className="list-detalle">
                    <div className="quantity">
                    <p>{item.quantity}</p>
                    </div>
                     <div className="price">
                        <p className="">${item.price}</p>
                    </div>
                    <div className="removeItem">
                        <FiTrash2 className="trash" onClick={() => removeItem(item.id)}/>
                     </div>
                </div>
            </div>
          </li>
        ))}
        <h5 className="total-price">Total: ${totalPrice}</h5>
        <button className="delete-cart" onClick={deleteCart}>
          Vaciar Carrito
        </button>
      </div>
      :
      <div className="alert" >
	  <p> Todavía no agregaste productos al carrito.</p>
      <Link className="btn" to="/"><h3>Comprar productos</h3></Link>
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