import React from "react";
import "./Hero.css";
import profileImage from "../../../src/assets/avatar.png";

const Hero = () => {
  return (
    <div className="hero">
      <img src={profileImage} alt="profile-img" />
      <h1><span>I'm Imran Hossain</span>, frontend Develloper based in USA.</h1>
      <p>I am a frontend developer from Califonia, USA  with 10 years of Experince,USA  with 10 years of Experince, </p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
