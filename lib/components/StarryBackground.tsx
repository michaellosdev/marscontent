"use client";

import * as React from "react";

const NUM_STATIC_STARS = 200;
const NUM_FALLING_STARS = 5;
const DIRECTIONS = ["bottom-left", "bottom-right"];

const getRandomDirection = () =>
  DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)];

const StarryBackground: React.FC = () => {
  const [stars, setStars] = React.useState<number[]>([]);
  const [fallingStars, setFallingStars] = React.useState<number[]>([]);

  React.useEffect(() => {
    setStars(Array.from({ length: NUM_STATIC_STARS }).map(() => Math.random()));
    setFallingStars(
      Array.from({ length: NUM_FALLING_STARS }).map(() => Math.random())
    );

    const interval = setInterval(() => {
      setFallingStars(
        Array.from({ length: NUM_FALLING_STARS }).map(() => Math.random())
      );
    }, 100000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      {stars.map((_, i) => (
        <div
          key={i}
          className="static-star absolute"
          style={{
            left: `${Math.random() * 100}vw`,
            top: `${Math.random() * 100}vh`,
            opacity: Math.random(),
            width: `${Math.random() * 6}px`,
            height: `${Math.random() * 6}px`,
          }}
        />
      ))}
      {fallingStars.map((_, i) => (
        <div
          key={i}
          className={`falling-star absolute ${getRandomDirection()}`}
          style={{
            left: `${Math.random() * 100}vw`,
            top: `${Math.random() * 100}vh`,
            animationDuration: `${Math.random() * 10 + 2}s`,
            opacity: Math.random(),
            width: `${Math.random() * 3}px`,
            height: `${Math.random() * 6}px`,
          }}
        />
      ))}
      <style jsx>{`
        .static-star,
        .falling-star {
          background-color: #fff;
          border-radius: 50%;
          transition: all 90s ease;
        }

        .falling-star.bottom-left {
          animation: fallBottomLeft linear infinite;
        }
        .falling-star.bottom-right {
          animation: fallBottomRight linear infinite;
        }

        @keyframes fallBottomLeft {
          to {
            transform: translate(-60vw, 60vh);
          }
        }
        @keyframes fallBottomRight {
          to {
            transform: translate(60vw, 60vh);
          }
        }
      `}</style>
    </div>
  );
};

export default StarryBackground;
