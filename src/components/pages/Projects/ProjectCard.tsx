// ProjectCard.tsx
import React from "react";
import css from "./Projects.module.css";
import image_gallery from "../../../assets/image_gallery.png";
import stackoverflow from "../../../assets/stackoverflow.png";
import hooBank from "../../../assets/hooBank.png";

interface ProjectCardProps {
  id: number;
  name: string;
  image: string;
  github: string;
  demo: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  image,
  github,
  demo,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const imageObj: any = {
    image_gallery,
    stackoverflow,
    hooBank,
  };

  return (
    <div className={css["card"]}>
      <img src={imageObj[image]} alt={name} className={css["cardImg"]} />
      <div className={css["cardContent"]}>
        <h3>{name}</h3>
        <div className={css.cardLinks}>
          <a href={github} target="_blank">
            <i className="fa fa-github"></i> GitHub
          </a>
          <a href={demo} target="_blank">
            <i className="fa fa-external-link-alt"></i> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
