import React from "react";
import { IoClose, IoSearch } from "react-icons/io5";

const SearchModal = ({ isOpen, toggleModal }) => {
  if (!isOpen) return null; // Agar modal close ho to kuch render na ho

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 animate-open"
      onClick={toggleModal} // Background click par modal close hoga
    >
      <div
        className="w-full sm:w-[70%] p-4 rounded flex flex-col items-center relative"
        onClick={(e) => e.stopPropagation()} // Modal click par close nahi hoga
      >
        {/* Close Button */}
        <div
          className="absolute -top-3 right-4 text-3xl text-gray-500 "
          onClick={toggleModal}
        >
          <IoClose />
        </div>

        {/* Search Input */}
        <h2 className="text-lg text-white text-center mb-4">Search anything....</h2>
        <div className="flex w-full border-b pb-3 items-center">
        <input
          type="text"
          className="w-full p-2 border bg-transparent text-white border-secondary outline-none border-none"
          placeholder="Type to search..."
        />

        <IoSearch className="text-white text-2xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
