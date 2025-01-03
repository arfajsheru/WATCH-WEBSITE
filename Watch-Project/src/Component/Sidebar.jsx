import React, { useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { RiAdminFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { collectionTypes } from "../data/collectiondata";
const Sidebar = ({ toggleSidebar, isOpen }) => {
  const [activeTab, setActiveTab] = useState("menu");
  const [collopen, setCollOpen] = useState(false);
  const [aboutopen, setAboutOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState({});

  const toggleCategory = (category) => {
    setCategoryOpen((prevState) => ({
      ...prevState,
      [category]: !prevState[category], // Toggle the specific category
    }));
  };
  return (
    <>
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-lg transform overflow-y-scroll ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Menu or login */}
        <div className="flex items-center justify-between w-full border-b border-black font-navfont">
          <div
            className={`h-10 w-[50%] flex items-center justify-center gap-2 text-xl cursor-pointer ${
              activeTab === "menu"
                ? " bg-secondary text-white"
                : "bg-white text-black"
            }`}
            onClick={() => setActiveTab("menu")}
          >
            <RiMenu2Line />
            <span>Menu</span>
          </div>
          <div
            className={`h-10 w-[50%] flex items-center justify-center gap-2 text-xl cursor-pointer ${
              activeTab === "login"
                ? "bg-secondary text-white"
                : "bg-white text-black"
            }`}
            onClick={() => setActiveTab("login")}
          >
            <RiAdminFill />
            <span>Login</span>
          </div>
        </div>

        {/* Navigation link */}
        <div className="flex flex-col gap-4 p-4 text-xl font-navfont text-gray-800">
          <NavLink className="">Home</NavLink>

          {/* Collections */}
          <div>
            <NavLink className="flex items-center justify-between">
              <div className="w-full flex items-center justify-between">
                Collection
                <span className={` ${collopen && "rotate-90"}`}>
                  <IoIosArrowForward onClick={() => setCollOpen(!collopen)} />
                </span>
              </div>
            </NavLink>
            <div className={`${collopen ? "block" : "hidden"}`}>
              {collectionTypes &&
                Object.entries(collectionTypes).map(([category, items]) => (
                  <div key={category}>
                    {/* Har category ko ek unique key dena */}
                    <div className="">
                      <h3
                        className="flex items-center justify-between font-medium mt-4 pl-2 mb-2 hover:text-primary duration-500 cursor-pointer bg-secondary border border-black rounded-sm shadow-md hover:shadow-lg"
                        onClick={() => toggleCategory(category)} // Toggle the specific category
                      >
                        {category}
                        <span
                          className={`${categoryOpen[category] && "rotate-90"}`}
                        >
                          <IoIosArrowForward />
                        </span>
                      </h3>
                    </div>
                    {/* Category ka naam */}
                    <ul
                      className={`${
                        categoryOpen[category]
                          ? "flex flex-col gap-1"
                          : "hidden"
                      }`}
                    >
                      {/* Items ko list ke form mein display karo */}
                      {items.map((item, index) => (
                        <li
                          className="cursor-pointer  ml-3 font-light text-gray-600 hover:text-gray-800 hover:scale-x-105 duration-500 ease-in-out "
                          key={index}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          </div>

          <NavLink className="">GiftCards</NavLink>
          <NavLink className="">Wholesale</NavLink>

          {/* About us */}
          <div>
            <NavLink className="flex items-center justify-between">AboutUs
            <span className={` ${collopen && "rotate-90"}`}>
                  <IoIosArrowForward onClick={() => setAboutOpen(!aboutopen)} />
                </span>
            </NavLink>
            <div className={`flex-col gap-2 mt-4 cursor-pointer font-light text-gray-600 ${aboutopen ? "flex": "hidden"}`}>
                <div>Meet The Artist</div>
                <div>FAQs</div>
                <div>Contact Us</div>
            </div>
          </div>
        </div>

        {/* Close button */}
        <span
          className="text-gray-800 text-lg cursor-pointer"
          onClick={toggleSidebar}
        >
          Close
        </span>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
