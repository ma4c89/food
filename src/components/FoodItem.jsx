import React, { use, useContext, useState } from "react";
import "../styles/FoodItem.css";
import { assets } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food-item" id={id}>
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt={name} />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt="Adicionar"
          />
        ) : (
          <div className="food-item-counter">
            <img
              className="remove"
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt="remove"
            />
            <p>{cartItems[id]}</p>
            <img onClick={() => addToCart(id)} src={assets.add_icon_green} />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Avaliação" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">R$ {price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default FoodItem;
