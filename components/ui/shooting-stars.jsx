"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef } from "react";

const getRandomStartPoint = () => {
  // Ensure window exists before accessing its properties (standard safety)
  if (typeof window === "undefined") {
    return { x: 0, y: 0, angle: 45 };
  }

  const side = Math.floor(Math.random() * 4);
  const offset = Math.random() * window.innerWidth;

  switch (side) {
    case 0:
      // Top edge, shooting down-right
      return { x: offset, y: 0, angle: 75 };
    case 1:
      // Right edge, shooting down-left
      return { x: window.innerWidth, y: offset, angle: 165 };
    case 2:
      // Bottom edge, shooting up-left
      return { x: offset, y: window.innerHeight, angle: 255 };
    case 3:
      // Left edge, shooting up-right
      return { x: 0, y: offset, angle: 345 };
    default:
      return { x: 0, y: 0, angle: 45 };
  }
};

export const ShootingStars = ({
  minSpeed = 5, // Reduced speed for better visibility
  maxSpeed = 15,
  minDelay = 1200,
  maxDelay = 4200,
  starColor = "#9E00FF",
  trailColor = "#2EB9DF",
  starWidth = 10,
  starHeight = 2,
  className,
}) => {
  const [star, setStar] = useState(null);
  const svgRef = useRef(null);

  // 1. Star Generation Loop
  useEffect(() => {
    let timeoutId;

    const createStar = () => {
      const { x, y, angle } = getRandomStartPoint();
      const newStar = {
        id: Date.now(),
        x,
        y,
        angle,
        scale: 1,
        speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
        distance: 0,
      };
      setStar(newStar);

      const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
      timeoutId = setTimeout(createStar, randomDelay);
    };

    createStar();

    return () => clearTimeout(timeoutId); // Cleanup timeout
  }, [minSpeed, maxSpeed, minDelay, maxDelay]);

  // 2. Star Movement Loop
  useEffect(() => {
    let animationFrame;

    const moveStar = () => {
      setStar((prevStar) => {
        if (!prevStar) {
          animationFrame = requestAnimationFrame(moveStar);
          return null;
        }

        const newX =
          prevStar.x +
          prevStar.speed * Math.cos((prevStar.angle * Math.PI) / 180);
        const newY =
          prevStar.y +
          prevStar.speed * Math.sin((prevStar.angle * Math.PI) / 180);

        // Star disappears once it exits the screen bounds
        if (
          newX < -200 ||
          newX > window.innerWidth + 200 ||
          newY < -200 ||
          newY > window.innerHeight + 200
        ) {
          return null; // Stop tracking this star
        }

        return {
          ...prevStar,
          x: newX,
          y: newY,
          distance: prevStar.distance + prevStar.speed,
          scale: 1, // Removed dynamic scale as it often causes jitter
        };
      });

      animationFrame = requestAnimationFrame(moveStar);
    };

    animationFrame = requestAnimationFrame(moveStar);
    return () => cancelAnimationFrame(animationFrame);
  }, [star]); // Reruns movement every time 'star' state changes (i.e., every frame)

  return (
    <svg
      ref={svgRef}
      className={cn(
        "w-full h-full absolute inset-0 z-10 pointer-events-none",
        className
      )}
      // Added overflow: visible to ensure stars that start just off-screen are seen
      style={{ overflow: "visible" }}
    >
      {star && (
        // 🚨 CRITICAL FIX: The <defs> block must be inside the star conditional rendering
        // and use a unique ID, or the browser won't draw the gradient correctly.
        <g key={star.id}>
          <defs>
            <linearGradient
              id={`gradient-${star.id}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                style={{ stopColor: trailColor, stopOpacity: 0.1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: starColor, stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          <rect
            x={star.x}
            y={star.y}
            width={starWidth * star.scale}
            height={starHeight}
            // Use the unique ID here
            fill={`url(#gradient-${star.id})`}
            transform={`rotate(${star.angle}, ${
              star.x + (starWidth * star.scale) / 2
            }, ${star.y + starHeight / 2})`}
          />
        </g>
      )}
    </svg>
  );
};
