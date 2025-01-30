import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import { fetchUserProfile } from "../../store/Slice";
import { useDispatch, useSelector } from "react-redux";

import PhoneTitle from "./PhoneTitle";
import LaptopTitle from "./LaptopTitle";
import Details from "./Details";
import Log from "./Log";
import LoginButton from "./LoginButton";

const Movie = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const userProfile = useSelector((state) => state.user.user);

  const [movie, setMovie] = useState(null);
  const [rating, setRating] = useState(0);
  const [watched, setWatched] = useState(false);
  const [liked, setLiked] = useState(false);
  const [add, setAdd] = useState(false); // 'add' state for the movie list
  const [openModal, setOpenModal] = useState(false);

  // Fetch user profile if not logged in
  useEffect(() => {
    if (!isLoggedIn) {
      dispatch(fetchUserProfile());
    }
  }, [dispatch, isLoggedIn]);

  //Get Movie Details
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

  // Get movie data associated with the user
  useEffect(() => {
    const fetchAddedDetails = async () => {
      try {
        const response = await axios.get("/user/getAddedDetails", {
          params: { movieId: id, userEmail: userProfile?.email },
        });

        const movieData = response.data.movie;
        console.log("Movie data:", movieData);
        if (movieData) {
          setRating(movieData.stars || 0);
          setLiked(movieData.liked || false);
          setAdd(movieData.watchlisted || false); // Set the 'add' status
          setWatched(movieData.watched || false);
        }
      } catch (error) {
        console.error("Error fetching user movie details:", error);
      }
    };

    if (id && userProfile?.email) {
      fetchAddedDetails();
    }
  }, [id, userProfile?.email]);

  // Update Movie in User's List when state changes
  useEffect(() => {
    const updateUserData = async () => {
      try {
        console.log("Updating user data:", { watched, liked, add, rating });
        if (!userProfile?.email || !movie?.title) return;

        await axios.post("/user/addMovieToUser", {
          movieId: id,
          title: movie.title, // Ensure title is included
          userEmail: userProfile.email,
          stars: rating,
          liked: liked,
          watchlisted: add, // Ensure 'add' is passed
          watched: watched,
        });

        console.log("Updated user movie data:", {
          watched,
          liked,
          add,
          rating,
        });
      } catch (error) {
        console.error("Error updating user data:", error);
      }
    };

    if (isLoggedIn && userProfile?.email && movie) {
      updateUserData();
    }
  }, [watched, liked, add, rating]);

  const handleAddButtonClick = () => {
    setAdd((prev) => !prev); // Toggle the 'add' state (add/remove movie from watchlist)
  };

  if (!movie) return <div>Loading...</div>;

  return (
    <>
      <Navbar />
      <div className="xl:px-40 md:px-10 bg-black min-h-screen w-full overflow-hidden flex flex-col text-white">
        <img
          className="w-[100vw] sm:hidden h-[30vh] sm:h-[60vh] object-cover object-center sm:rounded-xl"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="flex sm:mt-20 w-full flex-col">
          <div className="flex flex-col lg:flex-row">
            <PhoneTitle
              movie={movie}
              isLoggedIn={isLoggedIn}
              setWatched={setWatched}
              setLiked={setLiked}
              setAdd={setAdd}
              watched={watched}
              liked={liked}
              add={add}
              rating={rating}
              openModal={openModal}
              setRating={setRating}
              setOpenModal={setOpenModal}
            />

            <div className="flex flex-col my-5 flex-wrap w-[100%]">
              <LaptopTitle movie={movie} />
              <p className="mx-2 sm:mt-5 sm:mx-0">{movie.overview}</p>
              <Details movie={movie} />
            </div>

            {isLoggedIn ? (
              <Log
                setWatched={setWatched}
                setLiked={setLiked}
                setAdd={setAdd}
                add={add}
                liked={liked}
                watched={watched}
                rating={rating}
                setRating={setRating}
              />
            ) : (
              <LoginButton />
            )}
            {/* Add Button */}
            <button onClick={handleAddButtonClick}>
              {add ? "Remove from Watchlist" : "Add to Watchlist"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;
