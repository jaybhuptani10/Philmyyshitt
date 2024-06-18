import React from "react";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Movie from "./Pages/Movie";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Pages/Login/Register";
import LoginPage from "./Pages/Login/Login";
axios.defaults.baseURL = "https://philmyshitt-backend.vercel.app/";
// axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.withCredentials = true;
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
