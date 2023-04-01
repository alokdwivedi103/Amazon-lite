import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
import logo from '../assets/products/12.png'

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logos">
      <Link to ="/"><img className="logo" src={logo} alt="logo"/></Link>
      </div>
      <div className="link">
      <Link to="/"><h1 className="b">Amazon lite</h1></Link>
      </div>
      
      <div className="links">
        <Link to="/"> Shop </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/cart">
          <ShoppingCart size={36} />
        </Link>
      </div>
    </div>
  );
};
