import {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import "./ItemListContainer.css"
import { getFetch } from '../../Helpers/getFetch'
import ItemList from '../ItemList/ItemList';
import {doc, getDoc, getFirestore} from "firebase/firestore"
import { css } from "@emotion/react";
import PropagateLoader from "react-spinners/PropagateLoader";

const override = css`
  display: block;
  margin: 0 auto;
`;

function ItemListContainer(props) {

    const [products, setProduct] = useState([]);
    const { idCategoria } = useParams()
    const [loading, setLoading]= useState(true)
    
  useEffect(() => {
        getFetch
        .then(dataRes => {
            let data = idCategoria
            ? dataRes.filter(products => products.description === idCategoria)
            :dataRes;
            setProduct(data)
            
    })
    .finally(()=>setLoading(false))  
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
    
           
            {   loading ?
            <div className="sweet-loading">
                <PropagateLoader 
                    color=" gray" 
                    loading={loading} 
                    css={override} 
                    size={15} />
            </div>  
            :  
                <ItemList  
                    products={products}/>
            }            
        </div>
    )
}

export default ItemListContainer
