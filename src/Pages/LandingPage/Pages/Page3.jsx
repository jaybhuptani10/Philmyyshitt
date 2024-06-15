import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "tailwindcss/tailwind.css";
import Carousel from "./Carousel";

const Page3 = () => {
  const [popResult, setpopResult] = useState([]);
  const [playingResult, setPlayingResult] = useState([]);

  useEffect(() => {
    axios
      .get("/api/fetch", {
        params: { movie: "popular" },
      })
      .then((res) => {
        setpopResult(res.data.results);
        console.log("Data fetched successfully:", res.data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array to run only once on mount
  useEffect(() => {
    axios
      .get("/api/fetch", {
        params: { movie: "top_rated" },
      })
      .then((res) => {
        setPlayingResult(res.data.results);
        console.log("Data fetched successfully:", res.data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <h1 className="sm:text-3xl text-white py-5 sm:py-10">Popular Movies</h1>
      <Carousel result={popResult} />
      <h1 className="sm:text-3xl text-white py-5 sm:py-10">Top Rated Movies</h1>
      <Carousel result={playingResult} />
    </>
  );
};

export default Page3;
