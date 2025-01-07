import React, { useState } from "react";
import { bestSellers } from "../data/bestSellers.js";
import Item from "./Item.jsx";

const BestSellers = () => {
  // Initializing selected category state
  const [selectedCategory, setSelectedCategory] = useState("timex");

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
          onClick={() => setSelectedCategory("timex")}
        >
          Timex
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
        <Item item={item}/>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
