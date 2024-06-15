import React from "react";
import LandingPage from "./Pages/LandingPage/LandingPage";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;
const App = () => {
  return (
    <>
      <LandingPage />
    </>
  );
};

export default App;
