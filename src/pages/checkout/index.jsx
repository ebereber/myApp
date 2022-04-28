
import React from 'react'
import { useForm } from '../../hooks/useForm';
import Form from '../../components/form/Form';
import { Overlay } from '../../components/Checkout/OverlayStyle';
import { useCartContext } from '../../Context/CartContext';
import Modal from '../../components/Checkout/Modal';
import { SCheckoutContent } from './styles';


function Checkout() {

  const { dataForm, errors, idOrder, isSubmit, handleChange, orderGenerator } = useForm();

    const { deleteCart } = useCartContext()


  return <SCheckoutContent>
      {(Object.keys(errors).length === 0 && isSubmit )? (

    (idOrder.length !== 0 )&& 
    <>
    <Overlay/>
    <div  onClick={deleteCart}>
    <Modal idOrder={idOrder}  />
    </div>
    <Form orderGenerator={orderGenerator}
      handleChange={handleChange} dataForm={dataForm} errors={errors}/>
    </>



    ) : ( <Form orderGenerator={orderGenerator}
      handleChange={handleChange} dataForm={dataForm} errors={errors}/>)}
      </SCheckoutContent>;
    }

export default Checkout;

