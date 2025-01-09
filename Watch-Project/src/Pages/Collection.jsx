import React from "react";
import Title from "../Component/Title";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router";
import hero from "../assets/hero.jpg";
import { collectionTypes } from "../data/collectiondata";
import { watchData } from "../data/watchesdata";

const Collection = () => {
  const getCategory = (cate) => {
    let category = watchData.filter((item) => item.category === cate);
    return category.length
  };


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

      <div className="mt-5 w-full flex flex-col lg:items-center">
        <Title title1={"Collection "} title2={"Category"} />

        {/* Category items  */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mt-4 md:mt-9 lg:w-[80%]">
          {collectionTypes.map(({ image, ...categories }, index) => (
            <div key={index} className="flex flex-col gap-3 items-center">
              {/* Category Image */}
              <img
                src={image}
                alt="Category"
                className="w-full h-full object-cover"
              />

              {/* Loop through categories */}
              {Object.keys(categories).map((key) => (
                <div className="flex flex-col items-center">
                <h2
                  key={key}
                  className="text-2xl uppercase text-center font-font4 text-gray-800"
                >
                  {key}
                </h2>
                <span className="text-center">{getCategory(key)} Item</span>
                </div>
              ))}
              
              <button className="px-4 py-2 text-center uppercase text-white bg-secondary rounded-sm font-font4 border-2 border-gray-700">
                view more product
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
