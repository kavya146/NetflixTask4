import React, { useEffect } from "react";
import "./CarouselImage.css";

const CarouselImages = ({ title, images = [] }) => {
  useEffect(() => {
    const handleClick = (e) => {
      let handle;
      if (e.target.matches(".handle")) {
        handle = e.target;
      } else {
        handle = e.target.closest(".handle");
      }
      if (handle != null) onHandleClick(handle);
    };

    const onHandleClick = (handle) => {
      const slider = handle.closest(".container").querySelector(".slider");
      const sliderIndex = parseInt(
        getComputedStyle(slider).getPropertyValue("--slider-index")
      );
      if (handle.classList.contains("handle-left")) {
        slider.style.setProperty("--slider-index", sliderIndex - 1);
      }
      if (handle.classList.contains("handle-right")) {
        slider.style.setProperty("--slider-index", sliderIndex + 1);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="row">
      <div className="header">
        <h3 className="tittle">{title}</h3>
      </div>

      <div className="container">
        <button className="handle handle-left">
          <div className="text">&#8249;</div>
        </button>

        <div className="slider">
          {images.map((obj) => (
            <img src={obj.url} />
          ))}
        </div>

        <button className="handle handle-right">
          <div className="text">&#8250;</div>
        </button>
      </div>
    </div>
  );
};

export default CarouselImages;
