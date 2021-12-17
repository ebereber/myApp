import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {getFetch} from "../../Helpers/getFetch"
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {

const [product, setProduct] = useState([])
const {id} = useParams()

useEffect(()=>{
    getFetch
        .then(data => setProduct(data))
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
