import React from "react";
import { useState, useContext } from "react";
import { useEffect } from "react";
import CategoryListTemplate from "../templates/CategoryListTemplate";
import { ImageContext } from "../App";
import "./categoryList.css";
import SearchField from "./SearchField";

const CategoryList = () => {
  const [photos, setPhotos] = useState([]);
  //     const [category, setCategory] = useState("mixed");
  // console.log(category);
  // const urlApi = `https://api.unsplash.com/photos/random?client_id=Hhx6Rg_5DSJL8r9qQ53nSvvIboiHJ6yHn_C9ebngE4w&count=10&query=${category}`;
  //     useEffect(() => {
  //         const fetchPhotos = async () => {
  //             await fetch(urlApi)
  //             .then((data) => data.json())
  //             .then((x) => {
  //                 setPhotos(x)
  //             });
  //         };
  //         fetchPhotos();
  //     }, [urlApi]);

  const { fetchData } = useContext(ImageContext);

  const categoryOcean = () => {
    fetchData(
      `search/photos?client_id=Hhx6Rg_5DSJL8r9qQ53nSvvIboiHJ6yHn_C9ebngE4w&query=ocean`
    );
  };
  const categoryMixed = () => {
    fetchData(
      `search/photos?client_id=Hhx6Rg_5DSJL8r9qQ53nSvvIboiHJ6yHn_C9ebngE4w&query=mixed`
    );
  };
  const categoryRoad = () => {
    fetchData(
      `search/photos?client_id=Hhx6Rg_5DSJL8r9qQ53nSvvIboiHJ6yHn_C9ebngE4w&query=road`
    );
  };
  const categoryCreative = () => {
    fetchData(
      `search/photos?client_id=Hhx6Rg_5DSJL8r9qQ53nSvvIboiHJ6yHn_C9ebngE4w&query=creative`
    );
  };

  const resultPhoto = photos.map((e, i) => {
    return <CategoryListTemplate key={i} image={e.urls.small_s3} />;
  });

  return (
    <div>
      <div className="buttons-block">{resultPhoto}</div>
      <div className="buttons-category">
        <div className="buttons-category-search">{<SearchField />}</div>

        <button onClick={categoryMixed} className="button-category-single">
          Mixed
        </button>
        <button onClick={categoryOcean} className="button-category-single">
          Ocean
        </button>
        <button onClick={categoryRoad} className="button-category-single">
          Road
        </button>
        <button onClick={categoryCreative} className="button-category-single">
          Creative
        </button>
      </div>
    </div>
  );
};

export default CategoryList;
