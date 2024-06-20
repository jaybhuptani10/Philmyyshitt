import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Casts from "./components/Casts";
import Crew from "./components/Crew";
import Navbar from "./Navbar/Navbar";
import CrewData from "./components/CrewData";
import Genre from "./components/General";
import Themes from "./components/Themes";
import General from "./components/General";
import Title from "./components/Title";
import { useDispatch, useSelector } from "react-redux";

const Movie = () => {
  // const dispatch = useDispatch();
  // const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  // useEffect(() => {
  //   if (isLoggedIn) {
  //     dispatch(fetchUserProfile());
  //   }
  // }, [isLoggedIn, dispatch]);
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [selectedOption, setSelectedOption] = useState("Cast");

  const states = "images";
  const [crew, setCrew] = useState([]);

  useEffect(() => {
    const fetchCastData = async () => {
      try {
        const response = await axios.get("/api/details", {
          params: { id: id, type: states },
        });

        setCrew(response.data.posters);
        // Assuming response.data.crew is an array
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (id) {
      fetchCastData();
    }
  }, [id]);
  useEffect(() => {
    axios
      .get("/api/moviedetails", {
        params: { movie: id },
      })
      .then((res) => {
        setMovie(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  if (!movie) return <div>Loading...</div>;
  const formatBudget = (budget) => {
    return (budget / 1000000).toFixed(2) + "M";
  };
  return (
    <>
      <Navbar />
      <div className="xl:px-40 md:px-10  min-h-screen w-full overflow-hidden flex flex-col text-white">
        <img
          className="w-[100vw] sm:hidden h-[30vh] sm:h-[60vh] object-cover object-centre sm:rounded-xl"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt=""
        />
        <div className="flex sm:mt-20 w-full flex-col">
          <div className="flex flex-col  lg:flex-row">
            <div className="m-5 flex gap-5">
              <img
                className="h-[15vh] w-[10vh] md:h-[20vh] md:w-[15vh] xl:h-[30vh] xl:w-[20vw] object-cover object-top rounded-xl"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt=""
              />
              <div className="flex flex-col">
                <div className="md:flex gap-5">
                  <h1 className="lg:text-4xl  text-2xl font-extrabold lg:hidden">
                    {movie.original_title}
                  </h1>
                  <p className="lg:hidden block">{movie.release_date}</p>
                  <p className="lg:hidden block">{movie.vote_average}</p>
                </div>
                <div className="w-[100%] hidden sm:block lg:hidden  ">
                  <p className="mx-2 sm:mt-5 sm:mx-0">{movie.overview}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col my-5 flex-wrap w-[100%] ">
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
              <div className="w-[100%]  ">
                <p className="mx-2 block  lg:block sm:mt-5 sm:mx-0">
                  {movie.overview}
                </p>
              </div>

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
                        <h1 className=" mx-2 w-[20%] uppercase">
                          Primary Language
                        </h1>
                        <div className="h-[1px] w-[15%] bg-white"></div>
                        <div className="flex w-[20%] sm:w-2/5 flex-wrap gap-4">
                          {movie.spoken_languages.map((lang) => (
                            <General key={lang.id} detail={lang.english_name} />
                          ))}
                        </div>
                      </div>
                      <div className="flex  gap-6  mt-10">
                        <h1 className=" mx-2 w-[20%] uppercase">
                          Alternate Titles
                        </h1>
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
              </div>
            </div>
            {/* {isLoggedIn ? (
              <div className="m-5 w-[40vw] h-[30vh]  flex flex-col  justify-center gap-1 ">
                <h1 className="bg-[#5b6875] w-[100%]  p-2 text-center rounded-md duration-500 transition-all cursor-pointer hover:scale-110">
                  ADD
                </h1>
                <h1>
                  <h1 className="bg-[#5b6875] w-[100%]  p-2 text-center rounded-md duration-500 transition-all cursor-pointer hover:scale-110">
                    Share
                  </h1>
                </h1>
              </div>
            ) : (
              <div className="m-5 w-[40vw] h-[30vh]  flex flex-col  justify-center gap-1 ">
                <h1 className="bg-[#5b6875] w-[100%]  p-2 text-center rounded-md duration-500 transition-all cursor-pointer hover:scale-110">
                  Sign in to Add, rate or review
                </h1>
                <h1>
                  <h1 className="bg-[#5b6875] w-[100%]  p-2 text-center rounded-md duration-500 transition-all cursor-pointer hover:scale-110">
                    Share
                  </h1>
                </h1>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;
