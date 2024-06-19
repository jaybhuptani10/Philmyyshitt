import axios from "axios";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/Slice";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const notify = (msg, type = "info") => {
    toast[type](msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleLoginSubmit = async (ev) => {
    ev.preventDefault();

    if (!email || !password) {
      notify("Please fill in all fields", "warn");
      return;
    }

    try {
      const userInfo = await axios.post("/user/login", {
        email,
        password,
      });

      notify("Login successful!", "success");
      // Dispatch login state action
      dispatch(setUser({ user: userInfo.data, isLoggedIn: true }));

      // Wait for 1 second before redirecting
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (e) {
      notify(
        "Login failed. Please check your credentials and try again.",
        "error"
      );
      console.error(e);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen p-2">
      <h1 className="text-6xl text-center mb-4 text-white">LOGIN</h1>
      <form action="" className="max-w-xl mx-auto" onSubmit={handleLoginSubmit}>
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
          className="mb-2 p-2 w-full rounded"
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
          className="mb-2 p-2 w-full rounded"
        />
        <button
          type="submit"
          className="bg-[#F5385D] p-2 w-full text-white rounded-2xl"
        >
          Login
        </button>
        <div className="text-center py-2 text-gray-100">
          Don't have an account?{" "}
          <Link className="underline text-white" to={"/register"}>
            Register Now
          </Link>{" "}
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
