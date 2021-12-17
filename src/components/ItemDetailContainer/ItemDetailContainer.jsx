import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {getItem} from "../../Helpers/getItem"
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {

const [product, setProduct] = useState([])
const {id} = useParams()

useEffect(()=>{
    getItem
        .then(data => setProduct(data.find(prod => prod.id === parseInt(id))))
        .catch(err => console.log(err))
        .finally(()=>setProduct(false))
},[])



    return (
        <div>
            <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailContainer
