import React from 'react'
import style from "../Checkout/Checkout.module.css"
import ItemsCart from '../Cart/ItemsCart';
import TotalAmount from '../Cart/TotalAmount';


function Form({ handleChange, orderGenerator, dataForm,errors}) {
  

  return (
    <>
    
        
        <form
          className={style.columnSection}
          onSubmit={orderGenerator}
          onChange={handleChange} 
        >
          <div className={style.divForm}>
            <h2 className={style.userDetails}>Finalizar compra</h2>

            <label>
              Nombre *
              <input
                type="text"
                name="name"
                defaultValue={dataForm.name}
                className={style.field}
              />
              <span className={style.error}>{errors.name}</span>
            </label>
            <label>
              Apellido
              <input
                type="text"
                name="lastName"
                defaultValue={dataForm.lastName}
                className={style.field}
              />
            </label>
            <label>
              Telefono *
              <input
                className={style.field}
                type="text"
                name="phone"
                defaultValue={dataForm.phone}
              />
              <span className={style.error}>{errors.phone}</span>
            </label>
            <label>
              Email *
              <input
                type="email"
                name="email"
                defaultValue={dataForm.email}
                className={style.field}
              />
              <span className={style.error}>{errors.email}</span>
            </label>
            <label>
              Confirmar email *
              <input
                className={style.field}
                type="email"
                name="emailConfirmation"
                defaultValue={dataForm.emailConfirmation}
              />
              <span className={style.error}>{errors.emailConfirmation}</span>
            </label>
            <label>
              Calle
              <input
                type="text"
                name="street"
                defaultValue={dataForm.street}
                className={style.field}
              />
            </label>
            <label>
              Altura
              <input
                type="text"
                name="number"
                defaultValue={dataForm.number}
                className={style.field}
              />
            </label>
            <label>
              {" "}
              Piso,departamento
              <input
                type="text"
                name="apartament"
                defaultValue={dataForm.apartament}
                className={style.field}
              />
            </label>
            <label>
              {" "}
              Localidad
              <input
                type="text"
                name="location"
                defaultValue={dataForm.location}
                className={style.field}
              />
            </label>
            <label>
              Provincia
              <input
                type="text"
                name="province"
                defaultValue={dataForm.province}
                className={style.field}
              />
            </label>
            <label>
              {" "}
              Código Postal
              <input
                type="text"
                name="postalCode"
                defaultValue={dataForm.postalCode}
                className={style.field}
              />
            </label>
            <label>
              {" "}
              Documento
              <input
                type="text"
                name="idCard"
                defaultValue={dataForm.idCard}
                className={style.field}
              />
            </label>
            <label>
              {" "}
              Fecha de nacimiento
              <input
                className={style.field}
                type="date"
                name="birthDate"
                defaultValue={dataForm.birthDate}
              />
            </label>
          </div>

          <div className={style.rightColumn}>
            <h2>Tu pedido</h2>
            <ItemsCart />

            <div className={style.shipping}>
              <p>Envío</p>
              <ul>
                <li className='inputSend'>
                  <input
                    type="radio"
                    name="shipping"
                    defaultValue={dataForm.shipping}
                  />
                  <label className={style.shippingLabel}>
                    Envío a domicilio - Andreani
                  </label>
                </li>
                <li className='inputSend'>
                  <input
                    type="radio"
                    name="shipping"
                    defaultValue={dataForm.shipping}
                  />
                  <label className={style.shippingLabel}>
                    Envío a sucursal - Andreani
                  </label>
                </li>
                <li className='inputSend'>
                  <input
                    type="radio"
                    name="shipping"
                    defaultValue={dataForm.shipping}
                  />
                  <label className={style.shippingLabel}>
                    Retiro por local
                  </label>
                </li>
              </ul>
            </div>

            <div className="check">
              <TotalAmount/>
            </div>

            <button className={style.btnBuy} >Realizar el pedido</button>
          </div>
        </form>
      )
    </>
  )
}


export default Form;
