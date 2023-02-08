import React from "react";
import "./ProgressBar.css";

export const ProgressBar = ({ color1, color2, number, headerColor }) => {
  const dashoffset = (100 - number) * 4.35 + 320;

  return (
    <div className="skill" style={{ justifyContent: "center" }}>
      <div className="circle__outer" style={{ "--color": headerColor }}>
        <div className="circle__inner" id="number">
          {number}%
        </div>
      </div>
      <svg className="circle__svg" version="1.1" width="160px" height="160px">
        <defs>
          <linearGradient id="GradientColor">
            <stop offset="0%" stopColor={color1} />
            <stop offset="100%" stopColor={color2} />
          </linearGradient>
        </defs>
        <circle
          style={{ "--number": dashoffset }}
          id="mycircle"
          cx="75"
          cy="75"
          r="70"
          strokeLinecap="suqare"
        />
      </svg>
    </div>
  );
};
