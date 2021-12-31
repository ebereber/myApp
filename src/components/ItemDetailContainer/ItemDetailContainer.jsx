import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import "./ItemDetailContainer.css"
import {doc, getDoc, getFirestore} from "firebase/firestore"
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {

const [product, setProduct] = useState([])
const {id} = useParams()
const [loading, setLoading] = useState(true)

/* useEffect(()=>{
    getFetch
        .then(data => setProduct(data.find((product) => product.id === +id)))
        .catch(err => console.log(err))
        .finally(()=>setLoading(false))
},[id]) */


useEffect(() => {
        const db = getFirestore()
        const queryDb = doc(db, 'items', id)
        getDoc(queryDb)
        .then(resp => setProduct( { id: resp.id, ...resp.data() } ))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    }, [id])


    return (
      <>
        { loading ?

        <h3>cargando...</h3>
        :
          <div className="container-item">
            
          <ItemDetail product={product} />
        </div> 
        }
      </>
    );
}

export default ItemDetailContainer
