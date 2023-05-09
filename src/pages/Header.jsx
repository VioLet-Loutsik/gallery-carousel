import React from "react";
import "./header.css";
import CategoryList from "../components/CategoryList";
import BurgerMenu from "../components/BurgerMenu";

const Header = ({ children }) => {
  return (
    <div className="header-block">
      <div className="header-block-text gallery">Gallery</div>
      <div className="header-block-search-top">{children}</div>
      <div className="header-block-text categories">{<CategoryList />}</div>
      <div className="header-burger">{<BurgerMenu />}</div>
    </div>
  );
};

export default Header;
