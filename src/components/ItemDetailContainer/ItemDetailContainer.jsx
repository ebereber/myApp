import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {getFetch} from "../../Helpers/getFetch"
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {
const [loading, setLoading] = useState(true)
const [product, setProduct] = useState([])
const {id} = useParams()

useEffect(()=>{
    getFetch
        .then(data => setProduct(data.find(product => product.id === parseInt(id))))
        .catch(err => console.log(err))
        .finally(()=>setLoading(false))
        
},[])




    return (
        // <div className='container-item'>
        //     <ItemDetail product={product}/>
        // </div>
        <>
             {loading ? 
                    <h2>Cargando...</h2>
                :
                    <div className='container-item'>
                        <ItemDetail product={product} />                        
                    </div>
            }            
        </>

    )
}

export default ItemDetailContainer
