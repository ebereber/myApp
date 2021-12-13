import {useState, useEffect} from 'react'
import {getItem} from "../../Helpers/getItem"
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {

const [product, setProduct] = useState([])

useEffect(()=>{
    getItem
        .then(data => setProduct(data))
        .catch(err => console.log(err))
},[])



    return (
        <div>
            <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailContainer
