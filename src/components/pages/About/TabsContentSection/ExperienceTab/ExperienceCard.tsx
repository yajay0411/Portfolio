import React from "react";
import css from "./ExperienceTab.module.css";
import { useTruncateText } from "../../../../../shared/utils/TurncateText";

interface ExperienceProps {
  position: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  skills: string[];
  logo: string;
}

const ExperienceCard: React.FC<ExperienceProps> = ({
  position,
  company,
  period,
  location,
  type,
  description,
  skills,
  logo,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const logoObj: any = {
    immenso_logo : "/assets/immenso_logo.jpeg",
    sriyaan_logo: "/assets/sriyaan_logo.jpeg",
    krios_logo: "/assets/krios_logo.jpeg",
  };

  const {
    text: truncatedDescription,
    toggleLabel,
    toggleTruncation,
  } = useTruncateText(description, 150);

  return (
    <div className={css["experience-card"]}>
      <div className={css["experience-header"]}>
        <img
          src={logoObj[logo]}
          alt={`${company} logo`}
          className={css["company-logo"]}
        />
        <div className={css["experience-info"]}>
          <p>
            <span className={css.header}>Position :</span>
            {` ${position}`}
          </p>
          <p>
            <span className={css.header}>Company Name :</span>
            {` ${company} ( ${type} )`}
          </p>
          <p>
            <span className={css.header}>Duration :</span>
            {` ${period}`}
          </p>
          <p>
            <span className={css.header}>Location :</span>
            {` ${location}`}
          </p>
        </div>
      </div>
      <div className={css["experience-body"]}>
        <pre className={css["description"]}>{truncatedDescription}</pre>
        {description.length > 150 && (
          <button className={css["toggle-btn"]} onClick={toggleTruncation}>
            {toggleLabel}
          </button>
        )}
        <div className={css["tags"]}>
          {skills.map((item) => {
            return (
              <span key={`${item}_${Math.random()}`} className={css["tag"]}>
                {item}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
