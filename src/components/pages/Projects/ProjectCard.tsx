// ProjectCard.tsx
import React from "react";
import css from "./Projects.module.css";

interface ProjectCardProps {
  id: number;
  name: string;
  github: string;
  demo: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, github, demo }) => {
  return (
    <div className={css.card}>
      <img
        src="https://via.placeholder.com/150"
        alt={name}
        className={css.cardImg}
      />
      <div className={css.cardContent}>
        <h3>{name}</h3>
        <div className={css.cardLinks}>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <i className="fa fa-github"></i> GitHub
          </a>
          <a href={demo} target="_blank" rel="noopener noreferrer">
            <i className="fa fa-external-link-alt"></i> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
