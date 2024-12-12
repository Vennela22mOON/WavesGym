import React, { Component } from 'react';
import OffersImage from "./Logos/offers.jpg";
import Coffepic from "./Logos/Coffee.webp";
import rapidpic from "./Logos/rapid.jpg";
import referepic from "./Logos/refere.jpg";
import womanpic from "./Logos/woman.avif";
import GymComponent7 from './GymComponent7';

const Offers = () => {
    return (
        <div>
            <div 
                className="h-screen bg-cover bg-center flex flex-col items-center justify-center"
                style={{ backgroundImage: `url(${OffersImage})` }}
            >
                <h1 className="text-4xl font-bold text-white mb-4">Offers</h1>
                <p className="text-2xl text-white">Our Latest Offers</p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 p-8">
                <div className="flex flex-col items-center">
                    <img src={Coffepic} alt="Coffee Offer" className="w-64 h-64 object-cover rounded-lg shadow-lg" />
                    <p className="text-orange-500 text-4xl mt-4">Coffee Special</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src={rapidpic} alt="Rapid Offer" className="w-64 h-64 object-cover rounded-lg shadow-lg" />
                    <p className="text-orange-500 text-4xl mt-4">Rapid Deals</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src={referepic} alt="Refere Offer" className="w-64 h-64 object-cover rounded-lg shadow-lg" />
                    <p className="text-orange-500 text-4xl mt-4">Refer & Earn</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src={womanpic} alt="Woman Offer" className="w-64 h-64 object-cover rounded-lg shadow-lg" />
                    <p className="text-orange-500 text-4xl mt-4">Exclusive Women Deals</p>
                </div>
            </div>
            <GymComponent7 />
        </div>
    );
};

export default Offers;
