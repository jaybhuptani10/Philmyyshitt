import React, { useState } from "react";
import General from "../components/General";
import Title from "../components/Title";
import Casts from "../components/Casts";
import Crew from "../components/Crew";
import Themes from "../components/Themes";

const Details = ({ movie }) => {
  const [selectedOption, setSelectedOption] = useState("Cast");
  const formatBudget = (budget) => {
    return (budget / 1000000).toFixed(2) + "M";
  };
  return (
    <div className="sm:my-20 my-10">
      <div className="flex justify-around font-extrabold text-sm sm:text-l text-[#6CD4FF] border-b-2 border-[#9F86C0]">
        <h1
          className={`cursor-pointer ${
            selectedOption === "Details" ? "active" : ""
          }`}
          onClick={() => setSelectedOption("Details")}
        >
          Details
        </h1>
        <h1
          className={`cursor-pointer ${
            selectedOption === "Cast" ? "active" : ""
          }`}
          onClick={() => setSelectedOption("Cast")}
        >
          Cast
        </h1>
        <h1
          className={`cursor-pointer ${
            selectedOption === "Crew" ? "active" : ""
          }`}
          onClick={() => setSelectedOption("Crew")}
        >
          Crew
        </h1>
        <h1
          className={`cursor-pointer ${
            selectedOption === "Genre" ? "active" : ""
          }`}
          onClick={() => setSelectedOption("Genre")}
        >
          Genre
        </h1>
      </div>
      <div>
        {selectedOption === "Details" && (
          <>
            <div className="flex gap-5 w-[100%] items-center mt-5">
              <h1 className="  mx-2 w-[20%] uppercase">Studios</h1>
              <div className="h-[1px] w-[15%] bg-white"></div>
              <div className="flex w-[15%] sm:w-2/5 flex-wrap gap-2">
                {movie.production_companies.map((studio) => (
                  <General key={studio.id} detail={studio.name} />
                ))}
              </div>
            </div>
            <div className="flex gap-5 items-center mt-5">
              <h1 className=" mx-2 w-[20%]  uppercase">Country</h1>
              <div className="h-[1px]  w-[15%] bg-white"></div>
              <div className="flex w-[20%] sm:w-2/5 flex-wrap gap-2">
                {movie.production_countries.map((country) => (
                  <General key={country.id} detail={country.name} />
                ))}
              </div>
            </div>
            <div className="flex gap-5 items-center mt-5">
              <h1 className=" mx-2 w-[20%] uppercase">Status</h1>
              <div className="h-[1px] w-[15%] bg-white"></div>
              <h1 className="text-white text-xs whitespace-nowrap bg-[#303840] p-2 rounded-md mx-1 cursor-pointer">
                {movie.status}
              </h1>
            </div>
            <div className="flex gap-5 items-center mt-5">
              <h1 className=" mx-2 w-[20%] uppercase">Budget</h1>
              <div className="h-[1px] w-[15%] bg-white"></div>
              <h1 className="text-white text-xs whitespace-nowrap bg-[#303840] p-2 rounded-md mx-1 cursor-pointer">
                {formatBudget(movie.budget)}
              </h1>
            </div>
            <div className="flex gap-5 items-center mt-5">
              <h1 className=" mx-2 w-[20%] uppercase">Primary Language</h1>
              <div className="h-[1px] w-[15%] bg-white"></div>
              <div className="flex w-[20%] sm:w-2/5 flex-wrap gap-4">
                {movie.spoken_languages.map((lang) => (
                  <General key={lang.id} detail={lang.english_name} />
                ))}
              </div>
            </div>
            <div className="flex  gap-6  mt-10">
              <h1 className=" mx-2 w-[20%] uppercase">Alternate Titles</h1>
              <div className="h-[1px] w-[15%] mt-3 bg-white"></div>
              <div className="flex flex-wrap w-[20%] gap-2 ">
                <Title id={movie.id} />
              </div>
            </div>
          </>
        )}
        {selectedOption === "Cast" && <Casts id={movie.id} />}
        {selectedOption === "Crew" && <Crew id={movie.id} />}
        {selectedOption === "Genre" && (
          <>
            <div className="flex gap-5 items-center mt-5">
              <h1 className="w-30 mx-2 sm:w-20 uppercase">Genres</h1>
              <div className="h-[1px] w-6 sm:w-40 bg-white"></div>
              <div className="flex flex-wrap gap-4">
                {movie.genres.map((genre) => (
                  <General key={genre.id} detail={genre.name} />
                ))}
              </div>
            </div>
            <div className="flex gap-6 items-center mt-10">
              <h1 className="w-30 mx-2 sm:w-20 uppercase">THEMES</h1>
              <div className="h-[1px] w-6 sm:w-40 bg-white"></div>
              <div className="flex flex-wrap gap-2">
                <Themes id={movie.id} />
              </div>
            </div>
          </>
        )}
      </div>
      <div></div>
    </div>
  );
};

export default Details;
