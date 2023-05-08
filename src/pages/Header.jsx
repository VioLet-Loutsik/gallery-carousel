import React from "react";
import "./header.css";
import CategoryList from "../components/CategoryList";

const Header = ({ children }) => {
  return (    
      <div className="header_block">
        <div className="header-block-text gallery">Gallery</div>
        <div>{children}</div>
        <div className="header-block-text categories">{<CategoryList />}</div>
      </div>
  
  );
};

export default Header;
