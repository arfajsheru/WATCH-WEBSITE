import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const AboutsOption = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <NavLink
      to="/aboutus"
      className="relative group cursor-pointer text-textcolor" // Removed hover effect from here
      onMouseEnter={() => setIsHovered(true)} // Trigger hover on AboutUs
      onMouseLeave={() => setIsHovered(false)} // Remove hover when leaving
    >
      AboutUs
      <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover:w-full"></div>

      {/* Dropdown Menu */}
      <ul
        className={`absolute left-0 z-50 mt-3 bg-primary p-3 w-48 border border-secondary rounded-sm shadow-lg transition-all duration-500 ease-in-out transform ${
          isHovered ? "scale-100 translate-x-0" : "scale-0 translate-x-[-10px]"
        }`}
         style={{
          animation: isHovered ? "slideIn 0.5s ease-out-in forwards" : "slideOut 0.5s ease-in-out forwards",
        }}
      >
        <li className="text-base mb-2 hover:text-secondary duration-300">
          <NavLink to="/about-the-artist" className="text-textcolor hover:text-secondary">
            About The Artist
          </NavLink>
        </li>
        <li className="text-base mb-2 hover:text-secondary duration-300">
          <NavLink to="/faqs" className="text-textcolor hover:text-secondary">
            FAQs
          </NavLink>
        </li>
        <li className="text-base mb-2 hover:text-secondary duration-300">
          <NavLink to="/contact-us" className="text-textcolor hover:text-secondary">
            Contact Us
          </NavLink>
        </li>
      </ul>
    </NavLink>
  );
};

export default AboutsOption;
