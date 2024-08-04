import React from "react";
import "./footer.css";
import logo from "../../assets/logo.svg";
import { CiUser } from "react-icons/ci";

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="footer-top">
        <div className="footer-top__left">
          <img src={logo} alt="footer logo" />
          <p>i am a frontend developer from, usa</p>
        </div>
        <div className="footer-top__right">
          <div className="footer-email__input">
            <CiUser />
            <input type="email" placeholder="Enter Your Email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom__left">@2024 imran Benet. All right</p>
        <div className="footer-bottom__right">
          <p>Term of Service</p>
          <p>Privacy Policy</p>
          <p>Connect With me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
