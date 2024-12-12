import React from 'react';
import Gymbg from "./Logos/Gym2.jpg";

const GymComponent = () => {
  return (
    <div
      className="bg-cover bg-center h-[500px]" 
      style={{ backgroundImage: `url(${Gymbg})` }}
    >
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50 relative">
        <h2
          className="text-[9rem] italic text-transparent font-semibold leading-tight absolute"
          style={{ WebkitTextStroke: "2px white" }}
        >
          # SAFE SWEAT SPACE
        </h2>
        <h2
        className="text-9xl italic text-white font-semibold leading-tight absolute"
        >
      # SAFE SWEAT <span className="text-red-500">SPACE</span>
      </h2>

      </div>
    </div>
  );
};

export default GymComponent;
