import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUserProfile } from "../../store/Slice";
import { useDispatch, useSelector } from "react-redux";
import Search from "./Search";

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const status = useSelector((state) => state.user.status);
  const error = useSelector((state) => state.user.error);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchUserProfile());
    }
  }, [isLoggedIn, dispatch]);

  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return isLoggedIn ? (
    <div className="fixed w-full z-50 bg-transparent h-[10vh] flex items-center justify-center md:portrait:hidden sm:gap-10 nav ">
      <h1
        onClick={() => navigate("/")}
        className="text-white uppercase text-xl tracking-tight cursor-pointer z-50"
      >
        PhilmyySHitt
      </h1>

      {/* Hamburger Icon for mobile */}
      <div className="xl:hidden absolute top-4 right-4 text-white z-50">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <svg viewBox="0 0 700 1000" fill="currentColor" className="h-6 w-6">
            <path d="M650 450c14.667 0 26.667 5 36 15 9.333 10 14 21.667 14 35 0 13.333-5 25-15 35s-21.667 15-35 15H50c-13.333 0-25-5-35-15S0 513.333 0 500c0-13.333 4.667-25 14-35s21.333-15 36-15h600M50 350c-13.333 0-25-5-35-15S0 313.333 0 300c0-13.333 4.667-25 14-35s21.333-15 36-15h600c14.667 0 26.667 5 36 15 9.333 10 14 21.667 14 35 0 13.333-5 25-15 35s-21.667 15-35 15H50m600 300c14.667 0 26.667 5 36 15 9.333 10 14 21.667 14 35 0 13.333-5 25-15 35s-21.667 15-35 15H50c-13.333 0-25-5-35-15S0 713.333 0 700c0-13.333 4.667-25 14-35s21.333-15 36-15h600" />
          </svg>
        </button>
      </div>

      {/* Navigation links */}
      <div className="hidden xl:flex gap-10 items-center z-50">
        <h1
          onClick={() => navigate("/login")}
          className="text-white uppercase text-l tracking-tight cursor-pointer hover:text-gray-400"
        >
          Profile
        </h1>

        <h1 className="text-white uppercase text-l tracking-tight cursor-pointer hover:text-gray-400">
          Cinema
        </h1>
        <h1 className="text-white uppercase text-l tracking-tight cursor-pointer hover:text-gray-400">
          Members
        </h1>
        <h1 className="text-white uppercase text-l tracking-tight cursor-pointer hover:text-gray-400">
          For you
        </h1>
        <Search />
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-75 z-50 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 xl:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4 text-white"
          >
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" />
            </svg>
          </button>
          <h1
            onClick={() => {
              navigate("/login");
              setMenuOpen(false);
            }}
            className="text-white uppercase text-xl tracking-tight cursor-pointer z-50 hover:text-gray-400"
          >
            Profile
          </h1>

          <h1 className="text-white uppercase text-xl tracking-tight cursor-pointer hover:text-gray-400">
            Cinema
          </h1>
          <h1 className="text-white uppercase text-xl tracking-tight cursor-pointer hover:text-gray-400">
            Members
          </h1>
          <h1 className="text-white uppercase text-xl tracking-tight cursor-pointer hover:text-gray-400">
            For you
          </h1>
          <Search />
        </div>
      </div>
    </div>
  ) : (
    <div className="fixed w-full z-50 bg-transparent h-[10vh] flex items-center justify-center   gap-10 nav">
      <h1
        onClick={() => navigate("/")}
        className="text-white uppercase text-xl tracking-tight cursor-pointer z-50"
      >
        PhilmyySHitt
      </h1>

      {/* Hamburger Icon for mobile */}
      <div className="xl:hidden absolute top-4 right-4 text-white z-50">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <svg viewBox="0 0 700 1000" fill="currentColor" className="h-6 w-6">
            <path d="M650 450c14.667 0 26.667 5 36 15 9.333 10 14 21.667 14 35 0 13.333-5 25-15 35s-21.667 15-35 15H50c-13.333 0-25-5-35-15S0 513.333 0 500c0-13.333 4.667-25 14-35s21.333-15 36-15h600M50 350c-13.333 0-25-5-35-15S0 313.333 0 300c0-13.333 4.667-25 14-35s21.333-15 36-15h600c14.667 0 26.667 5 36 15 9.333 10 14 21.667 14 35 0 13.333-5 25-15 35s-21.667 15-35 15H50m600 300c14.667 0 26.667 5 36 15 9.333 10 14 21.667 14 35 0 13.333-5 25-15 35s-21.667 15-35 15H50c-13.333 0-25-5-35-15S0 713.333 0 700c0-13.333 4.667-25 14-35s21.333-15 36-15h600" />
          </svg>
        </button>
      </div>

      {/* Navigation links */}
      <div className="hidden xl:flex gap-10 items-center z-50">
        <h1
          onClick={() => navigate("/login")}
          className="text-white uppercase text-l tracking-tight cursor-pointer hover:text-gray-400"
        >
          Sign IN
        </h1>
        <h1
          onClick={() => navigate("/register")}
          className="text-white uppercase text-l tracking-tight cursor-pointer hover:text-gray-400"
        >
          Create Account
        </h1>
        <h1 className="text-white uppercase text-l tracking-tight cursor-pointer hover:text-gray-400">
          Cinema
        </h1>
        <h1 className="text-white uppercase text-l tracking-tight cursor-pointer hover:text-gray-400">
          Members
        </h1>
        <h1 className="text-white uppercase text-l tracking-tight cursor-pointer hover:text-gray-400">
          For you
        </h1>
        <Search />
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-75 z-50 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 xl:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4 text-white"
          >
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" />
            </svg>
          </button>
          <h1
            onClick={() => {
              navigate("/login");
              setMenuOpen(false);
            }}
            className="text-white uppercase text-xl tracking-tight cursor-pointer z-50 hover:text-gray-400"
          >
            Sign IN
          </h1>
          <h1
            onClick={() => {
              navigate("/register");
              setMenuOpen(false);
            }}
            className="text-white uppercase text-xl tracking-tight cursor-pointer hover:text-gray-400"
          >
            Create Account
          </h1>
          <h1 className="text-white uppercase text-xl tracking-tight cursor-pointer hover:text-gray-400">
            Cinema
          </h1>
          <h1 className="text-white uppercase text-xl tracking-tight cursor-pointer hover:text-gray-400">
            Members
          </h1>
          <h1 className="text-white uppercase text-xl tracking-tight cursor-pointer hover:text-gray-400">
            For you
          </h1>
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
