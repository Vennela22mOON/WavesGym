import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import GymLogo from "./Logos/logo-waves-gym.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black fixed w-full h-20 top-0 left-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="text-white text-lg font-bold">
            <img src={GymLogo} alt="Logo" className="h-10" />
          </div>
          <div className="hidden md:flex space-x-8">
            <Link to="/try-us" className="text-white hover:text-gray-300">TRY US</Link>
            <a href="#services" className="text-white hover:text-gray-300">JOIN US</a>
            <a href="#about" className="text-white hover:text-gray-300">PERSONAL TRAINING</a>
            <a href="#contact" className="text-white hover:text-gray-300">TRANSFORMATIONS</a>
            <a href="#contact" className="text-white hover:text-gray-300">INBODY ASSESSMENT</a>
            <a href="#contact" className="text-white hover:text-gray-300">CLASSES</a>
            <a href="#contact" className="text-white hover:text-gray-300">OFFERS</a>
            <a href="#contact" className="text-white hover:text-gray-300">LOCATION</a>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link to="/try-us" className="block text-white hover:text-gray-300">TRY US</Link>
            <a href="#services" className="block text-white hover:text-gray-300">JOIN US</a>
            <a href="#about" className="block text-white hover:text-gray-300">PERSONAL TRAINING</a>
            <a href="#contact" className="block text-white hover:text-gray-300">TRANSFORMATIONS</a>
            <a href="#contact" className="block text-white hover:text-gray-300">INBODY ASSESSMENT</a>
            <a href="#contact" className="block text-white hover:text-gray-300">CLASSES</a>
            <a href="#contact" className="block text-white hover:text-gray-300">OFFERS</a>
            <a href="#contact" className="block text-white hover:text-gray-300">LOCATION</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
