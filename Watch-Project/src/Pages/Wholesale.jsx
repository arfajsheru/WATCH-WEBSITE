import React from "react";
import Title from "../Component/Title";
import hero from "../assets/hero.jpg";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const Wholesale = () => {
  return (
    <div className="mb-10 animate-open mx-3 flex flex-col items-center">
      {/* Hero Section */}
      <div className="relative py-3 sm:py-4 rounded-lg overflow-hidden">
        <img
          src={hero}
          className="w-full brightness-95 h-44 sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg"
          alt="Hero Background"
        />
        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {/* Title */}
          <Title title1={"Exclusive "} title2={"Wholesale"} />

          {/* Breadcrumb */}
          <div className="flex gap-1 items-center text-sm sm:text-base md:text-lg uppercase text-gray-700">
            <Link to={"/"} className="font-medium flex items-center">
              Home <IoIosArrowForward className="text-lg" />
            </Link>
            <Link to={"/wholesale"} className="font-medium">
              Wholesale
            </Link>
          </div>

          {/* Headline */}
          <div className="text-center text-xs sm:text-lg md:text-2xl lg:text-3xl font-bold font-font7 capitalilze text-gray-800">
            Interested in offering Watchcraft?
          </div>
        </div>
      </div>




      <div className="w-full md:w-[80%] p-3">
          <h1 className="text-center text-xl sm:text-xl md:text-2xl text-gray-600  font-medium font-font2 mb-3">Business Information Form</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-x-[10%]">


          <div className="space-y-1">
            <label className="text-sm font-bold font-font4">Company Name</label>
            <input
              type="text"
              className="w-full p-2 border border-secondary focus:ring-1 focus:ring-secondary focus:outline-none"
              placeholder="Enter company name"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-bold font-font4">Title</label>
            <input
              type="text"
              className="w-full p-2 border border-secondary focus:ring-1 focus:ring-secondary focus:outline-none"
              placeholder="Enter title"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-bold font-font4">Contact Name</label>
            <input
              type="text"
              className="w-full p-2 border border-secondary focus:ring-1 focus:ring-secondary focus:outline-none"
              placeholder="Enter contact name"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-bold font-font4">User Name</label>
            <input
              type="text"
              className="w-full p-2 border border-secondary focus:ring-1 focus:ring-secondary focus:outline-none"
              placeholder="Enter username"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-bold font-font4">Phone</label>
            <input
              type="tel"
              className="w-full p-2 border border-secondary focus:ring-1 focus:ring-secondary focus:outline-none"
              placeholder="Enter phone number"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-bold font-font4">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-secondary focus:ring-1 focus:ring-secondary focus:outline-none"
              placeholder="Enter email address"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-bold font-font4">Website</label>
            <input
              type="url"
              className="w-full p-2 border border-secondary focus:ring-1 focus:ring-secondary focus:outline-none"
              placeholder="Enter website URL"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-bold font-font4">Tax ID#</label>
            <input
              type="text"
              className="w-full p-2 border border-secondary focus:ring-1 focus:ring-secondary focus:outline-none"
              placeholder="Enter Tax ID"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-bold font-font4">
              Years in Business
            </label>
            <input
              type="number"
              className="w-full p-2 border border-secondary focus:ring-1 focus:ring-secondary focus:outline-none"
              placeholder="Enter years in business"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-bold font-font4">
              Number of Employees
            </label>
            <input
              type="number"
              className="w-full p-2 border border-secondary focus:ring-1 focus:ring-secondary focus:outline-none"
              placeholder="Enter number of employees"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-bold font-font4">Address</label>
            <textarea
              className="w-full p-2 border border-secondary focus:ring-1 focus:ring-secondary focus:outline-none"
              placeholder="Enter address"
            ></textarea>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-bold font-font4">
              Number of Locations
            </label>
            <input
              type="number"
              className="w-full p-2 border border-secondary focus:ring-1 focus:ring-secondary focus:outline-none"
              placeholder="Enter number of locations"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-bold font-font4">
              Type of Business
            </label>
            <select className="w-full p-2 border border-secondary focus:ring-1 focus:ring-secondary focus:outline-none">
              <option>Online only</option>
              <option>Museum Store</option>
              <option>Craft Gallery</option>
              <option>American Made only Craft Gallery</option>
              <option>Art Gallery</option>
              <option>Fine Gallery</option>
              <option>Other</option>
            </select>
          </div>   
        </div>

        <button
            type="submit"
            className="w-fit px-6 py-2 mt-5 text-center text-sm md:text-sm cursor-pointer uppercase text-white bg-secondary  transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-black"
          >
            Submit
          </button>
      </div>
    </div>
  );
};

export default Wholesale;
