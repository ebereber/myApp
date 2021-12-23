import {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import "./ItemListContainer.css"
import { getFetch } from '../../Helpers/getFetch'
import ItemList from '../ItemList/ItemList';
import {doc, getDoc, getFirestore} from "firebase/firestore"


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

//   useEffect(() => {
//         const db = getFirestore()
//         const queryDb = doc(db, "items","hcNeOt5z4oGwmBvTc2b9" )
//         getDoc(queryDb)
//         .then(dataRes => console.log(dataRes))
//     })
// }, [idCategoria])
    

    return (
        <div className="item-container">
    
            <ItemList  products={products}/>
            
        </div>
    )
}

export default ItemListContainer
