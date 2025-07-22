import React, { useState } from "react";
import "../styles/LoginPopup.css";
import { assets } from "../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Entrar");

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="Fechar"
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Entrar" ? null : (
            <input type="text" placeholder="Seu nome" required />
          )}
          <input type="email" placeholder="Seu e-mail" required />
          <input type="password" placeholder="Sua senha" required />
        </div>

        <button>{currState === "Cadastrar" ? "Criar conta" : "Entrar"}</button>

        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>
            Ao continuar, você concorda com os <span>termos de uso</span> e{" "}
            <span>política de privacidade</span>.
          </p>
        </div>

        {currState === "Entrar" ? (
          <p>
            Ainda não tem uma conta?{" "}
            <span onClick={() => setCurrState("Cadastrar")}>
              Cadastre-se aqui
            </span>
          </p>
        ) : (
          <p>
            Já tem uma conta?{" "}
            <span onClick={() => setCurrState("Entrar")}>Entrar</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
