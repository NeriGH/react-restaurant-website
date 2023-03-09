import React, { useState, useEffect } from "react";
import "./Slider.css";

const images = [
  "/assets/images/restaurant.JPG",
  "/assets/images/restaurant2.JPG",
  "/assets/images/restaurant3.jpg",
];

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setState(activeIndex + 1);
    }, 6000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  function setState(nextIndex) {
    const numImages = images.length;

    if (nextIndex >= numImages) {
      nextIndex = 0;
    } else if (nextIndex < 0) {
      nextIndex = numImages - 1;
    }

    setActiveIndex(nextIndex);

    const sliderImages = document.querySelectorAll(".slider-image");

    sliderImages.forEach((image) => {
      image.classList.remove("active");
    });

    sliderImages[nextIndex].classList.add("active");
  }

  return (
    <div className="slider-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slider-image ${index === activeIndex ? "active" : ""}`}
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}${image})` }}
        >
          <div className="slider-overlay"></div>
          <div className="slider-text">
            <h1>La Table de Chantal</h1>
            <h2>vous souhaites la bienvenue.</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
