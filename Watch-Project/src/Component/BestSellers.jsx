import React from "react";
import watch1 from "../assets/watch1.webp";
import watch2 from "../assets/watch2.webp";
import watch3 from "../assets/watch3.webp";
import watch4 from "../assets/watch4.webp";
const BestSellers = () => {
  const bestSellers = [
    {
      id: 1,
      title: "Stylish Watch",
      description: "Elegant and durable design.",
      price: "$149.99",
      image: watch1, // Replace with your image URLs
    },
    {
      id: 2,
      title: "Leather Wallet",
      description: "Premium quality and compact.",
      price: "$79.99",
      image: watch2,
    },
    {
      id: 3,
      title: "Running Shoes",
      description: "Comfortable and lightweight.",
      price: "$129.99",
      image: watch3,
    },
    {
      id: 2,
      title: "Leather Wallet",
      description: "Premium quality and compact.",
      price: "$79.99",
      image: watch4,
    },
    {
      id: 3,
      title: "Running Shoes",
      description: "Comfortable and lightweight.",
      price: "$129.99",
      image: watch3,
    },
  ];

  return (
    <div className="p-8 ">
      <div className="mb-2 md:mb-3">
        <h1 className="cursor-pointer text-base font-semibold text-center md:font-bold uppercase md:text-4xl text-gray-700">
          Browse Our BestSellers
        </h1>
      </div>

      <div className="mb-5 flex items-center gap-2 md:gap-3 font-bold font-font2 text-gray-700">
        <span className="cursor-pointer hover:text-secondary relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-secondary after:left-0 after:bottom-[-2px] after:transition-all after:duration-300 hover:after:w-full">
          Apple Watch Brands
        </span>
        <span className="cursor-pointer hover:text-secondary relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-secondary after:left-0 after:bottom-[-2px] after:transition-all after:duration-300 hover:after:w-full">
          Bracelets
        </span>
        <span className="cursor-pointer hover:text-secondary relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-secondary after:left-0 after:bottom-[-2px] after:transition-all after:duration-300 hover:after:w-full">
          Watches
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {bestSellers.map((item) => (
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
                <button className="bg-gradient-to-r from-primary to-secondary text-white font-navfont  px-4 py-2 rounded-sm text-sm sm:text-base font-normal transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-black">
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
