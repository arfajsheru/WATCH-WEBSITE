import React, { useState } from "react";
import { bestSellers } from "../data/bestSellers.js";

const BestSellers = () => {
  // Initializing selected category state
  const [selectedCategory, setSelectedCategory] = useState("Watches");

  // Filter items based on selected category
  const filteredItems = bestSellers.filter(
    (item) => item.category === selectedCategory
  );

  return (
    <div className="p-8">
      <div className="mb-2 md:mb-3">
        <h1 className="cursor-pointer text-base font-semibold text-center md:font-bold uppercase md:text-4xl text-gray-700">
          Browse Our BestSellers
        </h1>
      </div>

      <div className="mb-5 flex items-center gap-2 md:gap-3 font-bold font-font2 text-gray-700">
        {/* Category Selection */}
        <span
          className="cursor-pointer hover:text-secondary relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-secondary after:left-0 after:bottom-[-2px] after:transition-all after:duration-300 hover:after:w-full"
          onClick={() => setSelectedCategory("Apple Watch Brands")}
        >
          Apple Watch Brands
        </span>
        <span
          className="cursor-pointer hover:text-secondary relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-secondary after:left-0 after:bottom-[-2px] after:transition-all after:duration-300 hover:after:w-full"
          onClick={() => setSelectedCategory("Bracelets")}
        >
          Bracelets
        </span>
        <span
          className="cursor-pointer hover:text-secondary relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-secondary after:left-0 after:bottom-[-2px] after:transition-all after:duration-300 hover:after:w-full"
          onClick={() => setSelectedCategory("Watches")}
        >
          Watches
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 overflow-hidden">
        {/* Render filtered items based on selected category */}
        {filteredItems.slice(0, 5).map((item) => (
          <div
            key={item.id}
            className="overflow-hidden border-2 border-secondary p-2 rounded-sm shadow-lg bg-[#ffffff] cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover transition-transform transform hover:scale-105"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-700 hover:text-secondary transition-colors duration-300">
                {item.title}
              </h2>
              <p className="text-gray-600 text-sm mb-2">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-800">
                  {item.price}
                </span>
                <button className="bg-gradient-to-r from-primary to-secondary text-white font-navfont px-4 py-2 rounded-sm text-sm sm:text-base font-normal transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-black">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
