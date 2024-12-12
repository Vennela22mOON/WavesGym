import React from "react";
import Image1 from "./Logos/Gym2.jpg";
import GymComponent7 from "./GymComponent7";

const Location = () => {
  return (
    <div>
      {/* Background image with text */}
      <div
        className="bg-cover bg-center h-screen flex items-center justify-center"
        style={{ backgroundImage: `url(${Image1})` }}
      >
        <h1 className="text-white text-7xl md:text-8xl lg:text-9xl font-bold">
          Location
        </h1>
      </div>

      {/* Google Maps iframe */}
      <div className="flex justify-between justify-around justify-center m-15 p-10">
      <div className="mt-6 w-[500px]">
        <iframe
          title="Waves Gym Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.257274485141!2d72.83106541538222!3d19.135509855797836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b61a8b5b7cdb%3A0x2954e7f921fc07b7!2sWaves%20Gym!5e0!3m2!1sen!2sin!4v1702298348123!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div>
        <h1 className="text-4xl font-italic font-semibold m-5 p-5">WAVES GYM</h1>
        <p className="m-3 p-3 text-2xl">Located in the heart of Mumbai, Andheri West, Opposite the Infiniti Mall.</p>
        <p className="m-3 p-3 text-2xl"><span className="font-semibold">Address:</span> 506 Morya Estate, New Link Road,
         Andheri West, Mumbai, 400053.</p>
         <p className="m-3 p-3 text-2xl"><span className="font-semibold">Phone:</span> +91 22 6678 7970
         </p>
         <p className="m-3 p-3 text-2xl"><span className="font-semibold">Mobile: </span>+91 99200 84402</p>
         <h1 className="font-semibld">Business Hours:</h1>
         <p className="m-3 p-3 text-2xl">6 am – 12 am Monday – Saturday</p>
         <p className="m-3 p-3 text-2xl">6 am – 10 pm Sunday</p>
      </div>
      </div>
      <GymComponent7 />
    </div>
  );
};

export default Location;
