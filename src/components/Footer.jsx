import React from "react";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import logo1 from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6"; // Importing X icon

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-10 text-sm px-4 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <img src={logo1} alt="Caninkart" className="h-10 mb-3" />
          <p className="text-gray-700 leading-relaxed">
            Caninkart is a highly reputable manufacturer and exporter of pet
            accessories.
          </p>
        </div>

        {/* Quick Links */}
        <div className="">
          <h4 className="font-semibold mb-2 text-black">Quick Links</h4>
          <div className="h-18 overflow-y-scroll w-fit">
            {" "}
            {/* Adjust height as needed */}
            <ul className="space-y-1 text-gray-600">
              <li>
                <Link to="/" className="hover:text-orange-500">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-orange-500">
                  About
                </Link>
              </li>
              <li>
                <Link to="/breed" className="hover:text-orange-500">
                  Dog Breed
                </Link>
              </li>
              <li>
                <Link to="/product" className="hover:text-orange-500">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/marketplace" className="hover:text-orange-500">
                  Market Place
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Links */}
        <div>
          <h4 className="font-semibold mb-2 text-black">Legal</h4>
          <ul className="space-y-1 text-gray-600">
            <li className="hover:text-orange-500 cursor-pointer">
              Terms & Conditions
            </li>
            <li className="hover:text-orange-500 cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:text-orange-500 cursor-pointer">
              Cookie Policy
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="cursor-pointer ">
          <h4 className="font-semibold mb-2 text-black">Contact Us</h4>
          <p className="flex items-center gap-2 text-gray-700 ">
            {/* <FiMail className="text-orange-600" />  */}
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FDDF82] transition cursor-pointer">
              <FiMail className="text-lg" />
            </div>
            <span className="hover:text-orange-400">support@caninkart.com</span>
          </p>
          <p className="flex items-center gap-2 mt-2 text-gray-700">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FDDF82] transition cursor-pointer">
              <FiPhone className="text-lg" />
            </div>
           <span className="hover:text-orange-400"> +91 95029 57250 </span>
          </p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="mt-8 flex justify-center gap-6 text-xl ">
        {[
          { icon: <FaFacebookF />, label: "Facebook" },
          { icon: <FaInstagram />, label: "Instagram" },
          { icon: <FaYoutube />, label: "YouTube" },
          { icon: <FaXTwitter />, label: "X (Twitter)" },
        ].map((item, idx) => (
          <div
            key={idx}
            aria-label={item.label}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FDDF82] transition cursor-pointer"
          >
            {item.icon}
          </div>
        ))}
      </div>

      {/* Copyright */}
      <p className="mt-6 text-center text-xs text-gray-500">
        © 2025 Caninkart. All rights reserved.
      </p>
      <div className="w-10 h-10 flex items-center justify-center rounded-full border border-orange-600 
  transition-all  duration-300 hover:bg-orange-100 cursor-pointer ease-in hover:scale-110">
  <FaFacebookF className="text-orange-600 transform transition-transform duration-300 ease-in hover:scale-110" />
</div>


    </footer>
  );
};

export default Footer;
