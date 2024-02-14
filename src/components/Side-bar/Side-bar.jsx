import React, { useState } from "react";
import "./Side-bar.css";
import FluentChat16Regular from "../../Ressources/Icons/FluentChat16Regular";
import FluentCall16Regular from "../../Ressources/Icons/FluentCall16Regular";
import FluentHeartCircleHint16Regular from "../../Ressources/Icons/FluentHeartCircleHint16Regular";
import FluentStar16Regular from "../../Ressources/Icons/FluentStar16Regular";
import FluentArchive16Regular from "../../Ressources/Icons/FluentArchive16Regular";
import FluentSettings16Regular from "../../Ressources/Icons/FluentSettings16Regular";

const SideBar = () => {
      const [avatar, setAvatar] = useState(require("../../Ressources/avatar.png"));

  return (
    <div className="sidebar">
      <div className="icons-top">
        <span className="sidebar-icon active">{FluentChat16Regular()}</span>
        <span className="sidebar-icon">{FluentCall16Regular()}</span>
        <span className="sidebar-icon">{FluentHeartCircleHint16Regular()}</span>
      </div>
      <div className="icons-bottom">
        <span className="sidebar-icon">{FluentStar16Regular()}</span>
        <span className="sidebar-icon">{FluentArchive16Regular()}</span>
        <span className="sidebar-icon">{FluentSettings16Regular()}</span>
        <span className="sidebar-avatar"><img src={avatar} alt="Photo de profil" /></span>
        <span className="sidebar-icon">{FluentSettings16Regular()}</span>

      </div>
    </div>
  );
};

export default SideBar;
