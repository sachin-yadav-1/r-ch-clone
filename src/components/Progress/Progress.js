import React from "react";
import "./Progress.css";

const Progress = ({ fillPercent, classes }) => {
  return (
    <div className={"progress-container " + classes}>
      <div className="progress" style={{ width: `${fillPercent}%` }}></div>
    </div>
  );
};

export default Progress;
