import React from "react";
import "./Progress.css";

const Progress = ({ fillPercent }) => {
  return (
    <div className="progress-container">
      <div className="progress" style={{ width: `${fillPercent}%` }}></div>
    </div>
  );
};

export default Progress;
