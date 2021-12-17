import {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import "./ItemListContainer.css"
import { getFetch } from '../../Helpers/getFetch'
import ItemList from '../ItemList/ItemList';



function ItemListContainer(props) {

    const [products, setProduct] = useState([]);
    const { idCategoria } = useParams()

  useEffect(() => {
        getFetch
        .then(dataRes => {
            let data = idCategoria
            ? dataRes.filter(products => products.description === idCategoria)
            :dataRes;
            setProduct(data)
    })
}, [idCategoria])
    

    return (
        <div className="item-container">
    
            <ItemList  products={products}/>
            
        </div>
    )
}

export default ItemListContainer
