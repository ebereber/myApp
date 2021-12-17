import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import "../ItemDetailContainer/ItemDetail.css"

function ItemDetail({product}) {


    return (
      
            <div className="container">
            <div className="images">
                <img src={product.pictureUrl} alt="" />
            </div>
            <div className="producto">
                <p>{product.description}</p>
                <h1>{product.title}</h1>
                <p>{product.price}</p>
                <p>{product.detail}</p>
                <div className="item-count">
                <ItemCount />
                </div>
            </div>
            </div>
      
    );
}

export default ItemDetail
