
import "./ItemDetail.css";
import ItemDetail from "./ItemDetail";
import { useProduct } from "../Hooks/useProduct";
import PropagateLoader from "react-spinners/PropagateLoader";
import { css } from "@emotion/react";

function ItemDetailContainer() {
  
  const {loading}= useProduct()

  const override = css`
  display: block;
`;


  return (
    
<div className="container-item">
      {loading ? (
        <div className="sweet-loading2">
        <PropagateLoader
          color="black"
          loading={loading}
          css={override}
          size={15}
        />
      </div>
      
      ) : (
        <>
        
          <ItemDetail />
          </>
      )}
    
    </div>
  );
}

export default ItemDetailContainer;
