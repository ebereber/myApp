import React from 'react'
import "./Item.css"
import {AiOutlineHeart} from "react-icons/ai"
import { Link } from 'react-router-dom';


function Item({product}) {
    return (

      <section key={product.id} className="item-card">

        <div className="item-photo">
             <img src={product.pictureUrl} alt="" />
            <AiOutlineHeart className="heart-button" />
            <div className="item-price">{product.price}</div>
        </div>
        <div className="item-detail">{product.title}</div>
        <div className="item-category">{product.description}</div>
        <Link to={`/detalle/${product.id}`}>
          <button className='button-detail'>Detalle</button>
        </Link>
      </section>
    );
}

export default Item
