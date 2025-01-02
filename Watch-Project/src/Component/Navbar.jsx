import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { FaCartArrowDown } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { RiAdminFill } from "react-icons/ri";
import logo from "../assets/logo_watchcraft.webp";
const Navbar = () => {
  const[isopen, setIsOpen] = useState(false)
  return (
    <div className="p-3 flex items-center justify-between bg-bgcolor">
      <div className="flex items-center flex-row-reverse justify-between w-[55%] lg:w-auto">
        <img className="h-10 sm:h-12 md:h-16" src={logo} alt="Brand logo" />

        <div className="flex lg:hidden items-center justify-center  h-5 w-5 p-5 md:h-6 md:w-6 md:p-5 hover:bg-secondary duration-500 ease-out shadow-md rounded-full bg-white">
          <span>
            <BiMenu className="hover:opacity-55 duration-1000 cursor-pointer text-2xl" />
          </span>
        </div>
      </div>

      <div className={`relative hidden lg:flex items-center justify-between gap-6 uppercase font-navfont text-xl text-gray-800`}>
        <span className="relative group cursor-pointer">
          Home
          <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover:w-full"></div>
        </span>
        <span className="relative group cursor-pointer">
          Collection
          <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover:w-full"></div>
        </span>
        <span className="relative group cursor-pointer">
          Gift Cards
          <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover:w-full"></div>
        </span>
        <span className="relative group cursor-pointer">
          Wholesale
          <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover:w-full"></div>
        </span>
        <span className="relative group cursor-pointer">
          AboutUs
          <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover:w-full"></div>
        </span>
      </div>

      <div className="flex items-center justify-between gap-4 sm:gap-6 md:gap-8">
        <div className="h-5 w-5 p-5 md:h-6 md:w-6 md:p-5 flex items-center justify-center hover:bg-secondary duration-500 ease-out shadow-md rounded-full bg-white">
          <span>
            <IoSearch className="duration-1000 cursor-pointer text-xl md:text-2xl" />
          </span>
        </div>
        <div className="h-5 w-5 p-5 md:h-6 md:w-6 md:p-5 items-center justify-center hover:bg-secondary duration-500 ease-out shadow-md rounded-full bg-white hidden md:flex">
          <span>
            <RiAdminFill className="duration-1000 cursor-pointer text-xl md:text-2xl" />
          </span>
        </div>
        <div className="relative h-5 w-5 p-5 md:h-6 md:w-6 md:p-5 flex items-center justify-center hover:bg-secondary duration-500 ease-out shadow-md rounded-full bg-white">
          <span>
            <FaCartArrowDown className="duration-1000 cursor-pointer text-xl md:text-2xl" />
          </span>
          <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs sm:text-sm rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center">
            9
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
