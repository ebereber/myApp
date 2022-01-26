import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import {collection,getDocs,getFirestore,query,where} from "firebase/firestore";
import { css } from "@emotion/react";
import PropagateLoader from "react-spinners/PropagateLoader";
import Hero from "../Hero/Hero";
import { Link } from "react-router-dom";

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
              <div className="tagPopular">
                <h3 className="popular">productos</h3>
              </div>
              <div className="categories">
                <div className="filterLinks">
                  <Link to="/colgantes" className="Link">
                    <p className="linkCate">colgantes</p>
                  </Link>
                  <Link to="/veladores" className="Link">
                    <p className="linkCate">veladores</p>
                  </Link>
                </div>
              </div>
              <ItemList products={products} />
            </>
          ) : (
            <>
              <Hero />
              <div className="tagPopular">
                <h3 className="popular">productos</h3>
                {idCategoria === "veladores" ? (
                  <div className="homeCategory">
                    <div className="categoryWrapp">
                    <Link to="/" className="home">
                      <p className="categoryHome">home</p>
                    </Link>
                    /<p>veladores</p>
                    </div>
                  </div>
                ) : (
                  <div className="homeCategory">
                    <div className="categoryWrapp">
                    <Link to="/" className="home">
                      <products className="categoryHome">home</products>
                    </Link>
                    /<p>colgantes</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="categories">
                <div className="filterLinks">
                  <Link to="/colgantes" className="Link">
                    <p className="linkCate">colgantes</p>
                  </Link>
                  <Link to="/veladores" className="Link">
                    <p className="linkCate">veladores</p>
                  </Link>
                </div>
              </div>
              <ItemList products={products} />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default ItemListContainer;

