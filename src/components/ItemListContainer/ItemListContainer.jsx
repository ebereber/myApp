import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import {collection,getDocs,getFirestore,query,where} from "firebase/firestore";
import { css } from "@emotion/react";
import PropagateLoader from "react-spinners/PropagateLoader";
import Hero from "../Hero/Hero";

const override = css`
  display: block;
  margin: 0 auto;
`;

function ItemListContainer(props) {
    
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

  return (
    <div className="item-container">
      {loading ? (
        <div className="sweet-loading">
          <PropagateLoader
            color="black"
            loading={loading}
            css={override}
            size={15}
          />
        </div>
      ) : (
        <>
          {undefined == idCategoria ? (
            <>
              <Hero />
              <ItemList products={products} />
            </>
          ) : (
            <>
              <ItemList products={products} />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default ItemListContainer;
