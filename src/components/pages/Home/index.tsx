import React, { useEffect, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import css from "./Home.module.css"; // Assume custom styles are in this file
import Ajay from "../../../assets/Ajay.png";
import { setTitle } from "../../../shared/utils/SetTitle";

const Home: React.FC = () => {
  setTitle("Home");

  // Create a ref for the image element
  const imageRef = useRef<HTMLImageElement | null>(null);

  // Add 3D hover effect on image
  useEffect(() => {
    const image = imageRef.current;

    if (image) {
      const handleMouseMove = (e: MouseEvent) => {
        const imageContainer = image.getBoundingClientRect();

        // Get the position of the cursor relative to the image
        const xAxis =
          ((e.clientX - imageContainer.left) / imageContainer.width) * 100;
        const yAxis =
          ((e.clientY - imageContainer.top) / imageContainer.height) * 100;

        // Calculate the rotation angles based on cursor position
        const rotateX = (yAxis - 10) / 5; // Inverse the Y axis
        const rotateY = (xAxis - 10) / 5; // Normal for X axis

        // Apply the transformation with rotation based on the cursor
        image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      };

      const handleMouseLeave = () => {
        // Reset the image's transformation when the cursor leaves
        image.style.transform = "rotateX(0deg) rotateY(0deg)";
      };

      // Add event listeners
      image.addEventListener("mousemove", handleMouseMove);
      image.addEventListener("mouseleave", handleMouseLeave);

      // Clean up event listeners on component unmount
      return () => {
        image.removeEventListener("mousemove", handleMouseMove);
        image.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []); // Empty dependency array ensures this runs only once when component mounts

  return (
    <>
      <div className="pageWrapper">
        <div className={css.heroSection}>
          <div className={css.mainOne}>
            {/* Name */}
            <div className={`${css.helloSection} ${css.helloSectionOne}`}>
              Hi There! <span className={css.hieHand}>👋🏻</span>
            </div>

            {/* Typewriter Effect for Dynamic Tagline */}
            <div className={css.helloSubSection}>
              {`I am `}
              <span className={css.nameColor}>Ajay Yadav</span>
              {`, a developer driven by integrity, hard work, and a passion for delivering high-quality code. I believe that the best solutions come from a blend of dedication and thoughtful problem-solving, and I approach each project with a commitment to honesty and precision.`}
            </div>
          </div>

          <div className={css.mainTwo}>
            {/* Reference the image using the ref */}
            <img
              className={css.image}
              src={Ajay}
              alt="Ajay's Image"
              ref={imageRef}
            />
          </div>
        </div>
        <div className={css.roleLine}>
          <span className={css.tagline}>
            <Typewriter
              words={["React Developer", "Angular Developer", "Node Developer"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </div>
      </div>
    </>
  );
};

export default Home;
