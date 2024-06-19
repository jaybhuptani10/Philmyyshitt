import React, { useState } from "react";
import "../style.css";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import Navbar from "../Navbar/Navbar";

const LandingPage = () => {
  return (
    <div
      className={`w-full min-h-screen flex flex-col items-center 
      }`}
    >
      <Navbar />
      <Page1 />
      <div className=" h-[80vh]  sm:h-[70vh] w-[100%] px-5 sm:px-20 page-2">
        <Page2 />
      </div>
      <div className="h-[100vh] w-[100%] px-5 sm:px-20 page-2">
        <Page3 />
      </div>
    </div>
  );
};

export default LandingPage;
