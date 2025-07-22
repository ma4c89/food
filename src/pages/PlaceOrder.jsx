import React, { useContext } from "react";
import "../styles/PlaceOrder.css";
import { StoreContext } from "../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmput } = useContext(StoreContext);

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Informações de Entrega</p>
        <div className="multi-fields">
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="Sobrenome" />
        </div>
        <input type="email" placeholder="E-mail" />
        <input type="text" placeholder="Rua" />
        <div className="multi-fieds">
          <input type="text" placeholder="CEP" />
          <input type="text" placeholder="Bairro" />
          <input type="text" placeholder="Numero" />
        </div>
        <input type="text" placeholder="Telefone" />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Total do Carrinho</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>R$ {getTotalCartAmput()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Taxa de Entrega</p>
              <p>R$ {getTotalCartAmput() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>R$ {getTotalCartAmput() === 0 ? 0 : getTotalCartAmput + 2}</b>
            </div>
            <button>IR PARA PAGAMENTO</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
