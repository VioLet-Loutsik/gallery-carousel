import React, { useContext } from "react";
import "./imagesList.css";
import { ImageContext } from "../App";
import ImagesListTemplate from "../templates/ImagesListTemplate";
import Skeleton from "./Skeleton";
import Carousel from "react-elastic-carousel";

const ImagesList = () => {
  const { response, isLoading } = useContext(ImageContext);
  const breakPoints = [
    // arrows : false
    { width: 320, itemsToShow: 1, infinite: true, pagination: false, rows: 3 },
    { width: 576, itemsToShow: 2, pagination: false, rows: 3 },
    { width: 768, itemsToShow: 3, pagination: false, rows: 3 },
    { width: 992, itemsToShow: 4, pagination: false, rows: 3 },
    { width: 1200, itemsToShow: 5, pagination: false, rows: 3 },
    { width: 1400, itemsToShow: 6, pagination: false, rows: 3 },
  ];
  return (
    <>
      <div className="image-block-template custom-carousel">
        <Carousel initialActiveIndex={0} breakPoints={breakPoints}>
          {isLoading ? (
            <Skeleton />
          ) : (
            response.map((data, key) => (
              <ImagesListTemplate key={key} data={data} />
            ))
          )}
        </Carousel>

        <Carousel initialActiveIndex={3} breakPoints={breakPoints}>
          {isLoading ? (
            <Skeleton />
          ) : (
            response.map((data, key) => (
              <ImagesListTemplate key={key} data={data} />
            ))
          )}
        </Carousel>

        <Carousel initialActiveIndex={6} breakPoints={breakPoints}>
          {isLoading ? (
            <Skeleton />
          ) : (
            response.map((data, key) => (
              <ImagesListTemplate key={key} data={data} />
            ))
          )}
        </Carousel>
      </div>
    </>
  );
};

export default ImagesList;
