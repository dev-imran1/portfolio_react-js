import React from "react";
import "./Navbar.css";
import logo from "../../../src/assets/logo.svg";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>About Me</li>
        <li>SErvice</li>
        <li>Portfolio</li>
        <li>contact</li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  );
};

export default Navbar;
