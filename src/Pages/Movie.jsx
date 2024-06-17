import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get("/api/search", {
        params: { movie: `movie?query=${id}` },
      })
      .then((res) => {
        setMovie(res.data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  if (!movie) return <div>Loading...</div>;
  console.log(movie[0]);

  return (
    <div className="sm:px-40  min-h-screen w-full overflow-hidden flex flex-col   text-white">
      <img
        className="w-[100vw] h-[30vh] sm:h-[60vh] object-cover object-top sm:rounded-xl"
        src={`https://image.tmdb.org/t/p/w500${movie[0].backdrop_path}`}
        alt=""
      />
      <div className="flex w-full flex-col">
        <div className="flex flex-col  sm:flex-row">
          <div className="m-5 flex gap-5">
            {" "}
            <img
              className="h-[15vh] w-[10vh] sm:h-[40vh] sm:w-[50vh] object-cover object-top rounded-xl"
              src={`https://image.tmdb.org/t/p/w500${movie[0].poster_path}`}
              alt=""
            />
            <div>
              <h1 className="sm:text-4xl text-2xl font-extrabold sm:hidden">
                {movie[0].original_title}
              </h1>
              <p className="sm:hidden">{movie[0].release_date}</p>
              <p className="sm:hidden">{movie[0].vote_average}</p>
            </div>
          </div>

          <div className=" flex flex-col flex-wrap w-[100%] m-5">
            <div className="flex flex-col sm:flex-row  gap-2 sm:gap-7">
              <h1 className="sm:text-4xl text-xl font-extrabold hidden sm:block">
                {movie[0].original_title}
              </h1>
              <p className="hidden sm:block">{movie[0].release_date}</p>
              <p className="hidden sm:block">{movie[0].vote_average}</p>
            </div>

            <div className="w-[100%] mt-5 ">
              <p>{movie[0].overview}</p>
            </div>
          </div>
          <div className="m-5 w-[40vw] h-[30vh] border-2 border-black"></div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
