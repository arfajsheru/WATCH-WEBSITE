import React from 'react'
import Title from '../Component/Title'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router'
import hero from "../assets/hero.jpg";

const Collection = () => {
  return (
    <div className="mb-10 animate-open mx-3 flex flex-col items-center">
      <div className="relative py-3 sm:py-4 rounded-lg overflow-hidden">
        <img
          src={hero}
          className="w-full brightness-95 h-44 sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg"
          alt="Hero Background"
        />
        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {/* Title */}
          <Title title1={"Exclusive "} title2={"Collection"} />

          {/* Breadcrumb */}
          <div className="flex gap-1 items-center text-sm sm:text-base md:text-lg uppercase text-gray-700">
            <Link to={"/"} className="font-medium flex items-center">
              Home <IoIosArrowForward className="text-lg" />
            </Link>
            <Link to={"/collections"} className="font-medium">
              Collections
            </Link>
          </div>

          {/* Headline */}
     
        </div>
      </div>
      
    </div>
  )
}

export default Collection