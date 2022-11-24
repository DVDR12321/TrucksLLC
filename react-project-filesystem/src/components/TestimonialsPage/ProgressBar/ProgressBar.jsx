import React from "react";
import "./ProgressBar.css";

export const ProgressBar = ({ color1, color2, number }) => {
  return (
    <div className="skill">
      <div className="circle__outer">
        <div className="circle__inner">
          <div id="number">{number}</div>
        </div>
      </div>
      <svg className = "circle__svg"
        //xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="160px"
        height="160px"
      >
        <defs>
          <linearGradient id="GradientColor">
            <stop offset="0%" stop-color={color1} />
            <stop offset="100%" stop-color={color2} />
          </linearGradient>
        </defs>
        <circle cx="20" cy="20" r="17.5" stroke-linecap="round" />
      </svg>
    </div>
  );
};
