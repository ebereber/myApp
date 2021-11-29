import React, {useState} from "react"
import { Link } from "react-router-dom"
import { MdOutlineShoppingCart } from "react-icons/md"
import {FaAngleDown} from "react-icons/fa"
import{FaRegLightbulb} from "react-icons/fa"
import{FaLightbulb} from "react-icons/fa"
import "./NavBar.css"

function NavBar() {

    const[isMobile, setIsMobile] = useState(false);
    return (
      <nav className="navbar">
        <Link to="/" className="home">
          <h3 className="logo">
            Lemar <span> Electricidad</span>
          </h3>
        </Link>

        <ul className={isMobile ? "nav-links-mobile": "nav-links"}>
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
              <MdOutlineShoppingCart className="carro-logo" />
              <li> Carrito</li>
            </Link>
       
        </ul>
        <button className="mobile-menu-icon">
            {isMobile ? <FaRegLightbulb className="bulb-on"/> : <FaLightbulb className="bulb-off"/>}

        </button>
      </nav>
    );
}

export default NavBar
