import React, { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { FaCartArrowDown, FaLeaf } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { RiAdminFill } from "react-icons/ri";
import logo from "../assets/logo_watchcraft.webp";
import Sidebar from "./Sidebar";
import { NavLink } from "react-router-dom";
import AboutsOption from "../Navigation/AboutsOption";
import CollectionOption from "../Navigation/CollectionOption";
import Login from "./Login";
import SearchModal from "./SearchModel";
import OfferLine from "./OfferLine";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  const toggleSearchModal = () => {
    setSearchIsOpen((prev) => !prev);
  };

    const offers = [
      "Holiday Sale - 35% OFF Apple Brand 🎉🔥",
      "Exclusive Deal - Buy 1 Get 1 Free on All Accessories 🎁✨",
      "Flash Sale - Upto 50% OFF on Electronics ⚡💥",
    ];
  
    const [currentOfferIndex, setCurrentOfferIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentOfferIndex((prevIndex) => (prevIndex + 1) % offers.length);
      }, 2000); // 5 seconds
  
      return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [offers.length]);

  return (
    <>
      <div className="p-2 flex items-center justify-between bg-primary">
        <div className="flex items-center flex-row-reverse justify-between w-[55%] lg:w-auto">
          <img className="h-10 sm:h-12 md:h-16" src={logo} alt="Brand logo" />

          <div className="flex lg:hidden items-center justify-center  h-5 w-5 p-5 md:h-6 md:w-6 md:p-5 hover:bg-secondary duration-500 ease-out shadow-md rounded-full bg-white">
            <span>
              <BiMenu
                onClick={toggleSidebar}
                className="hover:opacity-55 duration-1000 cursor-pointer text-2xl"
              />
            </span>
          </div>
        </div>

        <div
          className={`relative hidden lg:flex items-center justify-between gap-6 uppercase font-font2 text-xl text-gray-800`}
        >
          {/* Home */}
          <NavLink
            to={"/"}
            className="relative group cursor-pointer text-textcolor hover:text-secondary "
          >
            Home
            <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover:w-full"></div>
          </NavLink>

          {/* Collectionsitems  */}
          <CollectionOption />

          {/* Gift Cards */}
          <NavLink
            to={"/giftcards"}
            className="relative group cursor-pointer text-textcolor hover:text-secondary "
          >
            Gift Cards
            <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover:w-full"></div>
          </NavLink>

          {/* Wholesale */}
          <NavLink
            to={"/wholesale"}
            className="relative group cursor-pointer text-textcolor hover:text-secondary "
          >
            Wholesale
            <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover:w-full"></div>
          </NavLink>

          {/*About us*/}
          <AboutsOption />
        </div>

        <div className="flex items-center justify-between gap-4 sm:gap-6 md:gap-8">
        <div onClick={toggleSearchModal} className="h-5 w-5 p-5 md:h-6 md:w-6 md:p-5 flex items-center justify-center hover:bg-secondary duration-500 ease-out shadow-md rounded-full bg-white">
            <span>
              <IoSearch className="duration-1000 cursor-pointer text-xl md:text-2xl" />
            </span>
          </div>
          <div
            onClick={toggleLogin}
            className="h-5 w-5 p-5 md:h-6 md:w-6 md:p-5 items-center justify-center hover:bg-secondary duration-500 ease-out shadow-md rounded-full bg-white hidden md:flex"
          >
            <span>
              <RiAdminFill className="duration-1000 cursor-pointer text-xl md:text-2xl" />
            </span>
          </div>

          <NavLink
            to={"/cart"}
            className="relative h-5 w-5 p-5 md:h-6 md:w-6 md:p-5 flex items-center justify-center hover:bg-secondary duration-500 ease-out shadow-md rounded-full bg-white"
          >
            <span>
              <FaCartArrowDown className="duration-1000 cursor-pointer text-xl md:text-2xl" />
            </span>
            <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs sm:text-sm rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center">
              1
            </div>
          </NavLink>
        </div>
      </div>

      {/* Sidebar */}
      <Sidebar
        toggleSidebar={toggleSidebar}
        isOpen={isOpen}
        toggleLogin={toggleLogin}
      />

      {/* Offer line */}
      <OfferLine />

      {showLogin && <Login toggleLogin={toggleLogin} />}


      <SearchModal
              isOpen={searchIsOpen}
              toggleModal={toggleSearchModal}
            />
    </>
  );
};

export default Navbar;
