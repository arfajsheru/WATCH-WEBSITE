import React from "react";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import { FaRegHeart } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaPinterestP } from "react-icons/fa";

import { GiDiscGolfBag } from "react-icons/gi";
import { ImGift } from "react-icons/im";
import { FaHandshake } from "react-icons/fa";
import GiftDescription from "../Component/GiftDescription";

const GiftCards = () => {
  return (
    <>
      <div className="p-10 flex flex-col gap-8 md:mx-44">
        {/* img colume */}
        <div className="flex flex-wrap md:flex-row flex-col items-center justify-center gap-4 ">
          <img
            src={card1}
            className="w-3/4 md:w-1/4 h-auto transition-transform duration-500 hover:scale-105 hover:shadow-lg rounded-lg"
            alt="Gift Card 1"
          />
          <img
            src={card2}
            className="w-3/4 md:w-1/4 h-auto transition-transform duration-500 hover:scale-105 hover:shadow-lg rounded-lg"
            alt="Gift Card 2"
          />
          <img
            src={card3}
            className="w-3/4 md:w-1/4 h-auto transition-transform duration-500 hover:scale-105 hover:shadow-lg rounded-lg"
            alt="Gift Card 3"
          />
        </div>

        {/*Gift Card Added button */}
        <div className="flex flex-col gap-4 sm md:flex-row md:justify-between">
          <div className="w-full flex flex-col justify-between space-y-4 p-5">
            <div className="space-y-1">
              <h1 className="text-xl sm:text-2xl md:text-3xl uppercase font-bold font-font4">
                Gift card
              </h1>
              <span className="text-md  md:text-xl font-medium text-gray-600">
                $500.00 USD
              </span>
            </div>

            <div className="flex flex-col gap-4 ">
              <h1 className="text-lg w-fit md:text-xl text-gray-600 uppercase font-medium border-b-2 border-gray-600">
                Denominations
              </h1>
              <div className="space-x-2">
                <span className="p-1 border-2 border-gray-600 text-gray-600 font-bold md:text-lg cursor-pointer active:border-black active:text-black hover:text-black hover:border-black">
                  $250.00
                </span>
                <span className="p-1 border-2 border-gray-600 text-gray-600 font-bold md:text-lg cursor-pointer active:border-black active:text-black hover:text-black hover:border-black">
                  $100.00
                </span>
                <span className="p-1 border-2 border-gray-600 text-gray-600 font-bold md:text-lg cursor-pointer active:border-black active:text-black hover:text-black hover:border-black">
                  $500.00
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-4 md:gap-3  pt-6 items-start md:flex-row md:items-center">
              <button className="px-4 py-2 md:px-5 md:py-3 bg-black text-white  uppercase hover:bg-secondary duration-300">
                Add To Cart
              </button>
              <div className="flex items-center md:px-5 md:py-3 gap-3 md:border-2 md:border-gray-600 ">
                <FaRegHeart className="text-xl text-gray-600" />
                <span className="text-xs uppercase font-medium text-gray-600">
                  Add To Wishlist
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h1 className="text-lg w-fit md:text-xl text-gray-600 uppercase font-medium border-b-2 border-gray-600">
                Categories:{" "}
              </h1>
              <div className=" text-xl md:text-2xl flex items-center gap-3">
                <span className="font-medium text-gray-400">SHARE:</span>
                <div className="flex items-center gap-4 text-gray-400">
                  <FaXTwitter />
                  <GrInstagram />
                  <FaPinterestP />
                </div>
              </div>
            </div>
          </div>

          {/* Some information */}
          <div className="w-full space-y-3 p-5">
            <div className="h-28 md:h-32 w-full flex items-center justify-center p-3 border-2 border-gray-400 hover:border-black cursor-pointer">
              <GiDiscGolfBag className="w-[30%] text-gray-400 text-4xl sm:text-6xl md:text-7xl " />
              <div className="p-1 flex flex-col w-full">
                <span className="text-sm uppercase font-medium sm:text-md md:text-xl">
                  Free Shipping
                </span>
                <span className="text-sm sm:text-base md:text-md text-gray-400 font-meduim">
                  USA & Canada
                </span>
              </div>
            </div>

            <div className="h-28 md:h-32 w-full flex items-center justify-center p-3 border-2 border-gray-400 hover:border-black cursor-pointer">
              <ImGift className="w-[30%] text-gray-400 text-4xl sm:text-6xl md:text-7xl " />
              <div className="p-1 flex flex-col w-full">
                <span className="text-sm uppercase font-medium sm:text-md md:text-xl">
                  FBeautifully Gift boxed
                </span>
                <span className="text-sm sm:text-base md:text-md text-gray-400 font-meduim">
                  All orderes
                </span>
              </div>
            </div>

            <div className="h-28 md:h-32 w-full flex items-center justify-center p-3 border-2 border-gray-400 hover:border-black cursor-pointer">
              <FaHandshake className="w-[30%] text-gray-400 text-4xl sm:text-6xl md:text-7xl " />
              <div className="p-1 flex flex-col w-full">
                <span className="text-sm uppercase font-medium sm:text-md md:text-xl">
                  30 Day Satisfaction Guarantee
                </span>
                <span className="text-sm sm:text-base md:text-md text-gray-400 font-meduim">
                  Shop With Confidence
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mb-5 h-[2px] [md:h-[1px] bg-gray-400" />
      <GiftDescription />
    </>
  );
};

export default GiftCards;
