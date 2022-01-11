import React from 'react'
import { useCartContext } from "../../Context/CartContext";
import {useState, useEffect} from "react"
import CartUnits from "../NavBar/CartUnits";

function TotalAmount() {
    const { cartList, } = useCartContext()
    const[ totalPrice, setTotalPrice] = useState(0)


    useEffect(() => {
        if(cartList.length > 0){
            setTotalPrice(
                cartList
                .map((item) => item.price * item.quantity)
                .reduce((total, valor) => total + valor)
            )
        }
        
    }, [cartList]) 

    return (
        <div className="checkout">
        <div className="total">
        <div>
        <div className="Subtotal">Total</div>
        <div className="units-items">
            <CartUnits/> 
            <p className="p-units"> unidades</p>
        </div>
        </div>
        <div className="total-amount">${totalPrice}</div>
        </div>
        
        </div>
    )
}

export default TotalAmount
