import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Peça refeições incríveis com facilidade</h2>
        <p>
          Descubra pratos deliciosos e variados, feitos para tornar sua refeição
          ainda mais especial.
        </p>
        <button>Ver Cardápio</button>
      </div>
    </div>
  );
};

export default Header;
