
import Form from './Form';
import React from 'react'
import style from "../Checkout/Checkout.module.css"

import { useForm } from '../../hooks/useForm';
import Modal from './Modal';
import { useCartContext } from '../../Context/CartContext';
import {Overlay} from "./OverlayStyle";


function Checkout() {

  const { dataForm, errors, idOrder, isSubmit, handleChange, orderGenerator } = useForm();

    const {deleteCart}= useCartContext()


  return <>
      {(Object.keys(errors).length === 0 && isSubmit )? (

    (idOrder.length !== 0 )&& 
    <>
    <Overlay/>
    <div className={style.modalContainer} onClick={deleteCart}>
    <Modal idOrder={idOrder}  />
    </div>
    <Form orderGenerator={orderGenerator}
      handleChange={handleChange} dataForm={dataForm} errors={errors}/>
    </>



    ) : ( <Form orderGenerator={orderGenerator}
      handleChange={handleChange} dataForm={dataForm} errors={errors}/>)}
      </>;
    }

export default Checkout;
