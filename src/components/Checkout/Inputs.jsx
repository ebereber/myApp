import React from "react";
import style from "../Checkout/Checkout.module.css";

function Inputs({ inputName, type, name }) {
    
  return (
    <p className={style.formRow}>
      <label>{inputName}</label>
      <input name={name} type={type} className={style.field} placeholder="" />
    </p>
  );
}

export default Inputs;
