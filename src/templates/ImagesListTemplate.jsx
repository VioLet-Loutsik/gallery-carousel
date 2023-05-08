import React from "react";
import "./imagesListTemplate.css";
import Fancybox from "../components/Fancybox";
// import { Carousel } from "@fancyapps/ui";

function ImagesListTemplate({ data }) {
  return (
    <div className="image-block-main">
      <Fancybox
        options={{
          Carousel: {
            infinite: false,
          },
        }}
      >
        <div className="image-block-image">
          <a
            data-fancybox="gallery"
            href={data.urls.regular}
            target="_blank"
            rel="noreferrer"
          >
            <img src={data.urls.small} alt={data.alt_description}></img>
          </a>
        </div>
      </Fancybox>
    </div>
  );
}

export default ImagesListTemplate;
