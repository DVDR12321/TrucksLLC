import React from "react";
import { useRef } from "react";
import "./ProgressBar.css";

export const ProgressBar = ({ color1, color2, number }) => {
  let ref = useRef(95);
  let MyNumber = Number(number);
  if (Number(ref.current) === MyNumber) {
  } else {
  }

  return (
    <div className="skill">
      <div className="circle__outer">
        <div className="circle__inner" id="number">
          {number}
        </div>
      </div>
      <svg className="circle__svg" version="1.1" width="160px" height="160px">
        <defs>
          <linearGradient id="GradientColor">
            <stop offset="0%" stopColor={color1} />
            <stop offset="100%" stopColor={color2} />
          </linearGradient>
        </defs>
        <circle cx="30" cy="30" r="26.5" strokeLinecap="round" />
      </svg>
    </div>
  );
};
