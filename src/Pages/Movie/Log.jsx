import React, { useEffect, useState } from "react";
import Stars from "../components/Stars";

const Log = ({
  setWatched,
  watched,
  setLiked,
  liked,
  setAdd,
  add,
  rating,
  setRating,
}) => {
  useEffect(() => {
    if (watched) {
      setAdd(false);
    }
  }, [watched, setAdd]);

  return (
    <div className="m-5  hidden sm:my-10 w-[40vw] h-[30vh]  sm:flex flex-col  justify-center gap-1 ">
      <div className="flex  gap-5 items-center bg-[#5b6875] w-[100%]  p-2 text-center rounded-md duration-500 transition-all justify-center   h-24">
        <h1 className="text-xs gap-2 flex flex-col justify-center items-center uppercase font-bold cursor-pointer hover:text-white text-[#C8C8C8]">
          {" "}
          <svg
            onClick={() => {
              setWatched(!watched);
            }}
            viewBox="0 0 1024 1024"
            className={`w-10 duration-200 transition-all h-10 cursor-pointer ${
              watched ? "text-[#80ED99]" : "text-white"
            } `}
            fill="currentColor"
          >
            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8v48z" />
          </svg>
          Watched
        </h1>
        <h1 className="text-xs flex  gap-2 flex-col justify-center items-center uppercase font-bold cursor-pointer hover:text-white text-[#C8C8C8]">
          {" "}
          <svg
            onClick={() => setLiked(!liked)}
            viewBox="0 0 1024 1024"
            className={`w-10 duration-200 transition-all h-10 cursor-pointer ${
              liked ? "text-[#FE7F2D]" : ""
            } `}
            fill="currentColor"
          >
            <path d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z" />
          </svg>
          Like
        </h1>
        <h1 className="text-xs gap-2 flex flex-col justify-center items-center uppercase font-bold cursor-pointer hover:text-white text-[#C8C8C8]">
          {" "}
          <svg
            onClick={() => setAdd(!add)}
            viewBox="0 0 24 24"
            className={`w-10 duration-200 transition-all h-10 cursor-pointer ${
              add ? "text-blue-400" : ""
            } `}
            fill="currentColor"
          >
            <path d="M18.5 2h-12C4.57 2 3 3.57 3 5.5V22l7-3.5 7 3.5v-9h5V5.5C22 3.57 20.43 2 18.5 2zM13 11h-2v2H9v-2H7V9h2V7h2v2h2v2zm7 0h-3V5.5c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5V11z" />
          </svg>
          Watchlist
        </h1>
      </div>

      <Stars rating={rating} setRating={setRating} />
      <h1 className="bg-[#5b6875] w-[100%]  p-2 text-center rounded-md duration-500 transition-all cursor-pointer hover:scale-110">
        Review or Log
      </h1>
      <h1 className="bg-[#5b6875] w-[100%]  p-2 text-center rounded-md duration-500 transition-all cursor-pointer hover:scale-110">
        Add this to your list
      </h1>
      <h1 className="bg-[#5b6875] w-[100%]  p-2 text-center rounded-md duration-500 transition-all cursor-pointer hover:scale-110">
        Share this Page
      </h1>
    </div>
  );
};

export default Log;
