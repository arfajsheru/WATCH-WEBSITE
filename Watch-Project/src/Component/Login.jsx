import React, { useState } from "react";
import logo from "../assets/logo_watchcraft.webp"; // Add your logo file here.
import { IoClose } from "react-icons/io5";

const Login = ({ toggleLogin }) => {
  const [isRegister, setIsRegister] = useState(false);

  const toggleMode = () => {
    setIsRegister((prev) => !prev);
  };

  return (
    <div
      onClick={toggleLogin}
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()} // Prevents the event from bubbling up
        className="relative bg-white w-[90%] md:w-[40%] lg:w-[30%] p-6 rounded-sm shadow-lg flex flex-col items-center animate-open transition-transform duration-500 ease-in-out"
      >
        <div onClick={toggleLogin} className="absolute right-2 top-2 bg-secondary p-1 rounded-full box-shadow cursor-pointer">
          <IoClose className="transform transition-transform duration-300 ease-in-out hover:rotate-90" />
        </div>

        {/* Logo */}
        <img src={logo} alt="Logo" className="h-16 mt-2 mb-3" />

        {/* Message */}
        {!isRegister && (
          <h2 className="text-lg md:text-xl font-bold text-secondary mb-6 text-center font-font4">
            Great to have you back!
          </h2>
        )}

        {/* Form */}
        <form className="w-full flex flex-col gap-2">
          {/* Name Field */}
          {isRegister && (
            <div className="space-y-1">
              <label className="text-sm font-bold font-font3">Your Name</label>
              <input
                type="text"
                className="w-full p-2 border border-secondary focus:ring-1 focus:ring-secondary focus:outline-none"
                placeholder="Enter your name"
              />
            </div>
          )}

          {/* Email Field */}
          <div className="space-y-1">
            <label className="text-sm font-bold font-font3">Your Email</label>
            <input
              type="text"
              className="w-full p-2 border border-secondary focus:ring-1 focus:ring-secondary focus:outline-none"
              placeholder="Enter your Email"
            />
          </div>

          {/* Password Field */}
          <div className="space-y-1">
            <label className="text-sm font-bold font-font3">
              Your Password
            </label>
            <input
              type="password"
              className="w-full p-2 border border-secondary focus:ring-1 focus:ring-secondary focus:outline-none"
              placeholder="Enter your Password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-6 py-2 mt-5 text-center text-sm md:text-sm cursor-pointer uppercase text-white bg-secondary  transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-black"
          >
            {isRegister ? "Register" : "Login"}
          </button>
        </form>

        {/* Toggle Between Login and Register */}
        <div className="w-full mt-6 bg-gray-100 px-6 py-2 border border-gray-300 text-center">
          <p className="text-gray-600">
            {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
            <span
              onClick={toggleMode}
              className="text-secondary font-bold cursor-pointer"
            >
              {isRegister ? "Login" : "Register"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
