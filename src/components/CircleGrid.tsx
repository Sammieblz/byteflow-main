"use client"

import React, { useRef, useEffect } from 'react';

export default function CircleGrid() {
  const grid = [14, 30] as const;
  const container = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (container.current) {
      
      container.current.style.transition = 'opacity 1s';
      container.current.style.opacity = '1';
    }
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 935 425"
      className="absolute -top-14 -z-10"
      id="circle-grid"
      ref={container}
      opacity={0}
      style={{
        maskImage: "linear-gradient(black, transparent)",
      }}
    >
      <g className="circle-grid-group">
        {[...Array(grid[0])].map((_, i) => {
          return [...Array(grid[1])].map((_, j) => {
            return (
              <circle
                key={i + j}
                fill="currentColor"
                opacity=".2"
                className="circle-grid-item"
                cx={j * 32}
                cy={i * 32 + 10}
                r="5"
              />
            );
          });
        })}
      </g>
    </svg>
  );
}
