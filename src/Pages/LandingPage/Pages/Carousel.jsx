import "tailwindcss/tailwind.css";
import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Carousel = ({ result }) => {
  const navigate = useNavigate();
  const carouselRef = useRef(null);
  const scrollLeft = () => {
    carouselRef.current.scrollBy({
      top: 0,
      left: -300,
      behavior: "smooth",
    });
  };
  const scrollRight = () => {
    carouselRef.current.scrollBy({
      top: 0,
      left: 300,
      behavior: "smooth",
    });
  };
  return (
    <div className="relative p-8">
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#CBD2D0] text-bold text-black p-2 z-10 rounded-full focus:outline-none"
        onClick={scrollLeft}
      >
        &lt;
      </button>
      <div
        className="overflow-x-scroll flex space-x-4 custom-scrollbar"
        ref={carouselRef}
      >
        {result.map((movie, index) => (
          <div
            key={index}
            className="relative group flex-none w-[16vh] h-[24vh] sm:w-[20vh] sm:h-[30vh] transform transition-transform duration-300 hover:scale-10"
            onClick={() => navigate(`/movie/${movie.title}`)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={`Backdrop for ${movie.title}`}
              className="w-full h-full rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-lg font-semibold transition-opacity duration-300 rounded-lg">
              {movie.title}
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#CBD2D0] text-bold text-black z-10 p-2 rounded-full focus:outline-none"
        onClick={scrollRight}
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
