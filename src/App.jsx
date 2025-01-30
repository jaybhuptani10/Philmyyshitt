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
import { fetchUserProfile } from "./store/Slice";
import axios from "axios";
import { setUser } from "./store/Slice";

// Set axios defaults
axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.withCredentials = true;

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (token) {
      axios
        .get("/user/validate-token", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          const { user } = response.data;

          console.log(user);
          dispatch(setUser({ user, isLoggedIn: true }));
        });
    }
  }, [dispatch]);

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
