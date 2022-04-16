import ItemDetail from "./itemDetail/ItemDetail";
import useListProducts from "../../hooks/useListProducts";
import Spinner from "../spinner";
import { ItemDetailContent } from "./styles";

function ItemDetailContainer() {

  const { loading } = useListProducts()

  return (
    <ItemDetailContent>
      {loading ? <Spinner/> : (
        <>
          <ItemDetail />
        </>
      )}
    </ItemDetailContent>
  );
}

export default ItemDetailContainer;
