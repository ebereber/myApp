import React from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import "./NavBar.css";
import CartWidget from "./CartWidget";
import NavLinks from "./NavLinks";
import { FiX } from "react-icons/fi";

function NavBar() {
  
  return (
    <nav className="navbar">
      <input type="checkbox" id="check" />
      <label htmlFor="check">
        <FiX id="bulb-on" />
        <FiMenu id="bulb-off" />
      </label>
      <Link to="/" className="home">
        <h3 className="logo">
          Lemar <span> Electricidad</span>
        </h3>
      </Link>
      <NavLinks />

      <Link to="/carrito" className="carrito">
        <CartWidget />
      </Link>
    </nav>
  );
}

export default NavBar;
