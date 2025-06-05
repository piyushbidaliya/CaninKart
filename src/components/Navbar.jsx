import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navLinks = ["home", "product", "about", "blog", "contact"];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Navigate or filter logic here
    setShowSearch(false); // hide input after search
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Caninkart Logo" className="h-10 w-auto" />
        </NavLink>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
          {navLinks.map((item) => (
            <li key={item}>
              <NavLink
                to={`/${item}`}
                className={({ isActive }) =>
                  `group relative inline-block transition-colors ${
                    isActive
                      ? "text-orange-500 font-semibold"
                      : "text-gray-700 hover:text-orange-500"
                  }`
                }
              >
                {item.toUpperCase()}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-transform duration-300"></span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Icons */}
        <div className="flex items-center space-x-4">
          {/* Search Icon */}
          {!showSearch && (
            <button
              onClick={() => setShowSearch(true)}
              className="bg-orange-100 p-2 rounded-full hover:bg-orange-200 transition"
            >
              <FiSearch size={18} className="text-gray-800" />
            </button>
          )}

          {/* Hamburger Menu Icon */}
          <button
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Search Bar Overlay */}
      {showSearch && (
        <div className="w-full px-6 pb-4 md:pb-6">
          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center max-w-xl mx-auto mt-2 md:mt-0  rounded-lg overflow-hidden shadow-lg bg-white"
          >
            <input
              type="text"
              className="flex-1 px-4 py-2 text-sm outline-none"
              placeholder="Search for pet accessories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            <button
              type="submit"
              className="bg-orange-500 text-white px-5 py-3 rounded hover:bg-orange-600"
            >
              Search
            </button>
            <button
              type="button"
              onClick={() => setShowSearch(false)}
              className="px-3 text-gray-400 hover:text-orange-500"
              aria-label="Close search"
            >
              <IoClose size={22} />
            </button>
          </form>
        </div>
      )}

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden px-6 pt-2 pb-4 space-y-3 font-medium text-gray-700 transition-all duration-300 ease-in-out ${
          isOpen ? "block animate-slide-down" : "hidden"
        }`}
      >
        {navLinks.map((item) => (
          <div key={item}>
            <NavLink
              to={`/${item}`}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `group relative inline-block transition-colors ${
                  isActive
                    ? "text-orange-500 font-semibold"
                    : "text-gray-700 hover:text-orange-500"
                }`
              }
            >
              {item.toUpperCase()}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-transform duration-300"></span>
            </NavLink>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
