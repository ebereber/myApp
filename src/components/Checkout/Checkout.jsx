import React from 'react'
import {useState} from "react"
import { addDoc, collection, doc, getFirestore, Timestamp, updateDoc, writeBatch } from "firebase/firestore";
import style from "../Checkout/Checkout.module.css"
import Inputs from './Inputs';
import { useCartContext } from "../../Context/CartContext";
import ItemsCart from '../Cart/ItemsCart';
import CartUnits from '../NavBar/CartUnits';
import TotalAmount from '../Cart/TotalAmount';
import {BsCartCheck} from "react-icons/bs"



function Checkout() {

    const { cartList, } = useCartContext()
    const[ totalPrice, setTotalPrice] = useState(0)
    const [idOrder, setIdOrder] = useState("")
    const [dataForm, setDataForm] = useState( {
        name:"", lastName:"", phone:"",  email:"", emailConfirmation:"", street:"", number:"", apartament:"",
        location:"", province:"", postalCode:"",idCard:"", birthDate:"", shipping:""
    })

    const handleChange = (e) =>{
       setDataForm({
           ...dataForm,[e.target.name] : e.target.value
       })
    }
    
    const orderGenerator = (e) =>{
      e.preventDefault()
     let order ={}
     order.date = Timestamp.fromDate(new Date())
     order.buyer = dataForm
     order.total = {totalPrice}
     order.items= cartList.map(item => {
       const id = item.id;
       const name = item.title;
       const price = item.price;

       return{id, name, price}
     })
       
     const db = getFirestore()

     const orderCollection = collection(db, "orders")
     addDoc(orderCollection, order) 
     .then(res => setIdOrder(res.id))
     .catch(err => console.log(err))

 } 

    return (
      <>
      {idOrder.length !== 0 ? (
        <div className={style.orderContainer}>
          <div className={style.purchaseConfirmed}>
            < BsCartCheck className={style.cart}/>
            <h3>Muchas gracias! </h3> 
            <p>Tu compra ha sido confirmada.</p>
            <p>Orden ID:</p> 
          <h3>{ idOrder} </h3> 
           </div>
        </div>
        
        )
        :(<form  className={style.columnSection} onSubmit={orderGenerator}
          onChange={handleChange}>
               {idOrder.length !== 0 && idOrder }
  
              <div className={style.divForm}>
              
              <h2 className={style.userDetails}>Finalizar compra</h2>
                <Inputs inputName="Nombre *" type="text" name="name" defaultValue={dataForm.name}/>
                  <Inputs inputName="Apellido" type="text" name="lastName" defaultValue={dataForm.lastName}/>
                  <Inputs inputName="Telefono *" type="text" name="phone" defaultValue={dataForm.phone}/>
                  <Inputs inputName="Email *" type="email" name="email" defaultValue={dataForm.email}/>
                  <Inputs inputName="Confirmar email *" type="email" name="emailConfirmation" defaultValue={dataForm.emailConfirmation}/>
                  <Inputs inputName="Calle" type="text" name="street" defaultValue={dataForm.street}/>
                  <Inputs inputName="Altura" type="text" name="number" defaultValue={dataForm.number}/>
                  <Inputs inputName="Piso,departamento" type="text" name="apartament" defaultValue={dataForm.apartament}/>
                  <Inputs inputName="Localidad" type="text" name="location" defaultValue={dataForm.location}/>
                  <Inputs inputName="Provincia"type="text" name="province" defaultValue={dataForm.province}/>
                  <Inputs inputName="Código Postal" type="text" name="postalCode" defaultValue={dataForm.postalCode}/>
                  <Inputs inputName="Documento" type="text" name="idCard" defaultValue={dataForm.idCard}/>
                  <Inputs inputName="Fecha de nacimiento" type="date" name="birthDate" defaultValue={dataForm.birthDate}/>
                  
              </div>
  
              <div className={style.rightColumn}>
                  <h2>Tu pedido</h2>
                  <ItemsCart/>
                  
                  
                  <div className={style.shipping}>
                    
                    <p >Envío</p>
                    <ul>
                      <li><input type="radio" name="shipping" defaultValue={dataForm.shipping}/>
                       <label className={style.shippingLabel} >Envío a domicilio - Andreani</label> </li>
                      <li><input type="radio" name="shipping"  defaultValue={dataForm.shipping}/>
                       <label className={style.shippingLabel}>Envío a sucursal - Andreani</label> </li>
                      <li><input type="radio" name="shipping"  defaultValue={dataForm.shipping}/>
                       <label className={style.shippingLabel} >Retiro por local</label> </li>
                    </ul>
                  </div>
  
                  <div className="check">
                    <TotalAmount/>
                  </div>
  
                  <button className={style.btnBuy}>Realizar el pedido</button>
                  
                  
              </div>
          </form>) 
      }
      </>
    )
}

export default Checkout
