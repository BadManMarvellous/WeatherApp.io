import React from "react";
import "./Footer.css";
import { BsCloudRain } from "react-icons/bs";
import { BsCloudHaze } from "react-icons/bs";
import { MdOutlineWbCloudy } from "react-icons/md";
import { BsCloudy } from "react-icons/bs";

const Footer = () => {
  return (
  
   <div className="footer">
      <div className="footer_texts">
        <p>Today</p>
        <p>16:00</p>
        <BsCloudRain />
        <p>31°C</p>
      </div>
      <div className="footer_texts">
        <p>Today</p>
        <p>16:00</p>
        <BsCloudHaze />
        <BsCloudy />
        <p>35°C</p>
      </div>
      {/* <div className="footer_texts">
        <p>Today</p>
        <p>16:00</p>
        <BsCloudHaze />
        <BsCloudy />
        <p>31°C</p>
      </div> */}
    </div>
  );
};

export default Footer;
