import ItemList from '../ItemListContainer/ItemList/ItemList'
import useListProducts from '../../hooks/useListProducts';
import Spinner from '../spinner';

function ItemListContainer() {

  const { products, loading, idCategoria}  = useListProducts()

  return (
    <>
      {loading ? 
        <Spinner/>
       : 
        <>
          <ItemList products={products} />
        </>
      }
    </>
  )
}

export default ItemListContainer
