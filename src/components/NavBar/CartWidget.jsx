import {useEffect, useState} from 'react'
import {MdOutlineShoppingCart} from "react-icons/md"
import { useCartContext } from "../../Context/CartContext"
import "./CartWidget.css"


function CartWidget() {

    const {cartList} = useCartContext()
    const [units, setUnits] = useState(0)
    
    const totalItems = ()=>{
        let counter = 0
        cartList.map((item)=>{
        counter += item.quantity
        });
        return counter
    }

     

useEffect(() => {
   setUnits(totalItems)
}, [cartList])


    
    return (
        cartList.length > 0 ?

        <div className='cart'>
            <MdOutlineShoppingCart className="carro-logo" />
            <div className='total-items'>
            <h4>{units}</h4>
            </div>
        </div>
        :
        <MdOutlineShoppingCart className="carro-logo" />

    )
}

export default CartWidget
