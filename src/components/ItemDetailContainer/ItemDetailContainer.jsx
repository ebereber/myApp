import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {getFetch} from "../../Helpers/getFetch"
import "./ItemDetailContainer.css"
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {
const [product, setProduct] = useState([])
const {id} = useParams()

useEffect(()=>{
    getFetch
        .then(data => setProduct(data.find((product) => product.id === +id)))
        .catch(err => console.log(err))
        
},[id])

    return (
      <>
        <div className="container-item">
          <ItemDetail product={product} />
        </div>
      </>
    );
}

export default ItemDetailContainer
