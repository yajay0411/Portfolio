import { setTitle } from "../../../shared/utils/SetTitle";

import React, { useState } from "react";
import css from "./About.module.css";
import KnowMeTab from "./TabsContentSection/KnowMeTab/KnowMeTab";
import ExperienceTab from "./TabsContentSection/ExperienceTab/ExperienceTab";
import TechStackTab from "./TabsContentSection/TechStackTab/TechStackTab";
// import ToolIUse from "./TabsContentSection/ToolsIUse/ToolIUse";

const About: React.FC = () => {
  setTitle("about");
  const [activeTab, setActiveTab] = useState("know_me");

  const experiences = [
    {
      id: 1,
      position: "Junior Web Developer",
      company: "Krios Info Solutions Pvt.Ltd.",
      period: "May 2024 - Present · 5 mos",
      location: "Pune/Pimpri-Chinchwad Area · On-site",
      type: "Full-time",
      description: `> Client :: Mahindra & Mahindra.
> Projects :: Dealer incentive , FDW.
> Working as Angular Developer with Mahindra & Mahindra.
> On a migration project JSP to Angular.
> Have used and implemented knowledge of angular like Reactive Forms, Component to component interaction, etc.
> Have implements Complex forms, Re-Useable Modals/Popups, Tables, etc with a clean and modular coding approach.
> Have use Bit-Bucket and Jira for Proper development process Also Provide KT to colleagues on GIT and Jira Agile flow.`,
      skills: [
        "JavaScript",
        "React.js",
        "Angular",
        "BootStrap",
        "Java",
        "TypeScript",
        "SpringBoot",
      ],
      logo: "krios_logo", // Replace with actual logo URL
    },
    {
      id: 2,
      position: "Junior Web Developer",
      company: "Immenso Tech Pvt. Ltd.",
      period: "Jun 2023 - May 2024 · 1 yr",
      location: "India · On-site",
      type: "Full-time",
      description: `> I have worked on a project that interacts with PMS (property management system).
> Thus catering users and providing user with a great UI and UX experience.
> This project manages leasing, payment, emails, policies, lease signatures, work orders and other property related affairs
that makes property owners and staff managing the property easy.
> My role in the project was to attend client call and understand requirements and then work on both frontend(React) and 
backend(Adonis JS || MySQL) to provide client with the module he/she requested.
> Some old module/functionality requires changes were communicated in client call. Our team use to understands the changes 
and we worked accordingly to provide client what he/she wants.`,
      skills: ["JavaScript", "React.js", "Node.js", "CSS", "HTML", "Git"],
      logo: "immenso_logo", // Replace with actual logo URL
    },
    {
      id: 3,
      position: "Software Developer",
      company: "Sriyaan Technologies Pvt Ltd",
      period: "Jun 2022 - May 2023 · 1 yr",
      location: "India · Hybrid",
      type: "Full-time",
      description: `> I have worked on a project that deals with booking of healthcare procedures and screenings.
> Worked with senior developers to find and update RCA, feedbacks on support tickets, Executed MySQL migrations on various servers,
Created test cases for modules, changed verbiage in code, etc.`,
      skills: [
        "JSON",
        "Formik",
        "Redux",
        "Express.js",
        "PostgreSQL",
        "MongoDB",
      ],
      logo: "sriyaan_logo", // Replace with actual logo URL
    },
  ];

  const techStack = [
    "Html",
    "Css",
    "Javascript",
    "Typescript",
    "React JS",
    "Angular",
    "Node JS",
    "Express JS",
    "MySQL",
    "Java",
    "Springboot",
  ];

  // const toolIUse = ["VS Code", "Postman"];
  return (
    <div className={css["about-container"]}>
      <div className={css["tabs"]}>
        {/* tab button section */}
        <div className={css["tab-list"]}>
          <button
            onClick={() => setActiveTab("know_me")}
            className={activeTab === "know_me" ? css["active"] : ""}
          >
            Know Me
          </button>
          <button
            onClick={() => setActiveTab("experience")}
            className={activeTab === "experience" ? css["active"] : ""}
          >
            Experience
          </button>
          <button
            onClick={() => setActiveTab("tech")}
            className={activeTab === "tech" ? css["active"] : ""}
          >
            Tech Skills
          </button>
          <button
            onClick={() => setActiveTab("resume_pdf")}
            className={activeTab === "resume_pdf" ? css["active"] : ""}
          >
            Resume
          </button>
          {/* <button
            onClick={() => setActiveTab("tools")}
            className={activeTab === "tools" ? css["active"] : ""}
          >
            Tools I Use
          </button> */}
        </div>

        {/* tab content section */}
        <div className={css["tab-content"]}>
          {activeTab === "know_me" && (
            <section>
              <KnowMeTab />
            </section>
          )}

          {activeTab === "experience" && (
            <section>
              <ExperienceTab experiences={experiences} />
            </section>
          )}

          {activeTab === "tech" && (
            <section>
              <TechStackTab techStack={techStack} />
            </section>
          )}
        </div>
        {/* {activeTab === "tools" && (
            <section>
              <ToolIUse toolIUse={toolIUse} />
            </section>
          )} */}
      </div>
    </div>
  );
};

export default About;
