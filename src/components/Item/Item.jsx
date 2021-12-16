import React from 'react'
import "./Item.css"
import {AiOutlineHeart} from "react-icons/ai"


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
      </section>
    );
}

export default Item
