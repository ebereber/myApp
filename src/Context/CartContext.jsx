import { createContext, useState, useContext } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

function CartContextProvider({ children }) {

  const [cartList, setCartList] = useState([]);

  function addToCart(item) {
      
    let itemCart = cartList.find((i) => i.id === item.id);
    if (!itemCart) return setCartList([...cartList, item]);
    itemCart.quantity += item.quantity;
    setCartList([...cartList.filter((i) => i.id !== item.id), itemCart]);
  }

  const removeItem = (id) => {
    if (cartList.length > 0) {
      const updateItems = cartList.filter((item) => {
        return item.id !== id;
      });
      setCartList(updateItems);
    }
  };

  function deleteCart() {
    setCartList([]);
  }

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        deleteCart,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
