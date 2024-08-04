import React from "react";
import "./contact.css";
import theme_pattern from "../../assets/arrow.svg";
import { BiLogoGmail } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "5d37c7bf-c4ab-48b4-bd19-73372bbe642a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message)
    }
  };

  return (
    <div onSubmit={onSubmit} id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently avaliable to take on new poroject, so feel free the .I'm currently avaliable to take on new poroject, so feel free the
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <BiLogoGmail />
              <p>bdimranhossian@gmail.com</p>
            </div>
            <div className="contact-detail">
              <FaPhoneAlt />
              <p>01811107560</p>
            </div>
            <div className="contact-detail">
              <FaLocationDot />
              <p>Dhaka,Bangladesh</p>
            </div>
          </div>
        </div>
        <form className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="Your Email"></label>
          <input type="email" placeholder="Enter your email" name="name" />
          <label htmlFor="">Write your message here</label>
          <textarea name="message" rows="8" placeholder="Enter Your Message"></textarea>
          <button type="submit" className="contact-submit" >Submit now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
