import React from 'react'
import gymimage from "./Logos/GymBody.jpg";
import CommonComponent from './CommonComponent';
const InbodyAssesment=()=> {
    return (
        <div>
            <div 
                className="h-screen bg-cover bg-center flex flex-col items-center justify-center"
                style={{ backgroundImage: `url(${gymimage})` }}
            >
                <h1 className="text-7xl font-bold font=-italic text-white m-4">InBody Assessment: First Step to Fitness at Waves Gym</h1>
                <p className="text-2xl text-white">Our Latest Offers</p>
            </div>
            <CommonComponent />
        </div>
        
    )
}

export default InbodyAssesment
