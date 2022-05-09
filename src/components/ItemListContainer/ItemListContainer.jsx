import ItemList from './ItemList/ItemList'
import useListProducts from '../../hooks/useListProducts'
import Spinner from '../spinner'
function ItemListContainer() {
  const { products, loading } = useListProducts()

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <ItemList products={products} />
        </>
      )}
    </>
  )
}

export default ItemListContainer
