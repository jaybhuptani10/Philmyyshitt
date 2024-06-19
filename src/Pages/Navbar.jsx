import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUserProfile } from "../store/Slice";
import { useDispatch, useSelector } from "react-redux";

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

  return user ? (
    <div className="fixed w-full flex items-center gap-10 justify-center bg-transparent h-[10vh] ">
      <h1 className="text-white uppercase text-xl tracking-tight cursor-pointer ">
        PhilmyySHitt
      </h1>
      {/* Other elements */}
      <div className="hidden md:flex gap-10 items-center">
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
    </div>
  ) : (
    <div className="fixed w-full flex items-center gap-10 justify-center bg-transparent h-[10vh] ">
      <h1 className="text-white uppercase text-xl tracking-tight cursor-pointer ">
        PhilmyySHitt
      </h1>
      {/* Other elements */}
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
    </div>
  );
};

export default Navbar;
