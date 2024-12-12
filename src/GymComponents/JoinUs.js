import React from 'react'
import imagejoin from "./Logos/join.jpg";
import CommonComponent from './CommonComponent';
const JoinUs=()=> {
    return (
        <div>
            <div 
                className="h-screen bg-cover bg-center flex flex-col items-center justify-center"
                style={{ backgroundImage: `url(${imagejoin})` }}
            >
                <h1 className="text-7xl font-bold font-italic text-white mb-4">MEMBERSHIP</h1>
                <p className="text-2xl text-white">Best Gym</p>
            </div>
            <CommonComponent />

        </div>
        
    )
}
export default JoinUs
