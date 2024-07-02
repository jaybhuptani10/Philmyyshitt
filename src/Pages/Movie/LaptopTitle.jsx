import React from "react";

const LaptopTitle = ({ movie }) => {
  return (
    <div className="flex flex-col  lg:flex-row gap-2 sm:gap-7">
      <h1 className="lg:text-4xl text-xl  font-extrabold hidden lg:block">
        {movie.original_title}
      </h1>
      <p className="hidden  bg-[#EFF0D1] w-40 h-10 lg:flex items-center text-black font-semibold justify-center  rounded-md">
        {movie.release_date}
      </p>
      <p className="hidden w-20 h-10  bg-[#A9E5BB] lg:flex items-center text-black font-semibold justify-center p-1 rounded-md">
        {movie.vote_average}
      </p>
    </div>
  );
};

export default LaptopTitle;
