import React from "react";
import image1 from "./Logos/yoga1.jpg";
import image2 from "./Logos/Yoga2.webp";
import image3 from "./Logos/Yoga3.webp";
import image4 from "./Logos/Yoga4.jpeg";
import image5 from "./Logos/Yoga5.avif";
import image6 from "./Logos/Yoga6.avif";

const GymComponent6 = () => {
  return (
    <div className="bg-black text-white py-16 px-6">
      <div className="text-center mb-12">
        <h2 className="text-lg uppercase tracking-wide text-gray-400">
          Experience Waves Gym
        </h2>
        <h1 className="mt-4 text-4xl md:text-5xl font-bold text-orange-500">
          Experience The Best Group Exercise Classes In Mumbai
        </h1>
      </div>

      {/* Slider Container */}
      <div className="relative overflow-hidden">
        <div className="flex animate-slide-left">
          {/* Images Group */}
          {[image1, image2, image3, image4, image5, image6].map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full md:w-1/3 px-4"
            >
              <div className="relative">
                <img
                  src={image}
                  alt={`Yoga Class ${index + 1}`}
                  className={`rounded-lg shadow-lg object-cover ${index === 4 ? 'h-64 object-cover' : 'h-80'}`} // Decrease height for the 5th image (index 4)
                />
                <div className="absolute bottom-4 left-4 right-4 text-center text-sm font-bold bg-black bg-opacity-50 p-2 rounded-md">
                JOIN THE JUMBA FITNESS AT WAVES GYM {index + 1} 
                </div>
              </div>
            </div>
          ))}
          
          {/* Duplicate Images to Enable Infinite Slide */}
          {[image1, image2, image3, image4, image5, image6].map((image, index) => (
            <div
              key={index + 6}  // To make sure the duplicate images have a unique key
              className="flex-shrink-0 w-full md:w-1/3 px-4"
            >
              <div className="relative">
                <img
                  src={image}
                  alt={`Yoga Class ${index + 1}`}
                  className={`rounded-lg shadow-lg object-cover ${index === 4 ? 'h-64 object-cover' : 'h-80'}`} // Decrease height for the 5th image (index 4)
                />
                <div className="absolute bottom-4 left-4 right-4 text-center text-sm font-bold bg-black bg-opacity-50 p-2 rounded-md">
                  JOIN THE JUMBA FITNESS AT WAVES GYM {index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-8">
        <button className="px-6 py-3 bg-orange-500 text-white rounded-md font-medium hover:bg-orange-600">
          Book A Free Class
        </button>
      </div>
    </div>
  );
};

export default GymComponent6;
