import React from 'react'
import { Link } from "react-router-dom"

export default function NavLinks() {
    return (
        
      <ul className="nav-links">
        
        <Link to="/nosotros" className="nosotros">
          <li className='lista'> <p className='hover-lista'>nosotros</p> </li>
        </Link>
        <Link to="/contacto" className="contacto">
          <li className='lista'><p className='hover-lista'>contacto</p> </li>
        </Link>
        
      </ul>
    );
}
