import React from "react";
import "./Hero.css";
import profileImage from "../../../src/assets/avatar.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profileImage} alt="profile-img" />
      <h1><span>I'm Imran Hossain</span>, frontend Develloper based in USA.</h1>
      <p>I am a frontend developer from Califonia, USA  with 10 years of Experince,USA  with 10 years of Experince, </p>
      <div className="hero-action">
        <div className="hero-connect"> <AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
