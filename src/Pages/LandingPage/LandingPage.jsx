import React, { useState } from "react";
import "../style.css";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import Navbar from "../Navbar/Navbar";

const LandingPage = () => {
  return (
    <div
      className={`w-full bg-fixed min-h-screen  flex flex-col items-center 
      }`}
    >
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-full inset-0  [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] "></div>
      </div>

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
