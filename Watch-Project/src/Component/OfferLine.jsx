import React, { useEffect, useState } from "react";

const OfferLine = () => {
  const offers = [
    "Holiday Sale - 35% OFF Apple Brand 🎉🔥",
    "Buy 1 Get 1 Free on All Accessories 🎁✨",
    "Flash Sale - Upto 50% OFF on Electronics ⚡💥",
  ];

  const [currentOfferIndex, setCurrentOfferIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true); // Start animation
      setTimeout(() => {
        setAnimate(false); // Stop animation
        setCurrentOfferIndex((prevIndex) => (prevIndex + 1) % offers.length);
      }, 1000); // Animation duration (1 second)
    }, 5000); // Change offer every 5 seconds

    return () => clearInterval(interval); // Cleanup interval
  }, []);
  return (
    <div className="relative w-full bg-gray-300 flex items-center justify-between text-black uppercase font-bold text-sm md:text-base">
      {/* Left Side Element */}
      <div className="hidden md:block w-1/5 text-center">
        <span className="text-blue-500">🔥 Don't Miss Out! 🔥</span>
      </div>

      {/* Offer Text */}
      <div
        className={`h-8 w-full md:w-3/5 text-center flex items-center justify-center gap-2 transition-transform duration-1000 ${
          animate
            ? "opacity-0 transform scale-90"
            : "opacity-100 transform scale-100"
        }`}
      >
        <span className="text-yellow-500">🎉</span>
        <span className="text-xs sm:text-md md:text-lg text-gray-500">{offers[currentOfferIndex]}</span>
        <span className="text-yellow-500">🔥</span>
      </div>

      {/* Right Side Element */}
      <div className="hidden md:block w-1/5 text-center">
        <span className="text-green-500">✨ Limited Time Only ✨</span>
      </div>
    </div>
  );
};

export default OfferLine;
