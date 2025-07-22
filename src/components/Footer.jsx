import React from "react";
import "../styles/Footer.css";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="Logo" />
          <p>
            Nossa missão é levar até você pratos saborosos com rapidez,
            qualidade e carinho. Agradecemos por escolher nosso restaurante para
            suas refeições!
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>

        {/* Centro: links da empresa */}
        <div className="footer-content-center">
          <h2>EMPRESA</h2>
          <ul>
            <li>Início</li>
            <li>Sobre nós</li>
            <li>Entregas</li>
            <li>Política de privacidade</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>CONTATO</h2>
          <ul>
            <li>(34) 99897-1256</li>
            <li>contato@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        &copy; 2025 tomato.com - Todos os direitos reservados.
      </p>
    </div>
  );
};

export default Footer;
