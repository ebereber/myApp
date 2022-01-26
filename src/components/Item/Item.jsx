import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom';


function Item({product}) {
    return (
    
      <div className="cont">
<Link to={`/detalle/${product.id}`} className='linksItem'>
          <div className="card">
            <div className='cardWrapper'>
            <div className='imgDiv'>
            
            <img src={product.pictureUrl} alt="" />
            
            </div>
            <div className='infoBox'>
            <div className="info">
            
              <h3 className='ProdTitle' >{product.title}</h3>
            
              <p className='textPrice'>${product.price} </p>
              </div>
              
            </div>
            </div>
          </div>
          </Link>
      </div>

    );
}

export default Item
