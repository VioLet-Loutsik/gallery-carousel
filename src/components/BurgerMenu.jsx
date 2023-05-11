import React, { useState } from "react";
import "./burgerMenu.css";

const BurgerMenu = () => {
  const [active, setMode] = useState(false);
  const ToggleMode = () => {
    setMode(!active);
  };
  return (
    <div className="burger-menu-block">
      <div className={active ? "icon iconActive" : "icon"} onClick={ToggleMode}>
        <div className="hamburger hamburgerIcon"></div>
      </div>
      <div className={active ? "menu menuOpen" : "menu menuClose"}>
        <div className="list">
          <ul className="listItem">
            <li>Home</li>
            <li>About</li>
            <li>Contacts</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
