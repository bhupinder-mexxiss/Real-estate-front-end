import React from "react";
// import "./ProgressBar.css";

const ProgressBar = ({ min, max, value, percentage }) => {
  return (
    <div className="progress-container relative w-full h-1 bg-white rounded-md mb-9 mt-2 ">
      <div
        className="progress-bar h-full bg-primary rounded-md relative"
        style={{ width: `${percentage}%` }}
      >
        <span className="absolute w-3 h-3 right-0 top-1/2 bg-primary rounded-full -translate-y-1/2 ">
          <span
            className={`value-label text-text1 font-medium absolute top-5 right-1/2 translate-x-1/2`}
          >
            {value}
          </span>
        </span>
      </div>
      <div className="labels flex justify-between mt-1 text-[10px] text-[#666] ">
        <span className="min-label">{min}</span>
        <span className="max-label">{max}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
