import {createContext, useState, useContext} from 'react'


const CartContext = createContext([])

export const useCartContext = ()=> useContext(CartContext)


    function CartContextProvider({children}) {

        const [cartList, setCartList]= useState([])

        // function addToCart (item){
        //     setCartList([...cartList, item])
        // }

function addToCart(item){
    const index = cartList.findIndex(i => i.id === item.id)
/* el item es nuevo? o ya existe en la la list? que compruebe 
el id que tengo con el que ingreso. si no encuentra nada findIndex retorna -1
Si mi idex es mayor a -1, quiere decir que los id coinciden*/
 if(index > -1){
    const oldItem = cartList[index].quantity
 /* guardo en la constante oldItem la cantidad
 luego lo elimino con splice (i,1) */
 cartList.splice(index, 1)
/* lo elimino y lo vuelvo agregar- la cantidad que tiene item mas la
cantidad de el oldItem*/
 setCartList([...cartList, {...item, quantity: item.quantity + oldItem}])
}else{
    setCartList([...cartList,item])
}
}


        function deleteCart (){
            setCartList([])
        }

        return (
        <CartContext.Provider value={{
            cartList, addToCart, deleteCart
            }}>
            {children}
        </CartContext.Provider>
        )
    }

    export default CartContextProvider

