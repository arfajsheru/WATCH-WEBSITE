import React from "react";
import banner from "../assets/banner.jpg";

const ShopAndSave = () => {
  return (
    <div className="relative shadow-xs">
      {/* Image */}
      <img
        src={banner}
        alt="Banner"
        className="w-full h-[300px] sm:h-[500px] md:h-[700px] lg:h-[800px] object-cover"
      />

      {/* Black overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

      {/* Text and Button on top of image */}
      <div className="absolute w-full p-4 md:p-40 top-0 left-1/2 right-0 bottom-0 transform -translate-x-1/2 flex flex-col justify-center items-center text-center sm:px-8">
        <h1 className="text-4xl sm:text-6xl font-bold text-white  mb-4 font-font4">
          Shop the Best Deals
        </h1>
        <p className="text-sm sm:text-2xl text-white mb-6 font-font2">
        Explore our exclusive collection of products, ranging from the latest electronics to fashion-forward clothing and accessories. Whether you're looking to upgrade your home, shop for the perfect gift, or treat yourself to something special, we've got you covered. Hurry, these amazing discounts won't last forever!
        </p>

        <button className="bg-gradient-to-r from-primary to-secondary text-white font-navfont px-6 py-3 rounded-sm text-sm sm:text-base font-normal transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-black">
          Start Shopping
        </button>
      </div>
    </div>
  );
};

export default ShopAndSave;
