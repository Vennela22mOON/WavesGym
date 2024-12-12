import React, { useState } from 'react';
import image from "./Logos/Yoga2.webp";
import image4 from "./Logos/Pic1.jpeg";
import GymComponent7 from './GymComponent7';

const CommonComponent = () => {
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
    <div className="space-y-10 px-4 mt-4">
      {/* Grid for Form and Map/Image */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="text-center mb-6">
            <h3 className="text-lg font-bold text-black">FREE TRIAL</h3>
            <p className="text-gray-600">Unlock your fitness potential with our premium facilities.</p>
          </div>
          {!isSubmitted ? (
            <div>
              <h3 className="text-xl font-bold text-black mb-4 text-center">TRY A FREE WORKOUT</h3>
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

        <div className="space-y-6">
          <iframe
            title="Waves Gym Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.257274485141!2d72.83106541538222!3d19.135509855797836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b61a8b5b7cdb%3A0x2954e7f921fc07b7!2sWaves%20Gym!5e0!3m2!1sen!2sin!4v1702298348123!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-md"
          ></iframe>
          <img
            src={image}
            alt="Yoga"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Full-Width Text Content */}
      <div className="w-full text-center">
        <h1 className="font-bold italic text-7xl p-5 m-5">
          Unlock Your Fitness Potential with Our Free Guest Pass:
        </h1>
        <ul>
          <li>
            <p className="text-4xl p-5 m-5">
              <span className="font-semibold text-4xl">State-of-the-Art Facilities:</span> Explore our expansive 10,000 sq.ft.
              gym in Andheri West, equipped with the latest TechnoGym,
              LifeFitness and Nautilus fitness technology to elevate your workouts.
            </p>
          </li>
          <li className="text-4xl p-5 m-5">
            <span className="font-semibold text-4xl">Complimentary Personal Training Session:</span> Begin your journey with personalized guidance
            from our internationally certified trainers dedicated to your success.
          </li>
          <li className="text-4xl p-5 m-5">
            <span className="font-semibold text-4xl">Secure Locker Access:</span> Enjoy peace of mind with safe storage
            for your belongings as you focus on your fitness goals.
          </li>
        </ul>
      </div>
      <div className="flex justify-center items-center min-h-screen">
  <img
    src={image4}
    alt="Promotional Image"
    className="w-[1000px] h-auto rounded-lg shadow-md"
  />
</div>
<GymComponent7 />

    </div>
  );
};

export default CommonComponent;
