import React from "react"
import { Link } from "react-router-dom"
import { MdOutlineShoppingCart } from "react-icons/md"
import {FaAngleDown} from "react-icons/fa"
import{FiMenu} from "react-icons/fi"
import "./NavBar.css"

function NavBar() {

    return (
      <nav className="navbar">
        <Link to="/" className="home">
          <h3 className="logo">
            Lemar <span> Electricidad</span>
          </h3>
        </Link>

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
              <MdOutlineShoppingCart className="carro-logo" />
              <li> Carrito</li>
            </Link>
        </ul>
        <button className="mobile-menu-icon">
             <FiMenu className="bulb-on"/> 
        </button>
      </nav>
    );
}

export default NavBar
