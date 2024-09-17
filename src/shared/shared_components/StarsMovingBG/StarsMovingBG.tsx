import React, { useEffect, useRef } from "react";
import css from "./StarsMovingBG.module.css";

const StarsMovingBG: React.FC = () => {
  const starContainerRef = useRef<HTMLDivElement>(null);

  const shootingStar = 10;

  // Generating stars dynamically
  useEffect(() => {
    const starContainer = starContainerRef.current;
    if (starContainer) {
      const stars = 100; // Number of stars

      for (let i = 0; i < stars; i++) {
        const star = document.createElement("div");
        star.className = css.star;
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const duration = Math.random() * 15; // Speed of animation
        const size = Math.random() * 10;
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDuration = `${duration}s`;
        starContainer.appendChild(star);
      }

      const shootingStars = shootingStar; // Number of stars
      for (let i = 0; i < shootingStars; i++) {
        const shootingStar = document.createElement("div");
        shootingStar.id = `shooting_star_${i}`;
        shootingStar.className = css.shootingStar;
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const duration = 3; // Speed of animation
        shootingStar.style.left = `${x}px`;
        shootingStar.style.top = `${y}px`;
        shootingStar.style.display = "none";
        shootingStar.style.animationDuration = `${duration}s`;
        starContainer.appendChild(shootingStar);
      }
      const test = setInterval(() => {
        getRandomStar();
      }, 3000);
      return () => clearInterval(test);
    }
  });

  const getRandomStar = () => {
    for (let i = 0; i < shootingStar; i++) {
      const shootingStar = document.getElementById(`shooting_star_${i}`);
      if (shootingStar) {
        shootingStar.style.display = "none";
      }
    }

    const randomStar = Math.floor(Math.random() * shootingStar);
    const star = document.getElementById(`shooting_star_${randomStar}`);
    if (star) {
      star.style.display = "block";
    }
  };

  return <div className={css.starBackground} ref={starContainerRef}></div>;
};

export default StarsMovingBG;
