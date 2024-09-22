import { setTitle } from "../../../shared/utils/SetTitle";
import css from "./Projects.module.css";
import ProjectCard from "./ProjectCard";
import { useState } from "react";

const Projects = () => {
  setTitle("Projects");
  const itemsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);

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

  // Calculate start and end indices of the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the items array to get the items for the current page
  const paginatedItems = items.slice(startIndex, endIndex);

  // Calculate the total number of pages
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <>
      <div className={css.pageContent}>
        {/* Display paginated items */}
        <h1 className={css.heading}>My Recent Work</h1>
        <div className={css.cardGrid}>
          {paginatedItems.map((item) => (
            <ProjectCard key={item.id} {...item} />
          ))}
        </div>
        {/* Pagination Controls */}
        <div className={css["pagination-controls"]}>
          <button
            onClick={previousPage}
            disabled={items.length >= itemsPerPage && currentPage === 1}
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={nextPage}
            disabled={
              items.length >= itemsPerPage && currentPage === totalPages
            }
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Projects;
