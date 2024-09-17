import React from "react";
import { Box } from "@mui/material";
import { Typewriter } from "react-simple-typewriter";
import css from "./Home.module.css"; // Assume custom styles are in this file
import downloadImage from "../../../assets/download.png";
import { setTitle } from "../../../shared/utils/SetTitle";

const Home: React.FC = () => {
  setTitle("Home");
  return (
    <Box className="pageContentWrapper">
      <div className={css.heroSection}>
        <div className={css.mainOne}>
          {/* Name */}
          <div className={`${css.helloSection} ${css.helloSectionOne}`}>
            Hi There! <span className={css.hieHand}>👋🏻</span>
          </div>

          {/* Typewriter Effect for Dynamic Tagline */}
          <div className={css.helloSection}>{`I am Ajay Yadav,`}</div>
          <div className={css.roleLine}>
            {`And, I am a `}
            <span className={css.tagline}>
              <Typewriter
                words={[
                  "React Developer",
                  "Angular Developer",
                  "Node Developer",
                ]}
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
        <div className={css.mainTwo}>
          <img className={css.image} src={downloadImage} alt="Ajay's Image" />
        </div>
      </div>
    </Box>
  );
};

export default Home;
