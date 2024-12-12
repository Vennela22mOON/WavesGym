import React from 'react'
import image from "./Logos/trans.jpg"
import CommonComponent from './CommonComponent'
const Transform=()=> {
    return (
        <div>
            <div 
                className="h-screen bg-cover bg-center flex flex-col items-center justify-center"
                style={{ backgroundImage: `url(${image})` }}
            >
                <h1 className="text-7xl font-bold font-italic text-white mb-4">Transformation</h1>
                <p className="text-2xl text-white">Best Gym</p>
            </div>
            <CommonComponent />
        </div>
        
    )
}
export default Transform
