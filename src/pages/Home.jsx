import React from "react";
import ImagesList from "../components/ImagesList";
import CategoryList from "../components/CategoryList";
import "./home.css";

const Home = () => {
  return (
    <div className="home-block">
      <div className="home-block-images">
        <ImagesList />
       </div>
      <div className="home-block-category">
        <CategoryList />
      </div>
    </div>
  );
};

export default Home;
