import React from "react";
import css from "./TechStack.module.css";
import { Typewriter } from "react-simple-typewriter";

// Define the props interface for the component
interface TechStackProps {
  techStack: string[];
}

const TechStackTab: React.FC<TechStackProps> = ({ techStack }) => {
  return (
    <>
      <h1>Tech Stack</h1>
      <div className={css["techstack-tags"]}>
        {techStack.map((item) => {
          return (
            <span key={item} className={css["techstack-tag"]}>
              <Typewriter
                words={[item]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          );
        })}
      </div>
    </>
  );
};

export default TechStackTab;
