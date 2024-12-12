import React from 'react';
import manImage from "./Logos/Gym5.webp"; 
import womanImage from "./Logos/Gym6.jpg";

const GymComponent4 = () => {
  return (
    <div className="relative bg-black text-white py-16 px-6 sm:px-12 md:px-20 flex flex-col md:flex-row items-center md:items-start justify-between">
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-lg uppercase tracking-wide text-gray-400">Experience The Fitness Wave</h2>
        <h1 className="mt-4 text-4xl md:text-5xl font-bold text-orange-500">
          1700 Sq.Ft Open Air CrossFit Studio
        </h1>
        <p className="mt-6 text-gray-300 text-lg">
          Our rooftop open air CrossFit studio will help you push your limits and get you to your fitness goals.
        </p>
        <button className="mt-8 px-6 py-3 bg-orange-500 text-white rounded-md font-medium hover:bg-orange-600">
          Join Today
        </button>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex flex-col items-center md:items-end gap-4 mt-8 md:mt-0">
        <div className="relative">
          <img
            src={manImage}
            alt="Man CrossFit training"
            className="w-40 sm:w-56 md:w-64 rounded-lg shadow-lg"
          />
        </div>
        <div className="relative">
          <img
            src={womanImage}
            alt="Woman CrossFit training"
            className="w-40 sm:w-56 md:w-64 rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default GymComponent4;
