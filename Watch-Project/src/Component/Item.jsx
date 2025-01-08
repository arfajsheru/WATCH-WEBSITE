import React from "react";
import { IoHeart, IoCart, IoEye } from "react-icons/io5";

const Item = ({ item }) => {
  return (
    <div
      key={item.id}
      className="relative group overflow-hidden cursor-pointer flex flex-col items-center"
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
          <button className="p-1 sm:p-2 bg-secondary rounded-full shadow-md shadow-black text-primary hover:bg-primary hover:text-secondary transition-transform duration-500 -translate-x-5 group-hover:translate-x-0">
            <IoHeart className="text-md sm:text-xl" />
          </button>
          <button className="p-1 sm:p-2 bg-secondary rounded-full shadow-md shadow-black text-primary hover:bg-primary hover:text-secondary transition-transform duration-500 -translate-x-5 group-hover:translate-x-0">
            <IoCart className="text-md sm:text-xl" />
          </button>
          <button className="p-1 sm:p-2 bg-secondary rounded-full shadow-md shadow-black text-primary hover:bg-primary hover:text-secondary transition-transform duration-500 -translate-x-5 group-hover:translate-x-0">
            <IoEye className="text-md sm:text-xl" />
          </button>
        </div>
        {item.bestSellers && (
          <span className="text-[8px] sm:text-[10px] md:text-[] absolute top-0 right-1 font-medium uppercase font-font2">
            BestSeller
          </span>
        )}
      </div>

      {/* Item details overflow-hidden text-ellipsis */}
      <div className="p-1 sm:p-2 w-full">
        <h2 className="text-[12px] font-font2 text-gray-700 capitalize hover:text-black transition-colors duration-300 md:truncate md:overflow-hidden md:text-ellipsis">
          {item.title}
        </h2>

        <div className="flex flex-1 gap-2 items-center justify-center mt-1">
          <span className="text-xs ms:text-sm md:text-lg font-semibol text-gray-400 font-font2 line-through">
            ₹{item.original_price}
          </span>
          <span className="text-xs ms:text-sm md:text-lg font-bold font-font2 text-gray-700">
            ₹{item.price}
          </span>
          <span className="text-xs ms:text-sm md:text-lg font-medium font-font2 text-red-700">
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
