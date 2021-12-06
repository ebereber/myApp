import React from 'react'
import "./ItemListContainer.css"
function ItemListContainer(props) {
    
    return (
        <div className="item-container">
            {props.greetings}
        </div>
    )
}

export default ItemListContainer
