import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import {collection,getDocs,getFirestore,query,where} from "firebase/firestore";

function useListProducts() {
    const [products, setProducts] = useState({});
  const { idCategoria } = useParams();
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "items");

    let data = idCategoria
      ? query(queryCollection, where("description", "==", idCategoria))
      : queryCollection;
    getDocs(data)
      .then((collection) => {
        const produ = collection.docs.map((prod) => ({
          id: prod.id,
          ...prod.data(),
        }));
        setProducts(produ);
      })
      .finally(() => setLoading(false));
  }, [idCategoria]);

  return {products, loading, idCategoria}
}

export default useListProducts