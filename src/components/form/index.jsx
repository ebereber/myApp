import React from 'react'
import { Navigate } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';
import ItemsCart from '../../pages/cart/items-cart'
import {Amount, Column, ErrorMessage, FormBox, Headline, Input, Label, LeftSection, RightSection, Row, SForm, SubmitButton, TotalDetailContainer, TotalTitle, UnitsRow, UnitsText} from "../form/styles"
import CartUnits from '../Header/Cart/CartUnits';


function Form({ handleChange, orderGenerator, dataForm,errors}) {

  const { cartList, totalPrice } = useCartContext()
 
if(cartList.length === 0 ) return <Navigate to="/" />
  
  /* const data = [
    {label:"Nombre *", name: "name", type : "text", defaultValue: `${dataForm.name}`, error : `${errors.name}`},
    {label:"Apellido", type : "text", defaultValue: `${dataForm.lastName}`},
    {label:"Telefono *", name: "phone", type : "text", defaultValue: `${dataForm.phone}`, error : `${errors.phone}`},
    {label:"Email *", name: "email", type : "email", defaultValue: `${dataForm.email}`,error : `${errors.email}`},
    {label:"Confirmar email *",  name:"emailConfirmation", type : "email", defaultValue: `${dataForm.emailConfirmation}`, error : `${errors.emailConfirmation}`},
    {label:"Calle", type : "text", defaultValue: `${dataForm.street}`},
    {label:"Altura", type : "text", defaultValue: `${dataForm.number}`},
    {label:"Piso, departamento", type : "text", defaultValue: `${dataForm.apartament}`},
    {label:"Localidad", type : "text", defaultValue: `${dataForm.location}`},
    {label:"Provincia", type : "text", defaultValue: `${dataForm.province}`},
    {label:"Código Postal", type : "text", defaultValue: `${dataForm.postalCode}`},
    {label:"Documento", type : "text", defaultValue: `${dataForm.idCard}`},
    {label:"Fecha de nacimiento", type : "date", defaultValue: `${dataForm.birthDate}`}
  ]  */
 
  return (
    <>
        <SForm
          onSubmit={orderGenerator}
          onChange={handleChange} >
            

       {/* {data.map(({ label, type, defaultValue, error, name}, index) => {

      return <label key={index}>{label}
      <Input type={type} name={name} defaultValue={defaultValue}/>
    <span>{error}</span>
       
      </label>
      
      })}   */}
 <FormBox>
<LeftSection>
<Headline>Finalizar compra</Headline>
            <Label>
              Nombre *
              <Input
                type="text"
                name="name"
                defaultValue={dataForm.name}
               
              />
              <ErrorMessage>{errors.name}</ErrorMessage>
            </Label>
            <Label>
              Apellido
              <Input
                type="text"
                name="lastName"
                defaultValue={dataForm.lastName}
               
              />
            </Label>
            <Label>
              Telefono *
              <Input
               
                type="text"
                name="phone"
                defaultValue={dataForm.phone}
              />
              <ErrorMessage>{errors.phone}</ErrorMessage>
            </Label>
            <Label>
              Email *
              <Input
                type="email"
                name="email"
                defaultValue={dataForm.email}
               
              />
              <ErrorMessage>{errors.email}</ErrorMessage>
            </Label>
            <Label>
              Confirmar email *
              <Input
               
                type="email"
                name="emailConfirmation"
                defaultValue={dataForm.emailConfirmation}
              />
              <ErrorMessage>{errors.emailConfirmation}</ErrorMessage>
            </Label>
            <Label>
              Calle
              <Input
                type="text"
                name="street"
                defaultValue={dataForm.street}
               
              />
            </Label>
            <Label>
              Altura
              <Input
                type="text"
                name="number"
                defaultValue={dataForm.number}
               
              />
            </Label>
            <Label>
              {" "}
              Piso,departamento
              <Input
                type="text"
                name="apartament"
                defaultValue={dataForm.apartament}
               
              />
            </Label>
            <Label>
              Localidad
              <Input
                type="text"
                name="location"
                defaultValue={dataForm.location}
               
              />
            </Label>
            <Label>
              Provincia
              <Input
                type="text"
                name="province"
                defaultValue={dataForm.province}
               
              />
            </Label>
            <Label>
              {" "}
              Código Postal
              <Input
                type="text"
                name="postalCode"
                defaultValue={dataForm.postalCode}
               
              />
            </Label>
            <Label>
              {" "}
              Documento
              <Input
                type="text"
                name="idCard"
                defaultValue={dataForm.idCard}
               
              />
            </Label>
            <Label>
              {" "}
              Fecha de nacimiento
              <Input
               
                type="date"
                name="birthDate"
                defaultValue={dataForm.birthDate}
              />
            </Label>
            </LeftSection>

          
          <RightSection>
            <Headline>Tu pedido</Headline>
            <ItemsCart />
            
            <TotalDetailContainer>
              <Column>
                <TotalTitle>Total</TotalTitle>
                <UnitsRow>
                  <CartUnits/>
                  <UnitsText>unidades</UnitsText>
              </UnitsRow>
              </Column>
              <Row>
                <Amount>${totalPrice}</Amount>
              </Row>
              
            </TotalDetailContainer>
             
            
            <SubmitButton >Realizar el pedido</SubmitButton>
            </RightSection>
            </FormBox> 
        </SForm>
        
      
    </>
  )
}


export default Form;