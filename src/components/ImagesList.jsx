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
    { width: 320, itemsToShow: 1, infinite: true, pagination: false },
    { width: 576, itemsToShow: 2, pagination: false },
    { width: 768, itemsToShow: 3, pagination: false },
    { width: 992, itemsToShow: 4, pagination: false },
    { width: 1200, itemsToShow: 5, pagination: false },
    { width: 1400, itemsToShow: 6, pagination: false },
  ];
  return (
    <>
      {/* <Carousel breakpoint={breakPoints}> */}
      <div className="image-block-template">
        <Carousel breakPoints={breakPoints}>
          {isLoading ? (
            <Skeleton />
          ) : (
            response.map((data, key) => (
              <ImagesListTemplate key={key} data={data} />
            ))
          )}
        </Carousel>
      </div>
      {/* </Carousel> */}
    </>
  );
};

export default ImagesList;
