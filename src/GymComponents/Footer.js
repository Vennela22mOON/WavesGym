import React from 'react';

const Footer = () => {
  return (
    <div className="bg-black text-white py-6 px-4">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-center md:text-left text-sm sm:text-base">
          © 2022 Paradise Fitness & Health Pvt. Ltd. All Rights Reserved.
        </h1>
        <h1 className="text-center md:text-right text-sm sm:text-base mt-4 md:mt-0">
          Made with <span className="text-red-500">❤</span> by 
          <span className="text-orange-500 font-semibold hover:underline cursor-pointer">
            Growl Media
          </span>
        </h1>
      </div>
      <div className="flex justify-center space-x-4 mt-4">
        <a
          href="https://www.facebook.com"
          className="text-white hover:text-orange-500 transition-all duration-300"
          aria-label="Facebook"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://www.instagram.com"
          className="text-white hover:text-orange-500 transition-all duration-300"
          aria-label="Instagram"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://twitter.com"
          className="text-white hover:text-orange-500 transition-all duration-300"
          aria-label="Twitter"
        >
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
