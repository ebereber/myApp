import {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import "./ItemListContainer.css"
import { getFetch } from '../../Helpers/getFetch'
import ItemList from '../ItemList/ItemList';
import {collection,doc, getDoc, getDocs, getFirestore, query, where} from "firebase/firestore"
import { css } from "@emotion/react";
import PropagateLoader from "react-spinners/PropagateLoader";
import Hero from "../Hero/Hero";

const override = css`
  display: block;
  margin: 0 auto;
`;



function ItemListContainer(props) {

    const [products, setProducts] = useState({});
    const { idCategoria } = useParams()
    const [loading, setLoading]= useState(true)
   
    
/*    useEffect(() => {
        getFetch
        .then(dataRes => {
            let data = idCategoria
            ? dataRes.filter(products => products.description === idCategoria)
            :dataRes;
            setProduct(data)
            
    })
    .finally(()=>setLoading(false))  
}, [idCategoria])  */


/* useEffect(() => {
        const db = getFirestore()
        const queryDb = doc(db, 'items', 'NUhHPift9uPbTPtmZlQg')
        getDoc(queryDb)
        .then(resp => setProducto( { id: resp.id, ...resp.data() } ))

    }, [idCategoria]) */

     useEffect(() => {

        const db = getFirestore()

        const queryCollection =  query(
        collection(db, 'items'), 
        where('description','==', idCategoria ))
        // where('stock','>', 3 ))
        getDocs(queryCollection)
        .then(resp => setProducts( resp.docs.map(prod => ({ id: prod.id, ...prod.data() }) ) )  )
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    }, [idCategoria])  
    
    


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
            <>
             <Hero/>
                <ItemList  
                    products={products}/>
                    </>
            }            
        </div>
    )
}

export default ItemListContainer
