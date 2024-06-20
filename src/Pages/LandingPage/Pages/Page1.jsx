import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../style.css";
const Page1 = () => {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);
  async function logout() {
    await axios.post("/api/users/logout");
    navigate("/Login");
  }
  return (
    <div
      className={`h-[100vh] w-[100%] page-1 ${
        hover ? "bg-hover" : "bg-default"
      } `}
    >
      <div className="h-[15vh] w-[35vw] text-white box uppercase">
        <h1 className="sm:text-5xl text-3xl font-bold text-gray-500">
          Track Your{" "}
          <span className="text-white text-4xl sm:text-6xl">cinema</span> <br />{" "}
          <span className="text-green-500">Like Never Before</span>
        </h1>
      </div>
      <div className="sm:h-[15vh] sm:w-[55vh] box-2 text-white">
        {/* <button onClick={logout} className="primary max-w-sm mt-2">
          Logout
        </button> */}
        {/* <h1 className="sm:text-2xl">Manage every Movie/Show you watch </h1>
        <h1 className="sm:text-2xl">Make Friends </h1>
        <h1 className="sm:text-2xl">Cinephiles Work Place </h1> */}
        <button
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <p className="text-xl font-bold">Get started</p>
        </button>
      </div>
    </div>
  );
};

export default Page1;
