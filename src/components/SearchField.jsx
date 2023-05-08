import React, { useState, useContext } from "react";
import "./searchField.css";
import imgSearch from "../images/search.jpg";
import { ImageContext } from "../App";

const SearchField = () => {
  const [searchValue, setSearchValue] = useState("");
  const { fetchData, setSearchImage } = useContext(ImageContext);
  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  }
  
  const handleButtonSearch = () => {
    fetchData(`search/photos?page=1&query=${searchValue}&client_id=Hhx6Rg_5DSJL8r9qQ53nSvvIboiHJ6yHn_C9ebngE4w`)
    setSearchValue("");
    setSearchImage(searchValue);
  }

  const handleEnterSearch = e => {
    if(e.key === 'Enter') {
      fetchData(`search/photos?page=1&query=${searchValue}&client_id=Hhx6Rg_5DSJL8r9qQ53nSvvIboiHJ6yHn_C9ebngE4w`)
      setSearchValue("");
      setSearchImage(searchValue);
    }
  }

  return (
      <div className="header-block-search">
        <input
          type="search"
          placeholder="Search in the Gallery"
          className="header-search"
          value={searchValue}
          onChange={handleInputChange}
          onKeyDown={handleEnterSearch}
        />
        <img
          src={imgSearch}
          onClick={handleButtonSearch}
          disabled={!searchValue}
          className="search-img"
        />
      </div>
  );
};

export default SearchField;
