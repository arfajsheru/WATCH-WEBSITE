import React from "react";
import Title from "../Component/Title";
import hero from "../assets/hero.jpg";
import {Link} from "react-router-dom"
import { IoIosArrowForward } from "react-icons/io";


const Wholesale = () => {
  return (
    <div className="mb-10 animate-open">
      {/* Hero Section */}
      <div className="relative p-2 sm:p-3 rounded-lg overflow-hidden">
        <img
          src={hero}
          className="w-full brightness-95 h-44 sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg"
          alt="Hero Background"
        />
        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {/* Title */}
          <Title title1={"Exclusive "} title2={"Wholesale"} />

          {/* Breadcrumb */}
          <div className="flex gap-1 items-center text-sm sm:text-base md:text-lg uppercase text-gray-700">
            <Link to={"/"} className="font-medium flex items-center">Home <IoIosArrowForward className="text-lg"/></Link>
            <Link to={"/wholesale"} className="font-medium">Wholesale</Link>
          </div>

          {/* Headline */}
          <div className="text-center text-xs sm:text-lg md:text-2xl lg:text-3xl font-bold font-font7 capitalilze text-gray-800">
            Interested in offering Watchcraft?
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wholesale;
