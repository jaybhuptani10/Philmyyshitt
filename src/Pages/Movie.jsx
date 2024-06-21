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
import { fetchUserProfile } from "../store/Slice";
import Title from "./components/Title";
import { useDispatch, useSelector } from "react-redux";
import Stars from "./components/Stars";
import Modal from "./components/Modal";

const Movie = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const userProfileFromStore = useSelector((state) => state.user.user);
  const [userProfile, setUserProfile] = useState(userProfileFromStore); // Initialize with current state

  const [rating, setRating] = useState(0);
  const [movie, setMovie] = useState(null);
  const [selectedOption, setSelectedOption] = useState("Cast");
  const [crew, setCrew] = useState([]);
  const [watched, setWatched] = useState(false);
  const [liked, setLiked] = useState(false);
  const [add, setAdd] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    if (!isLoggedIn) {
      dispatch(fetchUserProfile());
    }
  }, [dispatch, isLoggedIn]);

  useEffect(() => {
    // Update userProfile state when isLoggedIn changes or userProfileFromStore changes
    if (isLoggedIn) {
      setUserProfile(userProfileFromStore);
    }
  }, [isLoggedIn, userProfileFromStore]);

  useEffect(() => {
    const fetchCastData = async () => {
      try {
        const response = await axios.get("/api/details", {
          params: { id: id, type: "images" },
        });
        setCrew(response.data.posters);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (id) {
      fetchCastData();
    }
  }, [id]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get("/api/moviedetails", {
          params: { movie: id },
        });
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (id) {
      fetchMovieDetails();
    }
  }, [id]);

  useEffect(() => {
    const updateUserData = async () => {
      try {
        await axios.post("/user/addMovieToUser", {
          movieId: id,
          userEmail: userProfile.email,
          stars: rating,
          liked: liked,
          watchlisted: add,
        });
        console.log("User data updated successfully");
      } catch (error) {
        console.error("Error updating user data:", error);
        // Implement error handling as needed
      }
    };

    if (
      userProfile && // Check if userProfile is not null
      userProfile.email &&
      typeof liked === "boolean" &&
      typeof add === "boolean" &&
      id
    ) {
      updateUserData();
    }
  }, [watched, liked, add, id, rating, userProfile]); // Include userProfile in dependencies

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
                  <h1 className="lg:text-4xl relative text-2xl font-extrabold lg:hidden">
                    {movie.original_title}{" "}
                  </h1>
                  <p className="lg:hidden block">{movie.release_date}</p>
                  <p className="lg:hidden block">{movie.vote_average}</p>
                </div>
                <div className="lg:hidden absolute right-5">
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    height="2em"
                    width="2em"
                    onClick={() => handleOpenModal()}
                  >
                    <path d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z" />
                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
                  </svg>
                  {openModal && (
                    <Modal
                      isLoggedIn={isLoggedIn}
                      setWatched={setWatched}
                      onClose={handleCloseModal}
                      setLiked={setLiked}
                      setAdd={setAdd}
                      watched={watched}
                      liked={liked}
                      add={add}
                      rating={rating}
                      setRating={setRating}
                    />
                  )}
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
                <div></div>
              </div>
            </div>
            {isLoggedIn ? (
              <div className="m-5 sm:my-10 w-[40vw] h-[30vh]  flex flex-col  justify-center gap-1 ">
                <div className="flex  gap-5 items-center bg-[#5b6875] w-[100%]  p-2 text-center rounded-md duration-500 transition-all justify-center    h-24">
                  <h1 className="text-xs gap-2 flex flex-col justify-center items-center uppercase font-bold cursor-pointer hover:text-white text-[#C8C8C8]">
                    {" "}
                    <svg
                      onClick={() => {
                        setWatched(!watched);
                      }}
                      viewBox="0 0 1024 1024"
                      className={`w-10 duration-200 transition-all h-10 cursor-pointer ${
                        watched ? "text-[#80ED99]" : "text-white"
                      } `}
                      fill="currentColor"
                    >
                      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8v48z" />
                    </svg>
                    Watched
                  </h1>
                  <h1 className="text-xs flex  gap-2 flex-col justify-center items-center uppercase font-bold cursor-pointer hover:text-white text-[#C8C8C8]">
                    {" "}
                    <svg
                      onClick={() => setLiked(!liked)}
                      viewBox="0 0 1024 1024"
                      className={`w-10 duration-200 transition-all h-10 cursor-pointer ${
                        liked ? "text-[#FE7F2D]" : ""
                      } `}
                      fill="currentColor"
                    >
                      <path d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z" />
                    </svg>
                    Like
                  </h1>
                  <h1 className="text-xs gap-2 flex flex-col justify-center items-center uppercase font-bold cursor-pointer hover:text-white text-[#C8C8C8]">
                    {" "}
                    <svg
                      onClick={() => setAdd(!add)}
                      viewBox="0 0 24 24"
                      className={`w-10 duration-200 transition-all h-10 cursor-pointer ${
                        add ? "text-blue-400" : ""
                      } `}
                      fill="currentColor"
                    >
                      <path d="M18.5 2h-12C4.57 2 3 3.57 3 5.5V22l7-3.5 7 3.5v-9h5V5.5C22 3.57 20.43 2 18.5 2zM13 11h-2v2H9v-2H7V9h2V7h2v2h2v2zm7 0h-3V5.5c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5V11z" />
                    </svg>
                    Watchlist
                  </h1>
                </div>

                <Stars rating={rating} setRating={setRating} />
                <h1 className="bg-[#5b6875] w-[100%]  p-2 text-center rounded-md duration-500 transition-all cursor-pointer hover:scale-110">
                  Review or Log
                </h1>
                <h1 className="bg-[#5b6875] w-[100%]  p-2 text-center rounded-md duration-500 transition-all cursor-pointer hover:scale-110">
                  Add this to your list
                </h1>
                <h1 className="bg-[#5b6875] w-[100%]  p-2 text-center rounded-md duration-500 transition-all cursor-pointer hover:scale-110">
                  Share this Page
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
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;
