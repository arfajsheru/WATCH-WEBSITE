import React from "react";
import { IoHeart, IoCart, IoEye } from "react-icons/io5";

const Item = ({ item }) => {
  return (
    <div
      key={item.id}
      className="relative group overflow-hidden cursor-pointer"
    >
      {/* Image with hover animation */}
      <div className="relative group border-2 border-gray-700">
      <img
          src={item.images[0]} // Access first image
          alt={item.title}
          className="object-cover bg-blend-multiply md:w-full md:h-full transition-opacity duration-500 group-hover:opacity-0"
        />
        {/* Second image, visible on hover */}
        <img
          src={item.images[1]} // Access second image
          alt={item.title}
          className="absolute inset-0 object-cover bg-blend-multiply md:w-full md:h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
        {/* Icons on hover */}
        <div className="absolute left-2 top-2 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="p-2 bg-secondary rounded-full shadow-lg text-primary hover:bg-primary hover:text-secondary transition-transform duration-500 -translate-x-5 group-hover:translate-x-0">
            <IoHeart className="text-2xl sm:text-xl" />
          </button>
          <button className="p-2 bg-secondary rounded-full shadow-lg text-primary hover:bg-primary hover:text-secondary transition-transform duration-500 -translate-x-5 group-hover:translate-x-0">
            <IoCart className="text-2xl sm:text-xl" />
          </button>
          <button className="p-2 bg-secondary rounded-full shadow-lg text-primary hover:bg-primary hover:text-secondary transition-transform duration-500 -translate-x-5 group-hover:translate-x-0">
            <IoEye className="text-2xl sm:text-xl" />
          </button>
        </div>
        {item.bestSellers && (
          <span className="absolute top-0 right-2 text-xs font-medium uppercase font-font2">
            BestSeller
          </span>
        )}
      </div>

      {/* Item details */}
      <div className="p-2">
        <h2 className="text-xs font-bold font-font6 text-gray-700 capitalize hover:text-black transition-colors duration-300 truncate overflow-hidden text-ellipsis">
          {item.title}
        </h2>

        <div className="flex flex-1 gap-2 items-center justify-center mt-1">
          <span className="text-md font-semibol text-gray-400 font-font2 line-through">
            ₹{item.original_price}
          </span>
          <span className="text-md font-bold font-font2 text-gray-700">
            ₹{item.price}
          </span>
          <span className="text-md font-medium font-font2 text-red-700">
            {item.offer}% OFF
          </span>
        </div>
        <div className="flex justify-center items-center  mt-3">
          <button className="px-6 py-2 text-center text-sm md:text-sm cursor-pointer uppercase text-white bg-secondary sm:w-fit transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-black">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
