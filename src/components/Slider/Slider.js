import React, { useState, useEffect } from "react";
import "./Slider.css";

const images = [
  "/assets/images/restaurant.JPG",
  "/assets/images/restaurant2.JPG",
  "/assets/images/restaurant3.jpg",
];

const textSlides = [
  {
    title: "La Table de Chantal",
    subtitle: "Vous souhaites la bienvenue.",
    text: "",
  },
  {
    title: "Le restaurant",
    subtitle: "",
    text: "La Table de Chantal est un restaurant de cuisine traditionnelle française situé dans la ville de Tourcoing. Depuis son ouverture, La Table de Chantal est rapidement devenu l'un des restaurants les plus appréciés de la région, grâce à sa cuisine de qualité et à son ambiance conviviale. Le menu propose une variété de plats français classiques, avec une touche moderne. Tous les plats sont préparés à partir d'ingrédients frais et locaux, ce qui garantit une expérience culinaire de qualité supérieure. Le chef, Chantal, est passionné par la cuisine et met tout son savoir-faire pour vous offrir une expérience gustative inoubliable.",
  },
  {
    title: "Notre chef",
    subtitle: "",
    text: "Le chef de La Table de Chantal est une passionnée de la cuisine française classique. Elle utilise des ingrédients frais et locaux pour créer des plats délicieux qui mettent en valeur les saveurs authentiques de chaque ingrédient. Avec des années d'expérience dans l'industrie de la restauration, le chef est un expert en matière de création de menus créatifs et de qualité supérieure. Son engagement envers l'excellence culinaire se reflète dans chaque plat qu'elle prépare, garantissant ainsi une expérience gastronomique inoubliable pour les clients de La Table de Chantal.",
  },
];

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTextIndex, setActiveTextIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setState(activeIndex + 1);
    }, 6500);
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

    // Advance text slider every 3 images
    if (nextIndex % 3 === 0) {
      setIsFading(true);
      setTimeout(() => {
        setActiveTextIndex((activeTextIndex + 1) % textSlides.length);
        setIsFading(false);
      }, 1000);
    }
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
          <div className={`slider-text ${isFading ? "fade" : ""}`}>
            <h1>{textSlides[activeTextIndex].title}</h1>
            <h2>{textSlides[activeTextIndex].subtitle}</h2>
            <p className="slider-text-background">
              {textSlides[activeTextIndex].text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
