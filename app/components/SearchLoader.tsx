"use client";

import { useEffect, useState } from "react";

const WifiLoader = () => {
  const [text, setText] = useState("Searching");

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prev) => (prev === "Searching..." ? "Searching" : prev + "."));
    }, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex items-center justify-center w-16 h-16 rounded-full">
      {/* Outer Circle */}
      <svg className="absolute w-20 h-20 animate-spin-slow" viewBox="0 0 86 86">
        <circle
          className="stroke-gray-300"
          cx="43"
          cy="43"
          r="40"
          fill="none"
          strokeWidth="6"
        />
        <circle
          className="stroke-blue-500 animate-dash"
          cx="43"
          cy="43"
          r="40"
          fill="none"
          strokeWidth="6"
        />
      </svg>
      {/* Middle Circle */}
      <svg
        className="absolute w-15 h-15 animate-spin-reverse"
        viewBox="0 0 60 60"
      >
        <circle
          className="stroke-gray-300"
          cx="30"
          cy="30"
          r="27"
          fill="none"
          strokeWidth="6"
        />
        <circle
          className="stroke-blue-500 animate-dash"
          cx="30"
          cy="30"
          r="27"
          fill="none"
          strokeWidth="6"
        />
      </svg>
      {/* Inner Circle */}
      <svg className="absolute w-9 h-9 animate-spin-slow" viewBox="0 0 34 34">
        <circle
          className="stroke-gray-300"
          cx="17"
          cy="17"
          r="14"
          fill="none"
          strokeWidth="6"
        />
        <circle
          className="stroke-blue-500 animate-dash"
          cx="17"
          cy="17"
          r="14"
          fill="none"
          strokeWidth="6"
        />
      </svg>
      {/* Text */}
      <div className="absolute bottom-[-40px] text-sm font-medium text-gray-700">
        {text}
      </div>
    </div>
  );
};

export default WifiLoader;
