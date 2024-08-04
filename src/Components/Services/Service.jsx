import React from "react";
import "./service.css";
import Services_Data from "../../assets/services_Data.js";
import arrow_icon from "../../assets/arrow_right.svg";
import theme_pattern from "../../assets/service.svg";
const Service = () => {
  return (
    <div id="service" className="services">
      <div className="services-title">
        <h1>My Services</h1>
          {/* <img src={arrow_icon} alt="" /> */}
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => (
          <div key={index} className="services-format">
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
            <div className="services-readmore">
              <p>Read More...</p>
              <img src={arrow_icon} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
