'use client'
import React, { useState } from 'react';
import Image from 'next/image'; // Adjust if using a different image loader
import { IoSearchOutline } from 'react-icons/io5';
import { AiOutlineClose } from 'react-icons/ai';

const Slider = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="text-white p-4 shadow-lg absolute z-20 w-full bg-opacity-50 bg-gray-900">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo Section */}
        <div className="flex items-center ">
          <Image
            src="/logo3.png" // Replace with your logo path
            alt="Logo"
            width={50}
            height={50}
            className="rounded-md"
          />
        </div>

        {/* Navigation and Search Section */}
        <div className="flex-1 flex items-center justify-between md:justify-center">
          {/* Navigation Links */}
          <div className={`hidden md:flex space-x-6 ${isMenuOpen ? 'block' : ''}`}>
            <a
              href="#home"
              className="hover:text-gray-400 transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#services"
              className="hover:text-gray-400 transition-colors duration-300"
            >
              Services
            </a>
            <a
              href="#about"
              className="hover:text-gray-400 transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#contact"
              className="hover:text-gray-400 transition-colors duration-300"
            >
              Contact
            </a>
          </div>

          {/* Search Bar */}
          <div className="relative w-full max-w-xs md:max-w-md mx-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-2 px-4 rounded-full bg-gray-600 bg-opacity-60 text-white placeholder-gray-300 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 shadow-md transition-all duration-300"
            />
            <IoSearchOutline className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            className="text-white hover:text-gray-400 focus:outline-none" 
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <AiOutlineClose className="h-6 w-6" />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-gray-800 bg-opacity-80 p-4 absolute top-full left-0 w-full z-30`}>
        <a
          href="#home"
          className="block py-2 px-4 text-white hover:text-gray-400 transition-colors duration-300"
          onClick={toggleMenu}
        >
          Home
        </a>
        <a
          href="#services"
          className="block py-2 px-4 text-white hover:text-gray-400 transition-colors duration-300"
          onClick={toggleMenu}
        >
          Services
        </a>
        <a
          href="#about"
          className="block py-2 px-4 text-white hover:text-gray-400 transition-colors duration-300"
          onClick={toggleMenu}
        >
          About
        </a>
        <a
          href="#contact"
          className="block py-2 px-4 text-white hover:text-gray-400 transition-colors duration-300"
          onClick={toggleMenu}
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Slider;
