import React from "react";
import footerlogo from "../assets/footerlogo.webp";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa6";
import { TbBrandLinkedinFilled } from "react-icons/tb";
const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="flex flex-col items-center md:flex-row gap-6 md:gap-24 px-6 md:px-12 py-5">
        {/* Information Section */}
        <div className="space-y-6 text-center md:text-left">
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">INFORMATION</h3>
            <hr className="bg-white w-24 mx-auto md:mx-0" />
          </div>
          <ul className="space-y-3 uppercase">
            <li>
              <a href="#about" className="transition-colors hover:text-gray-300">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="transition-colors hover:text-gray-300">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#privacy" className="transition-colors hover:text-gray-300">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#terms" className="transition-colors hover:text-gray-300">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* More Links Section */}
        <div className="space-y-6 text-center md:text-left">
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">MORE LINKS</h3>
            <hr className="bg-white w-24 mx-auto md:mx-0" />
          </div>
          <ul className="space-y-3 uppercase">
            <li>
              <a href="#faq" className="transition-colors hover:text-gray-300">
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#repairs"
                className="transition-colors hover:text-gray-300"
              >
                Warranty & Repairs
              </a>
            </li>
            <li>
              <a
                href="#shipping"
                className="transition-colors hover:text-gray-300"
              >
                Shipping & Insurance
              </a>
            </li>
            <li>
              <a
                href="#service"
                className="transition-colors hover:text-gray-300"
              >
                Terms & Service
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="transition-colors hover:text-gray-300"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Logo Section */}
        <div className="flex flex-col justify-between items-center md:items-start gap-14">
          <img src={footerlogo} alt="Logo" className="w-20 md:w-24" />
          <div className="flex gap-4">
            <span className="border border-white p-1 bg-transparent rounded-full">
              <FaFacebook size={34}/>
            </span>
            <span className="border border-white p-1 bg-transparent rounded-full">
              <AiFillInstagram size={34}/>
            </span>
            <span className="border border-white p-1 bg-transparent rounded-full">
              <TbBrandLinkedinFilled size={34}/>
            </span>
            <span className="border border-white p-1 bg-transparent rounded-full">
              <FaPinterest size={34}/>
            </span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="bg-white mx-6 md:mx-12" />

      {/* Footer Bottom */}
      <div className="text-center p-4 text-sm md:text-base">
        <span>COPYRIGHT © 2023 WATCHCRAFT. ALL RIGHTS RESERVED</span>
      </div>
    </footer>
  );
};

export default Footer;
