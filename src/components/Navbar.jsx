import React, { useContext, useState } from "react";
import "../styles/Navbar.css"; // Corrigido o caminho
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");

  const { getTotalCartAmput } = useContext(StoreContext);

  return (
    <div className="navbar">
      <Link to="/cart">
        <img src={assets.logo} alt="Logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Início
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Cardápio
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("aplicativo")}
          className={menu === "aplicativo" ? "active" : ""}
        >
          Aplicativo
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contato")}
          className={menu === "contato" ? "active" : ""}
        >
          Contato
        </a>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="Buscar" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="Carrinho" />
          </Link>
          <div className={getTotalCartAmput() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Entrar</button>
      </div>
    </div>
  );
};

export default Navbar;
