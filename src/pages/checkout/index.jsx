import React from 'react'
import { useForm } from '../../hooks/useForm'
import { SCheckoutContent } from './styles'
import Spinner from '../../components/spinner'
import Modal from '../../components/modal'
import { Overlay } from '../../components/modal/OverlayStyle'
import Form from '../../components/form'

function Checkout() {
  const { dataForm, errors, idOrder, isSubmit, handleChange, orderGenerator, loading } = useForm()

  return (
    <SCheckoutContent>
      {Object.keys(errors).length === 0 && isSubmit ? (
        loading ? (
          <Spinner />
        ) : (
          idOrder.length !== 0 && (
            <>
              <Overlay />
              <Modal idOrder={idOrder} />
            </>
          )
        )
      ) : (
        <Form
          orderGenerator={orderGenerator}
          handleChange={handleChange}
          dataForm={dataForm}
          errors={errors}
        />
      )}
    </SCheckoutContent>
  )
}

export default Checkout
