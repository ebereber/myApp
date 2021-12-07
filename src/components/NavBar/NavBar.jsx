import React from "react"
import { Link } from "react-router-dom"
import{FiMenu} from "react-icons/fi"
import "./NavBar.css"
import NavLinks from "./NavLinks";


function NavBar() {

    return (
      <nav className="navbar">
        <Link to="/" className="home">
          <h3 className="logo">
            Lemar <span> Electricidad</span>
          </h3>
        </Link>
        <NavLinks/>
       
        <button className="mobile-menu-icon">
             <FiMenu className="bulb-on"/> 
        </button>
      </nav>
    );
}

export default NavBar
