import React, { useState } from "react";
import whatsappLogo from "../../Ressources/whatsapp-logo.png";
import "./Title-bar.css";
import FluentSubtract48Regular from "../../Ressources/Icons/FluentSubtract48Regular"
import FluentCopy16Regular from "../../Ressources/Icons/FluentCopy16Regular";
import FluentDismiss16Regular from "../../Ressources/Icons/FluentDismiss16Regular";

const TitleBar = () => {
  const [icons, setIcons] = useState([]);

  return (
    <div className="Title-bar">
      <div className="logo-container">
        <img src={whatsappLogo} alt="" className="whatsapp-logo" />
        <h5 className="title">WhatsApp</h5>
      </div>
      <div className="icons">
      <button className="icon-bar">{FluentSubtract48Regular()}</button>
      <button className="icon-bar">{FluentCopy16Regular()}</button>
      <button className="icon-bar">{FluentDismiss16Regular()}</button>
        

      </div>
    </div>
  );
};

export default TitleBar;
