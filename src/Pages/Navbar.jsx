import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="fixed w-full flex items-center gap-10 justify-center bg-transparent h-[10vh] ">
      <h1 className="text-white uppercase text-xl tracking-tight cursor-pointer ">
        PhilmyySHitt
      </h1>

      {/* Hamburger Icon for mobile */}
      <div className="md:hidden absolute top-4 right-4 text-white">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <svg viewBox="0 0 700 1000" fill="currentColor" className="h-6 w-6 ">
            <path d="M650 450c14.667 0 26.667 5 36 15 9.333 10 14 21.667 14 35 0 13.333-5 25-15 35s-21.667 15-35 15H50c-13.333 0-25-5-35-15S0 513.333 0 500c0-13.333 4.667-25 14-35s21.333-15 36-15h600M50 350c-13.333 0-25-5-35-15S0 313.333 0 300c0-13.333 4.667-25 14-35s21.333-15 36-15h600c14.667 0 26.667 5 36 15 9.333 10 14 21.667 14 35 0 13.333-5 25-15 35s-21.667 15-35 15H50m600 300c14.667 0 26.667 5 36 15 9.333 10 14 21.667 14 35 0 13.333-5 25-15 35s-21.667 15-35 15H50c-13.333 0-25-5-35-15S0 713.333 0 700c0-13.333 4.667-25 14-35s21.333-15 36-15h600" />
          </svg>
        </button>
      </div>

      {/* Navigation links */}
      <div className="hidden md:flex gap-10 items-center">
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
        <div className="relative flex items-center">
          <input
            className="h-10 w-[13vw] pl-10 pr-3 py-2 rounded-full"
            placeholder="Search..."
          />
          <svg
            className="absolute right-2 h-5 w-5 text-gray-500 cursor-pointer hover:text-gray-700"
            viewBox="0 0 1024 1024"
            fill="currentColor"
          >
            <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" />
          </svg>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-75 z-50 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:hidden`}
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
            className="text-white uppercase text-xl tracking-tight cursor-pointer hover:text-gray-400"
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
          <div className="relative flex items-center w-full px-4">
            <input
              className="h-10 w-full pl-10 pr-3 py-2 rounded-full"
              placeholder="Search..."
            />
            <svg
              className="absolute right-4 h-5 w-5 cursor-pointer "
              viewBox="0 0 1024 1024"
              fill="currentColor"
            >
              <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
