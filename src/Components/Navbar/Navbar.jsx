import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../../src/assets/logo.svg";
import { FaArrowPointer } from "react-icons/fa6";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaAlignJustify } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { useRef } from 'react';


const Navbar = () => {
  const menuRef = useRef();
  const [menu, setMenu] = useState("home");

  const openMenu = ()=>{
    menuRef.current.style.right="0";
  }
  const closeMenu = ()=>{
    menuRef.current.style.right="-350px";
  }

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <FaAlignJustify onClick={openMenu} className="nav-open__iocn"/>
      </div>
      <ul ref={menuRef} className="nav-menu">
        <IoClose className="nav-close__iocn" onClick={closeMenu}/>
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
