import ItemDetail from "./itemDetail/ItemDetail";
import Spinner from "../spinner";
import { ItemDetailContent } from "./styles";
import { useProduct } from "../../hooks/useProduct";

function ItemDetailContainer() {

  const {product, loading } = useProduct()

  return (
    <ItemDetailContent>
      {loading ? <Spinner/> : (
        <>
          <ItemDetail product={product} key={product.id} />
        </>
      )}
    </ItemDetailContent>
  );
}

export default ItemDetailContainer;
