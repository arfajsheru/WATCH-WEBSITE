import React, { useState } from "react";
import { bestSellers } from "../data/bestSellers.js";
import Item from "./Item.jsx";
import Title from "./Title.jsx";

const BestSellers = () => {
  // Initializing selected category state
  const [selectedCategory, setSelectedCategory] = useState("timex");

  // Filter items based on selected category
  const filteredItems = bestSellers.filter(
    (item) => item.category === selectedCategory
  );

  return (
    <div className="p-8 mx-1 sm:mx-2">

       <Title title1={"explore our "} title2={"best sellers"} />
      

      <div className="mb-5 flex items-center justify-between sm:justify-start gap-2 md:gap-3 font-bold font-font2 text-gray-700">
        {/* Category Selection */}
        <span
          className="cursor-pointer hover:text-secondary relative after:content-[''] after:absolute after:w-0 after:h-[3px] border-b border-black after:bg-secondary after:left-0 after:bottom-[-2px] after:transition-all after:duration-300 hover:after:w-full"
          onClick={() => setSelectedCategory("timex")}
        >
          Timex
        </span>
        <span
          className="cursor-pointer hover:text-secondary relative after:content-[''] after:absolute after:w-0 after:h-[3px] border-b border-black after:bg-secondary after:left-0 after:bottom-[-2px] after:transition-all after:duration-300 hover:after:w-full"
          onClick={() => setSelectedCategory("brand")}
        >
          Brand
        </span>
        <span
          className="cursor-pointer hover:text-secondary relative after:content-[''] after:absolute after:w-0 after:h-[3px] border-b border-black after:bg-secondary after:left-0 after:bottom-[-2px] after:transition-all after:duration-300 hover:after:w-full"
          onClick={() => setSelectedCategory("Watches")}
        >
          Watches
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-5 gap-5 overflow-hidden">
        {/* Render filtered items based on selected category */}
        {filteredItems.slice(0, 5).map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
