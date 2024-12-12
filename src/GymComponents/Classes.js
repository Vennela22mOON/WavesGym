import React from 'react';
import classesimage from "./Logos/Classimage.webp";
import image1 from "./Logos/yoga1.jpg";
import image2 from "./Logos/Yoga2.webp";
import image3 from "./Logos/Yoga3.webp";
import image4 from "./Logos/Yoga4.jpeg";
import image5 from "./Logos/Yoga5.avif";
import GymComponent7 from './GymComponent7';

const Classes = () => {
    return (
        <div>
            <div 
                className="h-screen bg-cover bg-center flex flex-col items-center justify-center"
                style={{ backgroundImage: `url(${classesimage})` }}
            >
                <h1 className="text-4xl font-bold text-white mb-4">Classes</h1>
                <p className="text-2xl text-white">The best group exercise classes in Mumbai</p>
            </div>
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[image1, image2, image3, image4, image5].map((img, index) => (
                    <div key={index} className="relative group">
                        <img
                            src={img}
                            alt={`Yoga ${index + 1}`}
                            className="w-full h-64 object-cover shadow-lg rounded-lg transition-transform duration-300 transform group-hover:scale-105"
                        />
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2  text-orange-500 text-4xl font-semibold px-4 py-2 rounded shadow-md">
                          Yoga Classes
                        </div>
                    </div>
                ))}
            </div>
            <GymComponent7 />
        </div>
    );
};

export default Classes;
