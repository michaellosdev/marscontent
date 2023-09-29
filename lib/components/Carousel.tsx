"use client";

// Carousel.tsx
import React, { useState, useRef } from "react";

interface CarouselProps {
  cards: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 75) {
      // Slided Left
      nextCard();
    }

    if (touchEndX.current - touchStartX.current > 75) {
      // Slided Right
      prevCard();
    }
  };

  return (
    <div className="relative w-80 overflow-hidden">
      {/* Previous & Next Buttons */}

      {/* Cards */}
      <div
        className="flex transition-all duration-300 transform"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {cards.map((card, index) => (
          <div key={index} className="w-80 p-4 ">
            {card}
          </div>
        ))}
      </div>
      <button
        onClick={prevCard}
        className="absolute bottom-4 left-2 z-10 bg-gray-200  rounded-full shadow-lg transform w-8 h-8"
      >
        {"<"}
      </button>
      <button
        onClick={nextCard}
        className="absolute bottom-4 right-2 z-10 bg-gray-200  rounded-full shadow-lg transform  w-8 h-8"
      >
        {">"}
      </button>
      {/* Indicators */}
      <div className="flex justify-center space-x-2  absolute bottom-6 left-1/2 -translate-x-1/2">
        {cards.map((_, index) => (
          <span
            key={index}
            className={`w-2 h-2 bg-gray-400 rounded-full ${
              index === currentIndex ? "bg-gray-700" : ""
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
