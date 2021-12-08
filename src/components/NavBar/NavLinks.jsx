import React from 'react'
import CartWidget from "./CartWidget"
import {FaAngleDown} from "react-icons/fa"
import { Link } from "react-router-dom"

export default function NavLinks() {
    return (
        <ul className="nav-links">
        <Link to="/productos" className="productos">
          <li>Productos</li> <FaAngleDown className="angle-down"/>
        </Link>
        <Link to="/nosotros" className="nosotros">
          <li>Nosotros</li> <FaAngleDown className="angle-down"/>
        </Link>
        <Link to="/contacto" className="contacto">
          <li>Contacto</li>
        </Link>
        <Link to="/carrito" className="carrito">
            <CartWidget/>
            <li> Carrito</li>
          </Link>
      </ul>
        
        
    )
}
