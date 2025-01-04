import React from "react";
import footerlogo from "../assets/footerlogo.webp";
import { Link } from "react-router";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-5">
      <div className="flex gap-4">
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg ">INFORMATION</h3>
          <hr className="bg-white w-24" />
        </div>
          <ul className="space-y-3 uppercase">
            <li><a href="#about" className=" transition-colors">About Us</a></li>
            <li><a href="#contact" className=" transition-colors">Contact Us</a></li>
            <li><a href="#privacy" className=" transition-colors">Privacy Policy</a></li>
            <li><a href="#terms" className=" transition-colors">Terms & Conditions</a></li>
          </ul>
        </div>

        <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg ">MORE LINKS</h3>
          <hr className="bg-white w-24" />
        </div>
          <ul className="space-y-3 uppercase">
            <li><a href="#about" className=" transition-colors">faq</a></li>
            <li><a href="#contact" className=" transition-colors">waranty & repaires</a></li>
            <li><a href="#privacy" className=" transition-colors">shipping & insurance</a></li>
            <li><a href="#terms" className=" transition-colors">Terms & service</a></li>
            <li><a href="#terms" className=" transition-colors">contact us</a></li>
          </ul>
        </div>

        <div className="">
          <img src={footerlogo} alt="Logo" className="w-24" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
