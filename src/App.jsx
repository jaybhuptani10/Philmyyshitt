import React from "react";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Movie from "./Pages/Movie";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// axios.defaults.baseURL = "https://philmyshitt-backend.vercel.app/";
axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.withCredentials = true;
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/movie/:id" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
