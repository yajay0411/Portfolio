import { setTitle } from "../../../shared/utils/SetTitle";
import css from "./Projects.module.css";
import ProjectCard from "./ProjectCard";
import { useState } from "react";

const Projects = () => {
  setTitle("Projects");
  const [activeCard, setActiveCard] = useState(0);

  const items = [
    {
      id: 1,
      name: "Image Gallery",
      image: "image_gallery",
      github: "https://github.com/yajay0411/imagegallery",
      demo: "https://imagegallery-inky.vercel.app/",
    },
    {
      id: 2,
      name: "Stack Overflow Clone",
      image: "stackoverflow",
      github: "https://github.com/yajay0411/stackoverflow-frontend",
      demo: "https://stackoverflow-frontend-vert.vercel.app/",
    },
    {
      id: 3,
      name: "HooBank",
      image: "hooBank",
      github: "https://github.com/yajay0411/hooBank.github.io",
      demo: "https://hoo-bank-five-theta.vercel.app/",
    },
  ];

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setActiveCard(Number(e.target.value));
  };

  return (
    <>
      <div className="pageWrapper">
        {/* Display paginated items */}
        <div className={css.pageContent}>
          <h1>My Recent Work</h1>
          <select
            id={css.projectSelect}
            value={activeCard}
            onChange={handleSelectChange}
          >
            {items.map((item, index) => (
              <option key={item.id} value={index} className={css.option}>
                {item.name}
              </option>
            ))}
          </select>
          <div className={css.cardGrid}>
            {items.map((item, index: number) => {
              let position: string = "";
              // Set position for the active card, previous card, and next card
              if (activeCard === index) {
                position = "activeCard"; // Current active card
              } else if (
                activeCard ===
                (index - 1 + items.length) % items.length
              ) {
                position = "prevCard"; // Previous card
              } else if (activeCard === (index + 1) % items.length) {
                position = "nextCard"; // Next card
              } else {
                position = "inactiveCard"; // Inactive cards
              }
              return (
                <ProjectCard
                  key={item.id}
                  position={position}
                  index={index}
                  {...item}
                  setActiveCard={setActiveCard}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
