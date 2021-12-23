import { useCartContext } from "../Context/CartContext";
import "./Carrito.css"

function Carrito() {

    const {cartList, deleteCart} = useCartContext()

    return (
        <div className="cart-container">
          <h2>Carrito</h2>
          <hr />
          <li className="list">
            <p>DETALLE</p>
            <div>
              <p>CANTIDAD</p>

              <p className='precio'>PRECIO</p>
            </div>
          </li>
          {cartList.map((item) => (
            <li key={item.id} className='product'>
              <div className="item-det">
                <div className="img">
                  <img src={item.pictureUrl} alt="" />
                </div>
                <div className="title-detail">
                  <h4 className="titulo">{item.title}</h4>
                  <p>{item.detail}</p>
                </div>
                <div className="list-detalle">
                  <div className='quantity'>
                    <p>{item.quantity}</p>
                  </div>
                  <div className='price'>
                    <p className=''>{item.price}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
          <button className='delete-cart' onClick={deleteCart}>Vaciar Carrito</button>
        </div>
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
    );
}

export default Carrito
