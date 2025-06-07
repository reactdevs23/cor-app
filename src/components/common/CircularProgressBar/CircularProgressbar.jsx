import React, { useState, useEffect } from "react";
import classes from "./CircularProgressBar.module.css";

const CircularProgressBar = ({
  size = 14,
  strokeWidth = 2,
  duration = 3, // seconds for full cycle
  onComplete = () => { }, // callback when 100% is reached
  progressColor = "#008c5a",
  bgColor = "rgba(2, 55, 15, 0.15)",
  // progress,
  // setProgress
}) => {

  const [progress, setProgress] = useState(0);

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  const getProgressColor = () => {
    if (progress > 85) return "#e05555";
    if (progress >= 50) return "#df9022";
    return progressColor;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          onComplete();
          return 0;
        }
        return prev + 100 / (duration * 10);
      });
    }, 100);

    return () => clearInterval(interval);
  }, [duration, onComplete]);

  return (
    <div className={classes.container}>
      <svg width={size} height={size} className={classes.rotate}>
        <circle
          className={classes.background}
          stroke={bgColor}
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          className={classes.progress}
          stroke={getProgressColor()}
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{ transition: "stroke-dashoffset 0.1s linear, stroke 0.2s" }}
        />
      </svg>
    </div>
  );
};

export default CircularProgressBar;
