import React from "react";
import {
  ModalButton,
  ModalImage,
  ModalWrapper,
  Info,
  Title,
  Pa,
} from "./ModalStyle";
import { FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

function Modal({ idOrder }) {

  
  

  return (
    <ModalWrapper>
      <ModalImage src="https://www.darklightdesign.com/media/18107/cvl_cale-table_lamp-03.jpg?anchor=center&mode=crop&width=1060&height=1060&rnd=132606241360000000" />
      <Link to="/">
        <ModalButton>
          <FiX size="2em" />
        </ModalButton>
      </Link>

      <Info>
        <Title>Muchas gracias! </Title>
        <Pa>Tu compra ha sido confirmada.</Pa>
        <Pa>Orden ID:</Pa>
        <Title>{idOrder} </Title>
      </Info>
    </ModalWrapper>
  );
}

export default Modal;
