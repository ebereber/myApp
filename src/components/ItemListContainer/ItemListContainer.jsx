import {useState, useEffect} from 'react'
import "./ItemListContainer.css"
import { getFetch } from '../../Helpers/getFetch'
import ItemList from '../ItemList/ItemList';



function ItemListContainer(props) {

    const [products, setProduct] = useState([]);
    const [loading, setLoading] = useState(true)

  useEffect(() => {
    getFetch
    .then(dataRes => setProduct(dataRes))
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))
}, []);
    
  

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
