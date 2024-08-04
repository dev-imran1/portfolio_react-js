import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../../src/assets/logo.svg";
import { FaArrowPointer } from "react-icons/fa6";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaAlignJustify } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";



const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <FaAlignJustify className="nav-open__iocn"/>
      </div>
      <ul className="nav-menu">
        <IoClose className="nav-close__iocn"/>
        <li><AnchorLink className="anchor-link" offset={50} href="#home"> <p onClick={() => setMenu("home")}>Home</p></AnchorLink>{menu === "home" ? <FaArrowPointer /> : <></>}</li>
        <li><AnchorLink className="anchor-link" offset={50} href="#about"> <p onClick={() => setMenu("about")}>About Me</p></AnchorLink>{menu === "about" ? <FaArrowPointer /> : <></>}</li>
        <li><AnchorLink className="anchor-link" offset={50} href="#service"><p onClick={() => setMenu("service")}>Service</p></AnchorLink>{menu === "service" ? <FaArrowPointer /> : <></>}</li>
        <li><AnchorLink className="anchor-link" offset={50} href="#work"><p onClick={() => setMenu("portolio")}>Portfolio</p></AnchorLink>{menu === "portolio" ? <FaArrowPointer /> : <></>}</li>
        <li><AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink>{menu === "contact" ? <FaArrowPointer /> : <></>}</li>
      </ul>
      <div className="nav-connect"> <AnchorLink className="anchor-link" offset={50} href="#contact"> <AnchorLink/> Connect With Me</AnchorLink></div>
    </div>
  );
};

export default Navbar;
