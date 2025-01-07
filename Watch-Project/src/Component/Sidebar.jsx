import React, { useState } from "react";
import { RiMenu2Line, RiAdminFill } from "react-icons/ri";
import { NavLink, useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { collectionTypes } from "../data/collectiondata";
import { IoCloseCircleSharp } from "react-icons/io5";

const Sidebar = ({ toggleSidebar, isOpen, toggleLogin}) => {
  const [activeTab, setActiveTab] = useState("menu");
  const [collopen, setCollOpen] = useState(false);
  const [aboutopen, setAboutOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState({});
  const navigate = useNavigate();

  // Common function for navigation and closing the sidebar
  const handleNavClick = (path) => {
    toggleSidebar(); // Close Sidebar
    navigate(path);  // Navigate to the path
  };

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
        {/* Menu or Login */}
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
            onClick={() => {
              setActiveTab("login")
              toggleLogin();
            }}
            
          >
            <RiAdminFill />
            <span>Login</span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-4 p-4 text-xl font-navfont text-gray-800">
          <div
            onClick={() => handleNavClick("/")}
            className="cursor-pointer"
          >
            Home
          </div>

          {/* Collections */}
          <div>
            <div
              className="flex items-center justify-between cursor-pointer"
            >
              <div className="w-full flex items-center justify-between">
                <span onClick={() => handleNavClick("/collections")}>Collection</span>
                
                <span className={` ${collopen && "rotate-90"}`}>
                  <IoIosArrowForward onClick={() => setCollOpen(!collopen)} />
                </span>
              </div>
            </div>

            <div className={`${collopen ? "block" : "hidden"}`}>
              {collectionTypes &&
                Object.entries(collectionTypes).map(([category, items]) => (
                  <div key={category}>
                    <div className="">
                      <h3
                        className="flex items-center justify-between font-medium mt-4 pl-2 mb-2 hover:text-primary duration-500 cursor-pointer bg-secondary border border-black rounded-sm shadow-md hover:shadow-lg"
                        onClick={() => toggleCategory(category)} // Toggle the specific category
                      >
                        {category}
                        <span
                          className={`${
                            categoryOpen[category] && "rotate-90"
                          }`}
                        >
                          <IoIosArrowForward />
                        </span>
                      </h3>
                    </div>
                    <ul
                      className={`${
                        categoryOpen[category]
                          ? "flex flex-col gap-1"
                          : "hidden"
                      }`}
                    >
                      {items.map((item, index) => (
                        <li
                          key={index}
                          className="cursor-pointer  ml-3 font-light text-gray-600 hover:text-gray-800 hover:scale-x-105 duration-500 ease-in-out "
                          onClick={() => handleNavClick(`/collection/${item}`)}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          </div>

          <div
            onClick={() => handleNavClick("/giftcards")}
            className="cursor-pointer"
          >
            GiftCards
          </div>

          <div
            onClick={() => handleNavClick("/wholesale")}
            className="cursor-pointer"
          >
            Wholesale
          </div>

          {/* About us */}
          <div>
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => handleNavClick("/aboutus")}
            >
              AboutUs
              <span
                className={` ${aboutopen && "rotate-90"}`}
                onClick={() => setAboutOpen(!aboutopen)}
              >
                <IoIosArrowForward />
              </span>
            </div>
            <div
              className={`flex-col gap-2 mt-4 cursor-pointer font-light text-gray-600 ${
                aboutopen ? "flex" : "hidden"
              }`}
            >
              <div onClick={() => handleNavClick("/aboutus/artist")}>
                Meet The Artist
              </div>
              <div onClick={() => handleNavClick("/aboutus/faqs")}>FAQs</div>
              <div onClick={() => handleNavClick("/aboutus/contact")}>
                Contact Us
              </div>
            </div>
          </div>
        </div>

        {/* Close button */}
        
      </div>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleSidebar}>
        {/* Close Icon Positioned on Top */}
        {/* <div
          className="absolute top-0 right-[67px] z-50 text-md text-primary bg-secondary p-[2px] rounded-md shadow-2xl cursor-pointer"
          onClick={toggleSidebar}
        >
          <IoCloseCircleSharp />
        </div> */}
      </div>
      
      )}
    </>
  );
};

export default Sidebar;
