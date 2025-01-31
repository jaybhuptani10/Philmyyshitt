import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Movie from "./Pages/Movie/Movie";
import Register from "./Pages/Login/Register";
import LoginPage from "./Pages/Login/Login";
import SearchResults from "./Pages/SearchResults";
import Series from "./Pages/Series";
import Profile from "./Pages/Profile/Profile";
import { setUser } from "./store/Slice";
import axios from "axios";

// Set axios defaults
// axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.baseURL = import.meta.env.VITE_baseURL;
// axios.defaults.baseURL = "https://philmyshitt-backend.vercel.app/";
axios.defaults.withCredentials = true;

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    console.log(token);
    console.log("Is logged in: ", isLoggedIn);
    if (token) {
      console.log("Token found in local storage");
      axios
        .get("/user/validateToken", {
          headers: { Authorization: `Bearer ${token}` }, // Send token in Authorization header
        })
        .then((response) => {
          const { user } = response.data;
          dispatch(setUser({ user, isLoggedIn: true }));
        })
        .catch((error) => {
          console.error("Token validation failed", error);
          // Token invalid or expired, log out the user
          localStorage.removeItem("authToken");
          dispatch(setUser({ user: null, isLoggedIn: false }));
        });
    }
  }, [dispatch, isLoggedIn]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/series/:id" element={<Series />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/searchresults" element={<SearchResults />} />
        <Route path="/:username" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
