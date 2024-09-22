import React from "react";
import css from "./ToolsIUse.module.css";

interface ToolIUseProps {
  toolIUse: string[];
}

const ToolIUse: React.FC<ToolIUseProps> = ({ toolIUse }) => {
  return (
    <>
      <h1>Tools I Use</h1>
      <div className={css["toolIUse-tags"]}>
        {toolIUse.map((item) => {
          return (
            <span key={item} className={css["toolIUse-tag"]}>
              {item}
            </span>
          );
        })}
      </div>
    </>
  );
};

export default ToolIUse;
