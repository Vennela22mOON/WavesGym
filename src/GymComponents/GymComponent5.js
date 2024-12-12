import React from 'react';
import image1 from "./Logos/Body1.webp"; 
import image2 from "./Logos/Days.webp";
import image3 from "./Logos/Parking.jpg"; 
import image4 from "./Logos/Clean.jpeg"; 

const GymComponent5 = () => {
  return (
    <div className="bg-white py-16 px-6 sm:px-12 md:px-20">
      <div className="text-center">
        <h2 className="text-lg uppercase tracking-wide text-gray-400">
          Experienced & Internationally Certified Personal Trainers
        </h2>
        <h1 className="mt-4 text-4xl md:text-5xl font-bold text-orange-500">
          The Best Fitness Experience
        </h1>
        <p className="mt-6 text-gray-600 text-lg">
          We’re committed to bringing you the best workout experience.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        <div>
          <img
            src={image1}
            alt="Body Composition Assessment"
            className="w-full h-40 object-cover rounded-lg shadow-md"
          />
          <p className="mt-4 text-gray-700 font-medium">
            Body Composition Assessment
          </p>
        </div>
        <div>
          <img
            src={image2}
            alt="Open 7 Days a Week"
            className="w-full h-40 object-cover rounded-lg shadow-md"
          />
          <p className="mt-4 text-gray-700 font-medium">Open 7 Days A Week</p>
        </div>
        <div>
          <img
            src={image3}
            alt="Complimentary Valet Parking"
            className="w-full h-40 object-cover rounded-lg shadow-md"
          />
          <p className="mt-4 text-gray-700 font-medium">
            Complimentary Valet Parking
          </p>
        </div>
        <div>
          <img
            src={image4}
            alt="Clean, Comfortable and Safe"
            className="w-full h-40 object-cover rounded-lg shadow-md"
          />
          <p className="mt-4 text-gray-700 font-medium">
            Clean, Comfortable and Safe
          </p>
        </div>
      </div>
      <div className="text-center mt-12">
        <button className="px-6 py-3 bg-orange-500 text-white rounded-md font-medium hover:bg-orange-600">
          Join Today
        </button>
      </div>
    </div>
  );
};

export default GymComponent5;
