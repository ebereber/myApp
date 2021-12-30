import React from 'react'
import "./Item.css"
import {AiOutlineHeart} from "react-icons/ai"
import { Link } from 'react-router-dom';


function Item({product}) {
    return (
    
      <div className="cont">
          <div className="card">
            <img src={product.pictureUrl} alt="" />
            <div className="info">
              <h3 >{product.title}</h3>
              <p className='text'>{product.detail} </p>
                <Link to={`/detalle/${product.id}`}>
                <button>Detalle</button>
                </Link>
            </div>
          </div>
      </div>

         /* <section key={product.id} className="item-card">
            <div className="item-photo">
              <img src={product.pictureUrl} alt="" />
                <AiOutlineHeart className="heart-button" />
              
            </div>
            <div className="item-detail">{product.title}</div>
            <div className="item-price">${product.price}</div>

            <Link to={`/detalle/${product.id}`}>
              <button className="button-detail">Detalle</button>
            </Link>
        </section>  */
        


    );
}

export default Item
