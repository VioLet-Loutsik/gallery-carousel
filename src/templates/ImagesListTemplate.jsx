import React, { useEffect } from "react";
import "./imagesListTemplate.css";
import Aos from "aos";
import "aos/dist/aos.css";

function ImagesListTemplate({ data }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="image-block-main d-flex flex-column align-items-center justify-content-center p-5">
      <div
        className="image-block-image text-white bg-dark p-5 m-5"
        data-aos="fade-down"
      >
        <a
          data-fancybox="gallery"
          href={data.urls.regular}
          target="_blank"
          rel="noreferrer"
        >
          <img src={data.urls.small} alt={data.alt_description}></img>
        </a>
      </div>
    </div>
  );
}

export default ImagesListTemplate;
