import React, { useState } from 'react'
import { RiMenu2Line } from "react-icons/ri";
import { RiAdminFill } from "react-icons/ri";

const Sidebar = ({toggleSidebar, isOpen}) => {
    const[activeTab, setActiveTab] = useState("menu")

  return (
    <>
    <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="">
            {/* Menu or login */}
            <div className='flex items-center justify-between w-full border-b border-black'>
                <div className={`h-10 w-[50%] flex items-center justify-center gap-2 text-xl cursor-pointer ${activeTab === "menu" ?" bg-secondary text-white":"bg-white text-black" }`}
                onClick={() => setActiveTab("menu")}
                >
                    <RiMenu2Line />
                    <span>Menu</span>
                </div>
                <div className={`h-10 w-[50%] flex items-center justify-center gap-2 text-xl cursor-pointer ${activeTab === "login" ? "bg-secondary text-white" : "bg-white text-black"}`}
                onClick={() => setActiveTab("login")}
                >
                    <RiAdminFill />
                    <span>Login</span>
                </div>
            </div>
        </div>

        <span
            className="text-gray-800 text-lg cursor-pointer"
            onClick={toggleSidebar}
          >
            Close
          </span>
      </div>

        {/* Overlay */}
            {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
      </>
  )
}

export default Sidebar