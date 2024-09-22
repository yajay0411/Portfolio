import React from "react";
import ExperienceCard from "./ExperienceCard";
// import css from "./ExperienceTab.module.css";

interface Experience {
  position: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  skills: string[]; // Array of skills
  logo: string; // Assuming the logo is a URL or a string identifier
}

// Define the props interface for the component
interface ExperienceProps {
  experiences: Experience[];
}

const ExperienceTab: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <>
      <h1>Experience</h1>
      {experiences.map((exp, index) => (
        <ExperienceCard key={index} {...exp} />
      ))}
    </>
  );
};

export default ExperienceTab;
