import React from "react";
import LandingPage from "./Pages/LandingPage/LandingPage";
import axios from "axios";
axios.defaults.baseURL = "https://philmyshitt-backend.vercel.app/";
axios.defaults.withCredentials = true;
const App = () => {
  return (
    <>
      <LandingPage />
    </>
  );
};

export default App;
