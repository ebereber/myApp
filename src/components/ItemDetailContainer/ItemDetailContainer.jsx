import ItemDetail from "./itemDetail/ItemDetail";
import styled from "styled-components"
import { b, space } from "../../styles/Variables";
import useListProducts from "../../hooks/useListProducts";
import Spinner from "../spinner";

function ItemDetailContainer() {
  const {loading} = useListProducts()

  return (
    
<ItemDetailContent>
      {loading ? (
        <Spinner/>
      ) : (
        <>
          <ItemDetail />
        </>
      )}
    </ItemDetailContent>
  );
}

export default ItemDetailContainer;

const ItemDetailContent = styled.div`
width: 100%;
	height: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem,1fr));
    gap: 16px;
	padding: 0;
	margin-bottom: ${space.xl};
	@media ${b.sm}{
		padding: ${space.md};
	}
	@media ${b.md}{
		padding: ${space.xl};
	}
`


/*   height: 100vh;
display: flex;
flex-direction: column;
margin-bottom: ${space.md};
@media ${b.md}{
	flex-direction: row; */