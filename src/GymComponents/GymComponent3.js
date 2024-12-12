import React from 'react';
import trans1 from "./Logos/tranform1.jpg";
import trans2 from "./Logos/transform2.avif";
import trans3 from "./Logos/transform3.jpg";
import gympic from "./Logos/Gym4.jpg";

const GymComponent3 = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-red-500 italic font-bold text-4xl md:text-5xl lg:text-6xl mb-10 text-center p-2 m-2">
        FITNESS TRANSFORMATIONS SUCCESS STORIES
      </h1>
      <div className="w-full md:w-[1000px] h-[400px] md:h-[800px] bg-gray-200 overflow-hidden relative mb-8 flex justify-center items-center mx-auto">
        <div className="absolute top-0 left-0 w-full h-full flex">
          <img
            src={trans1}
            alt="Transform 1"
            className="absolute w-full h-full object-cover animate-slide-zoom-1"
          />
          <img
            src={trans2}
            alt="Transform 2"
            className="absolute w-full h-full object-cover animate-slide-zoom-2"
          />
          <img
            src={trans3}
            alt="Transform 3"
            className="absolute w-full h-full object-cover animate-slide-zoom-3"
          />
        </div>
      </div>
      <div className="w-full md:w-[700px] flex flex-col items-start px-6 md:px-10 mt-8">
        <h1 className="text-lg text-gray-700 mb-4">
          YOUR BODY & YOUR FITNESS REQUIREMENTS ARE UNIQUE. YOUR PERSONAL TRAINING SHOULD REFLECT THAT!
        </h1>
        <h1 className="text-orange-500 font-bold italic text-3xl sm:text-4xl mb-4">
          CERTIFIED PERSONAL TRAINERS
        </h1>
        <h1 className="m-5 p-3 text-sm sm:text-lg">
          Get fit fast with Waves Gym’s 
          <span className="font-extrabold">certified personal trainers.</span> 
          Enjoy cardio, strength, and weight training with top equipment. 
          Join now and make ‘Impossible’ ‘I’m Possible’!
        </h1>

        <button className="bg-orange-500 text-white p-3 m-5 rounded-lg hover:bg-orange-600 transform transition-all duration-300 ease-in-out">
          BOOK A FREE SESSION
        </button>
        <div className="w-full flex justify-center mt-6 mb-8">
          <img src={gympic} alt="Gym" className="w-full sm:w-[400px] md:w-[500px] h-[250px] sm:h-[300px] object-cover rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default GymComponent3;
