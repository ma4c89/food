import React from "react";
import "../styles/AppDownload.css";
import { assets } from "../assets/assets";

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        Para uma melhor experiência, <br /> baixe o aplicativo Tomato
      </p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="Baixar na Play Store" />
        <img src={assets.app_store} alt="Baixar na App Store" />
      </div>
    </div>
  );
};

export default AppDownload;
