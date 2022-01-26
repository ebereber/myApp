import { createContext, useState, useContext } from "react";
import { useEffect } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

function CartContextProvider({ children }) {

  const [cartList, setCartList] = useState([]);
  const[ totalPrice, setTotalPrice] = useState(0)

  const addToCart=(item)=> {
    let itemCart = cartList.find((i) => i.id === item.id);
    if (!itemCart) return setCartList([...cartList, item]);
    itemCart.quantity += item.quantity;
    setCartList([...cartList.filter((i) => i.id !== item.id), itemCart]);
  }
  

    useEffect(() => {
        if(cartList.length > 0){
            setTotalPrice(
                cartList
                .map((item) => item.price * item.quantity)
                .reduce((total, valor) => total + valor)
            )
        }
        
    }, [cartList])


  const removeItem = (id) => {
    if (cartList.length > 0) {
      const updateItems = cartList.filter((item) => {
        return item.id !== id;
      });
      setCartList(updateItems);
    }
  };



  const deleteCart=()=> {
    setCartList([]);
  }

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        totalPrice,
        deleteCart,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
