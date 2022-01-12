import React from 'react'
import "./Item.css"
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

    );
}

export default Item
