import React from "react";
import "../styles/ExploreMenu.css";
import { menu_list } from "../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore o Cardápio</h1>
      <p className="explore-menu-text">
        Escolha entre um cardápio diversificado com uma deliciosa variedade de
        pratos. Nossa missão é satisfazer seus desejos e tornar sua experiência
        gastronômica ainda mais especial — uma refeição saborosa de cada vez.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div
            key={index}
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? "All" : item.menu_name
              )
            }
            className={`explore-menu-list-item${
              category === item.menu_name ? " active" : ""
            }`}
          >
            <img src={item.menu_image} alt={item.menu_name} />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMenu;
