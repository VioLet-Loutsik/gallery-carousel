import React, { useContext } from "react";
import "./imagesList.css";
import { ImageContext } from "../App";
import ImagesListTemplate from "../templates/ImagesListTemplate";
import Skeleton from "./Skeleton";
import Carousel from "react-elastic-carousel";
import Fancybox from "./Fancybox.jsx";

const ImagesList = () => {
  const { response, isLoading } = useContext(ImageContext);
  const breakPoints = [
    // arrows : false
    { width: 320, itemsToShow: 2 },
    { width: 576, itemsToShow: 3 },
    { width: 768, itemsToShow: 4 },
    { width: 992, itemsToShow: 4 },
    { width: 1200, itemsToShow: 5 },
    { width: 1400, itemsToShow: 5 },
  ];

  return (
    <>
      <div className="image-block-template custom-carousel">
        <Fancybox>
          <Carousel
            breakPoints={breakPoints}
            itemPadding={[0, 0]}
            pagination={false}
            focusOnSelect={true}
          >
            {isLoading ? (
              <Skeleton />
            ) : (
              response.map((data, key) => (
                <ImagesListTemplate key={key} data={data} />
              ))
            )}
          </Carousel>
        </Fancybox>

        <Fancybox>
          <Carousel
            initialActiveIndex={6}
            breakPoints={breakPoints}
            itemPadding={[0, 0]}
            isRTL={true}
            outerSpacing={100}
            pagination={false}
          >
            {isLoading ? (
              <Skeleton />
            ) : (
              response.map((data, key) => (
                <ImagesListTemplate key={key} data={data} />
              ))
            )}
          </Carousel>
        </Fancybox>

        <Fancybox>
          <Carousel
            initialActiveIndex={5}
            breakPoints={breakPoints}
            itemPadding={[0, 0]}
            pagination={false}
            isRTL={true}
          >
            {isLoading ? (
              <Skeleton />
            ) : (
              response.map((data, key) => (
                <ImagesListTemplate key={key} data={data} />
              ))
            )}
          </Carousel>
        </Fancybox>
      </div>
    </>
  );
};

export default ImagesList;
