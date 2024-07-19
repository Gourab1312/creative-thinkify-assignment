import React from "react";
import "../styles/ProgressBar.css";

const ProgressBar = ({ maxCount, currentCount }) => {
  const progressWidth = (currentCount / maxCount) * 100;
  return (
    <div className="gap-10 progress-wrapper heading-2 mt-100">
      <div className="progress-bar">
        <div
          className="progress-indicator"
          style={{ width: `${progressWidth}%` }}
        ></div>
      </div>
      {`${currentCount}/${maxCount} Creatives`}
    </div>
  );
};

export default ProgressBar;
