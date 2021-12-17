import {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import "./ItemListContainer.css"
import { getFetch } from '../../Helpers/getFetch'
import ItemList from '../ItemList/ItemList';



function ItemListContainer(props) {

    const [products, setProduct] = useState([]);
    const [loading, setLoading] = useState(true)

    const { idCategoria } = useParams()

    

  useEffect(() => {

    if (idCategoria) {
        getFetch
        .then(dataRes => setProduct(dataRes.filter(prod => prod.description === idCategoria)))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    } else {
        getFetch
    .then(dataRes => setProduct(dataRes))
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))
    }
    
    

}, [idCategoria])
    

    return (
        <div className="item-container">
    
            {loading ? 
            <h4>Cargando...</h4> 
            : 
            <ItemList  products={products}/>
            }
        </div>
    )
}

export default ItemListContainer
