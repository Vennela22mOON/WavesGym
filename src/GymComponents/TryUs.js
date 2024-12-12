import React, { useState } from "react";
import image1 from "./Logos/Bg1.avif";
import I1 from "./Logos/Pic1.jpeg";
import GymComponent7 from './GymComponent7';
const TryUs = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    terms: false,
  }); 
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setIsSubmitted(true);
    setFormData({ firstName: "", lastName: "", mobile: "", email: "", terms: false }); 
  };

  return (
    <div>
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${image1})` }}
      >
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50 px-6 text-center">
          <h1 className="text-white text-5xl font-extrabold italic mb-4">
            1 DAY FREE GUEST PASS
          </h1>
          <h2 className="text-white text-2xl font-medium max-w-3xl">
            AT THE BEST GYM NEAR YOU – WAVES GYM, ANDHERI WEST!
          </h2>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center p-8 space-y-8 md:space-y-0 md:space-x-8">
        <div className="text-center md:w-1/2">
          <h1 className="text-black text-7xl font-bold italic mb-10">
            1 Day Free Guest Pass at the Best Gym Near You – Waves Gym, Andheri West!
          </h1>
          <p className="text-gray-800 text-lg leading-relaxed">
            Are you looking for a{" "}
            <span className="font-semibold text-red-600">“gym near me”</span> or
            the <span className="font-semibold text-red-600">best gym in Mumbai</span> 
            to kickstart your fitness journey? Your search ends here! Experience unparalleled fitness opportunities with our EXCLUSIVE{" "}
            <span className="font-bold text-green-600">1 Day Free Guest Pass</span> at{" "}
            <span className="font-bold text-green-600">Waves Gym</span> in Andheri West.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <iframe
            title="Waves Gym Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.257274485141!2d72.83106541538222!3d19.135509855797836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b61a8b5b7cdb%3A0x2954e7f921fc07b7!2sWaves%20Gym!5e0!3m2!1sen!2sin!4v1702298348123!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center p-8 space-y-8 md:space-y-0 md:space-x-8">
        <div className="text-center md:w-1/2">
          <img
            src={I1}
            alt="Waves Gym"
            className="w-3/4 h-auto rounded-lg shadow-lg mb-4"
          />
          <h3 className="text-lg font-bold text-black">FREE TRIAL</h3>
          <p className="text-gray-600">Unlock your fitness potential with our premium facilities.</p>
        </div>
        <div className="w-full md:w-1/2 text-center">
          {!isSubmitted ? (
            <div>
              <h3 className="text-xl font-bold text-black mb-4">TRY A FREE WORKOUT</h3>
              <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                  required
                />
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                  required
                />
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="terms"
                    checked={formData.terms}
                    onChange={handleChange}
                    className="w-5 h-5 border-gray-300 rounded focus:ring-2 focus:ring-green-600"
                    required
                  />
                  <label htmlFor="terms" className="text-gray-700 text-sm">
                    I am interested in 1 Day Free Guest Pass Waves Gym Andheri W, Mumbai. Please call me.
                  </label>
                </div>
                <button
                  type="submit"
                  className="p-3 bg-green-600 text-white font-bold rounded-md hover:bg-green-700"
                >
                  GET YOUR FREE PASS NOW
                </button>
              </form>
            </div>
          ) : (
            <div className="text-center">
              <h2 className="text-2xl font-bold text-green-600 mb-4">Thank You!</h2>
              <p className="text-gray-800">
                Your request for the 1 Day Free Guest Pass has been received. Our team will contact you shortly.
              </p>
            </div>
          )}
        </div>
      </div>
      <div>
      <h1 className="font-bold italic text-7xl p-5 m-5">Unlock Your Fitness Potential with Our Free Guest Pass:</h1>
      <ul>
        <li ><p className=" text-4xl p-5 m-5"><span className="font-semibold text-4xl p-5 m-5">State-of-the-Art Facilities:</span> Explore our expansive 10,000 sq.ft.
           gym in Andheri West, equipped with the latest TechnoGym,
           LifeFitness and Nautilus fitness technology to elevate your workouts.</p></li>
           <li className=" text-4xl p-5 m-5"><span className="font-semibold text-4xl p-5 m-5">Complimentary Personal Training Session:</span> Begin your journey with personalized guidance 
            from our internationally certified trainers dedicated to your success.</li>
            <li className="text-4xl p-5 m-5">
           <span className="font-semibold text-4xl p-5 m-5"> Secure Locker Access:</span> Enjoy peace of mind with safe storage
             for your belongings as you focus on your fitness goals.
            </li>
      </ul>

      </div>
      <GymComponent7 />
    </div>
  );
};

export default TryUs;
