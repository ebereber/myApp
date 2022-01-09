import React from 'react'
import CartWidget from "./CartWidget"
import {FaAngleDown} from "react-icons/fa"
import { Link } from "react-router-dom"

export default function NavLinks() {
    return (
        
      <ul className="nav-links">
        <div className="productos">
          <li className='lista'>
            <p className='hover-lista'>Productos</p>
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
          
        </div>
        <Link to="/nosotros" className="nosotros">
          <li className='lista'> <p className='hover-lista'>Nosotros</p> </li>
        </Link>
        <Link to="/contacto" className="contacto">
          <li className='lista'><p className='hover-lista'>Contacto</p> </li>
        </Link>
        
      </ul>
    );
}
