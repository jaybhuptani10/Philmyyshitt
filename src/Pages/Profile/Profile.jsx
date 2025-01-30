import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile } from "../../store/Slice";
import axios from "axios";

const Profile = () => {
  const user = useSelector((state) => state.user.user);
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const [userDetails, setUserDetails] = useState({});
  const [userId, setUserId] = useState("");
  const [likedList, setLikedList] = useState([]);
  const [watchedList, setWatchedList] = useState([]);
  const [watchList, setWatchList] = useState([]);
  const userProfileFromStore = useSelector((state) => state.user.user);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      fetchUserProfile();
    }
    if (isLoggedIn && userProfileFromStore) {
      const fetchMovieDetailsfromUser = async () => {
        try {
          const response = await axios.get("/user/profile", {
            withCredentials: true,
          });
          setUserDetails(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      if (isLoggedIn) {
        fetchMovieDetailsfromUser();
      }
      setUsername(user?.name);
      setUserId(userProfileFromStore._id);
      setLikedList(userProfileFromStore.likedList);
      setWatchedList(userProfileFromStore.watchedList);
      setWatchList(userProfileFromStore.watchList);
    }
  }, [isLoggedIn, user, userProfileFromStore]);
  console.log(userDetails);
  const movieslen = watchedList.length;
  console.log(movieslen);

  useEffect(() => {
    if (!isLoggedIn) {
      dispatch(fetchUserProfile());
    }
  }, [dispatch, isLoggedIn]);

  const [Movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("/api/allMovies", {
          params: { userId: userId },
        });
        setMovies(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (userId) {
      fetchMovies();
    }
  }, [userId]);

  console.log(Movies);

  return (
    <div>
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-full inset-0 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>
      <Navbar />
      <div className="flex flex-col gap-10 items-center min-w-full overflow-hidden min-h-screen py-32 sm:px-72">
        <div className="flex flex-col sm:flex-row gap-10 w-full justify-center items-center">
          <div className="flex w-full px-5 sm:w-1/2 gap-10 items-center">
            <div className="h-24 w-24 rounded-full bg-white"></div>
            <h1 className="text-white w-20 sm:text-3xl uppercase font-bold">
              {username}
            </h1>
            <div className="h-7 w-32 rounded-sm flex items-center justify-center font-semibold text-white bg-gray-500">
              Edit Profile
            </div>
            <svg
              viewBox="0 0 21 21"
              fill="currentColor"
              className="h-6 w-6 cursor-pointer text-white"
            >
              <g fill="none" fillRule="evenodd" transform="translate(2 2)">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 8.5 A8 8 0 0 1 8.5 16.5 A8 8 0 0 1 0.5 8.5 A8 8 0 0 1 16.5 8.5 z"
                />
                <path
                  fill="currentColor"
                  d="M8.5 9.5c.5 0 1-.5 1-1s-.5-1-1-1-.999.5-.999 1 .499 1 .999 1zm-4 0c.5 0 1-.5 1-1s-.5-1-1-1-.999.5-.999 1 .499 1 .999 1zm8 0c.5 0 1-.5 1-1s-.5-1-1-1-.999.5-.999 1 .499 1 .999 1z"
                />
              </g>
            </svg>
          </div>

          <div className="sm:w-1/2 w-full gap-5 items-center text-orange-400 flex">
            <div className="flex w-full flex-col gap-2 items-center">
              <h1 className="text-[8px] sm:text-[10px] uppercase font-bold">
                FILMS
              </h1>
              <h1 className="text-sm sm:text-xl font-extrabold">{movieslen}</h1>
            </div>
            <div className="h-20 w-0.5 bg-red-700"></div>

            <div className="flex w-10 flex-col gap-2 items-center">
              <h1 className="text-[8px] sm:text-[10px] uppercase font-bold">
                Series
              </h1>
              <h1 className="text-sm sm:text-xl font-extrabold">100</h1>
            </div>
            <div className="h-20 w-0.5 bg-red-700"></div>
            <div className="flex whitespace-nowrap flex-col gap-2 items-center">
              <h1 className="text-[8px] sm:text-[10px] uppercase font-bold">
                This Year
              </h1>
              <h1 className="text-sm sm:text-xl font-extrabold">10</h1>
            </div>
            <div className="h-20 w-0.5 bg-red-700"></div>
            <div className="flex flex-col gap-2 items-center">
              <h1 className="text-[8px] sm:text-[10px] uppercase font-bold">
                Following
              </h1>
              <h1 className="text-sm sm:text-xl font-extrabold">2</h1>
            </div>
            <div className="h-20 w-0.5 bg-red-700"></div>
            <div className="flex flex-col gap-2 items-center">
              <h1 className="text-[8px] sm:text-[10px] uppercase font-bold">
                Followers
              </h1>
              <h1 className="text-sm sm:text-xl font-extrabold">1</h1>
            </div>
            <div className="h-20 w-0.5 bg-red-700"></div>
          </div>
        </div>
        <div className="w-full flex items-center gap-10 justify-center border-gray-700 p-2 border">
          <h1 className="text-xs sm:text-l text-gray-500 hover:text-blue-500 transition-all duration-150 font-semibold cursor-pointer">
            Profile
          </h1>
          <h1 className="text-xs sm:text-l text-l text-gray-500 hover:text-blue-500 transition-all duration-150 font-semibold cursor-pointer">
            Films
          </h1>
          <h1 className="text-xs sm:text-l text-l text-gray-500 hover:text-blue-500 transition-all duration-150 font-semibold cursor-pointer">
            Diary
          </h1>
          <h1 className="text-xs sm:text-l text-l text-gray-500 hover:text-blue-500 transition-all duration-150 font-semibold cursor-pointer">
            Watchlist
          </h1>
          <h1 className="text-xs sm:text-l text-l text-gray-500 hover:text-blue-500 transition-all duration-150 font-semibold cursor-pointer">
            Reviews
          </h1>
          <h1 className="text-xs sm:text-l text-l text-gray-500 hover:text-blue-500 transition-all duration-150 font-semibold cursor-pointer">
            Lists
          </h1>
          <h1 className="text-xs sm:text-l text-l text-gray-500 hover:text-blue-500 transition-all duration-150 font-semibold cursor-pointer">
            Network
          </h1>
        </div>
        <div className="w-full gap-2 flex">
          <div className="w-2/3">
            <div className="w-full flex flex-col my-10">
              <div className="flex flex-col">
                <h1 className="text-white">Favourite Films</h1>
                <div className="h-[0.5px] w-full bg-white"></div>
                <div className="flex gap-2 mt-2">
                  <div className="h-56 w-1/4 rounded-lg border-gray-300 border"></div>
                  <div className="h-56 w-1/4 rounded-lg border-gray-300 border"></div>
                  <div className="h-56 w-1/4 rounded-lg border-gray-300 border"></div>
                  <div className="h-56 w-[25%] rounded-lg border-gray-300 border"></div>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col my-10">
              <div className="flex flex-col">
                <h1 className="text-white">Recent Movies</h1>
                <div className="h-[0.5px] w-full bg-white"></div>
                <div className="flex gap-2 mt-2">
                  <div className="h-56 w-1/4 rounded-lg border-gray-300 border"></div>
                  <div className="h-56 w-1/4 rounded-lg border-gray-300 border"></div>
                  <div className="h-56 w-1/4 rounded-lg border-gray-300 border"></div>
                  <div className="h-56 w-[25%] rounded-lg border-gray-300 border"></div>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col my-10">
              <div className="flex flex-col">
                <h1 className="text-white">Recent Series</h1>
                <div className="h-[0.5px] w-full bg-white"></div>
                <div className="flex gap-2 mt-2">
                  <div className="h-56 w-1/4 rounded-lg border-gray-300 border"></div>
                  <div className="h-56 w-1/4 rounded-lg border-gray-300 border"></div>
                  <div className="h-56 w-1/4 rounded-lg border-gray-300 border"></div>
                  <div className="h-56 w-[25%] rounded-lg border-gray-300 border"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/3 px-24">
            <div className="w-64 h-32 my-32">
              <h1 className="text-white uppercase">Watchlist</h1>
              <div className="h-[0.5px] w-full bg-white mb-2"></div>
              <div className="h-full w-full flex flex-nowrap border border-gray-600">
                <div className="h-full w-20 bg-red-600"></div>
                <div className="h-full w-20 bg-red-200"></div>
                <div className="h-full w-20 bg-blue-600"></div>
                <div className="h-full w-20 bg-green-600"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
