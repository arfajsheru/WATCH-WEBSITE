import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const collectionTypes = {
  Watches: ["Florence", "Rado", "Titan", "Fossil", "Casio", "Timex", "Seiko", "Omega"],
  Gender: ["Men", "Women", "Unisex", "Boys", "Girls"],
  Bracelets: ["Gold", "Silver", "Platinum", "Leather", "Beads", "Metal", "Steel"],
  Shapes: ["Round", "Square", "Rectangular"],
  SmartWatchBrands: ["Apple", "Samsung", "Garmin", "Fitbit"],
};

const CollectionOption = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <NavLink
      to="/collections"
      className="relative group cursor-pointer text-textcolor"
      onMouseEnter={() => setIsHovered(true)} // Trigger hover on Collections
      onMouseLeave={() => setIsHovered(false)} // Remove hover when leaving
    >
      Collections
      <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover:w-full"></div>

      {/* Dropdown Menu */}
      <ul
        className={`absolute left-0 z-50 mt-3 bg-primary p-10 w-[700px] border border-secondary rounded-sm shadow-lg transition-all duration-500 ease-in-out transform ${
          isHovered ? "scale-100 translate-x-0 opacity-100" : "scale-0 translate-x-[-10px] opacity-0"
        }`}
        style={{
          animation: isHovered ? "slideIn 0.5s ease-out forwards" : "slideOut 0.5s ease-in forwards",
        }}
      >
        {/* Grid Layout for Categories */}
        <div className="grid grid-cols-3 gap-10">
          {Object.entries(collectionTypes).map(([header, items]) => (
            <div key={header} className="col-span-1">
              {/* Header with line underneath */}
              <h3 className="font-semibold text-lg mb-2 border-b-2 border-secondary  w-fit">{header}</h3>

              {/* Items list */}
              {items.map((item, index) => (
                <li key={index} className="text-base mb-2 hover:text-secondary duration-300">
                  <NavLink to={`/collections/${item}`} className="text-textcolor hover:text-secondary block">
                    {item}
                  </NavLink>
                </li>
              ))}
            </div>
          ))}
        </div>
      </ul>
    </NavLink>
  );
};

export default CollectionOption;
