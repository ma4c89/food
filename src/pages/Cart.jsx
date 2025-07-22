import React, { useContext } from "react";
import "../styles/Cart.css";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmput } =
    useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Itens</p>
          <p>Título</p>
          <p>Preço</p>
          <p>Quantidade</p>
          <p>Total</p>
          <p>Remover</p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div
                  key={item._id}
                  className="cart-items-title cart-items-item"
                >
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>R$ {item.price.toFixed(2)}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>R$ {(item.price * cartItems[item._id]).toFixed(2)}</p>
                  <p
                    className="cross"
                    onClick={() => removeFromCart(item._id)}
                    style={{ cursor: "pointer", color: "red" }}
                  >
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
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
            <button onClick={() => navigate("/order")}>FINALIZAR COMPRA</button>
          </div>
        </div>

        <div className="cart-promocode">
          <p>Tem um cupom de desconto? Insira ele aqui</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder="Cupom de desconto" />
            <button>Aplicar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
