import {useEffect, useState} from 'react'
import {MdOutlineShoppingCart} from "react-icons/md"
import { useCartContext } from "../../Context/CartContext"
import CartUnits from './CartUnits'
import styles from "./CartWidget.module.css"


function CartWidget() {

    const {cartList} = useCartContext()
    
   
    return (
        cartList.length > 0 ?

        <div className={styles.cart}>
            <MdOutlineShoppingCart className={styles.logoSize}/>
            <div className={styles.totalItems}>
            <CartUnits/>
            </div>
        </div>
        :
        <MdOutlineShoppingCart className={styles.logoSize} />

    )
}

export default CartWidget
