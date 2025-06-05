import React from 'react';
import { FiPhone, FiMail } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import logo1 from '../assets/logo.png';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="bg-white border-t mt-10 text-sm px-4 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <img src={logo1} alt="Caninkart" className="h-10 mb-3" />
          <p className="text-gray-700 leading-relaxed">
            Caninkart is a highly reputable manufacturer and exporter of pet accessories.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-2 text-black">Quick Links</h4>
          <ul className="space-y-1 text-gray-600">
            <li><Link to="/" className="hover:text-orange-500">Home</Link></li>
            <li><Link to="/about" className="hover:text-orange-500">About</Link></li>
            <li><Link to="/breed" className="hover:text-orange-500">Dog Breed</Link></li>
            <li><Link to="/product" className="hover:text-orange-500">Products</Link></li>
            <li><Link to="/marketplace" className="hover:text-orange-500">Market Place</Link></li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h4 className="font-semibold mb-2 text-black">Legal</h4>
          <ul className="space-y-1 text-gray-600">
            <li className="hover:text-orange-500 cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-orange-500 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-orange-500 cursor-pointer">Cookie Policy</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-2 text-black">Contact Us</h4>
          <p className="flex items-center gap-2 text-gray-700">
            <FiMail className="text-orange-600" /> support@caninkart.com
          </p>
          <p className="flex items-center gap-2 mt-2 text-gray-700">
            <FiPhone className="text-orange-600" /> +91 95029 57250
          </p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="mt-8 flex justify-center gap-6 text-xl text-orange-600">
        <FaFacebookF aria-label="Facebook" className="cursor-pointer hover:text-orange-400 transition" />
        <FaInstagram aria-label="Instagram" className="cursor-pointer hover:text-orange-400 transition" />
        <FaYoutube aria-label="YouTube" className="cursor-pointer hover:text-orange-400 transition" />
      </div>

      {/* Copyright */}
      <p className="mt-6 text-center text-xs text-gray-500">
        © 2025 Caninkart. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
