import React from "react";
import css from "./KnowMe.module.css";

const KnowMeTab: React.FC = () => {
  return (
    <>
      <div>
        <h1>About Me</h1>
        <span className={css.aboutme}>
          <p>{`Hey there, 👋 `}</p>
          <p>{`I am Ajay Yadav and I am a Software Developer with 2.5+ years experience in development.`}</p>
          <p>{`💼 My experience has given me the opportunity to design and develop user-centric websites and web-applications. I specialize in creating seamless user experiences, complex functionalities and features by leveraging my skills in HTML, CSS, JavaScript, React JS, Angular and MySQL.`}</p>
          <p>{`🚀 I'm passionate about continuous learning and applying my knowledge to deliver scalable and efficient web applications. My technical proficiency includes a strong understanding of data structures, algorithms, and core computer science principles.`}</p>
        </span>
      </div>
      <div>
        <h1>⚙️ Technical Skills:</h1>
        <ul>
          <li>- Programming Languages: Java, JavaScript, Dart.</li>
          <li>- Libraries/Frameworks: React JS, Angular, Adonis JS.</li>
          <li>- Database Knowledge: SQL, MongoDB.</li>
          <li>
            - IT Constructs/Tools/Platforms: Linux, GitHub, GitLab, Bit Bucket,
            Postman, Insomnia, Jira.
          </li>
          <li>
            - Fundamentals: Data Structures and Algorithms, Database Management
            Systems.
          </li>
        </ul>
      </div>
      <div>
        <h1> 💡 Soft Skills:</h1>
        <ul>
          <li>- Problem-Solving</li>
          <li>- Logical Reasoning</li>
          <li>- Time Management</li>
          <li>- Communication</li>
          <li>- Collaboration</li>
        </ul>
      </div>
      <div className={css.thoughtLine}>
        {`🌟"Think Like an Programmer and Start Coding!" 🌟`}
      </div>
    </>
  );
};

export default KnowMeTab;
