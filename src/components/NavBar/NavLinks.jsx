import React from 'react'
import CartWidget from "./CartWidget"
import {FaAngleDown} from "react-icons/fa"
import { Link } from "react-router-dom"

export default function NavLinks() {
    return (
      <ul className="nav-links">
        <div className="productos">
          <li>
            Productos
            <ul>
              <Link to="/productos/colgantes" className="drop">
                <li>Colgantes</li>
              </Link>
              <Link to="/productos/apliques" className="drop">
                <li>Apliques</li>
              </Link>
              <Link to="/productos/veladores" className="drop">
                <li>Veladores</li>
              </Link>
            </ul>
          </li>
          <FaAngleDown className="angle-down" />
        </div>
        <Link to="/nosotros" className="nosotros">
          <li>Nosotros</li>
        </Link>
        <Link to="/contacto" className="contacto">
          <li>Contacto</li>
        </Link>
        <Link to="/carrito" className="carrito">
          <CartWidget />
          <li> Carrito</li>
        </Link>
      </ul>
    );
}
