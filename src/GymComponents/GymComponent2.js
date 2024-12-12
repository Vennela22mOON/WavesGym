import React, { useState } from 'react';

const GymComponent2 = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    choice: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault(); 
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        mobile: '',
        choice: '',
      });
    }, 2000);
  };
  const isFormValid =
    formData.name && formData.email && formData.mobile && formData.choice;

  return (
    <div className="text-center bg-gray-800 text-white py-10 px-4">
      <p className="text-lg md:text-xl">EXPERIENCE THE FITNESS WAVE</p>
      <p className="text-lg md:text-xl">At Mumbai's Friendliest Gym IN ANDHERI WEST!</p>
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl italic font-bold mt-5">
        GET A FREE DAY PASS
      </h1>
      <form className="mt-10 max-w-md mx-auto space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-left text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            placeholder="Enter your name"
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-left text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder="Enter your email"
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="mobile" className="block text-left text-sm font-medium">
            Mobile
          </label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            placeholder="Enter your mobile number"
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="choice" className="block text-left text-sm font-medium">
            Choose an Option
          </label>
          <select
            id="choice"
            name="choice"
            value={formData.choice}
            className="w-full mt-1 p-3 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            onChange={handleChange}
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="personal-training">Personal Training</option>
            <option value="group-classes">Group Classes</option>
            <option value="yoga">Yoga</option>
            <option value="cardio">Cardio</option>
            <option value="weight-lifting">Weight Lifting</option>
          </select>
        </div>
        <div className="relative">
          <button
            type="submit"
            className={`w-full sm:w-40 py-3 rounded-lg font-bold transition duration-300 ${
              isSubmitting || !isFormValid
                ? 'bg-gray-500 cursor-not-allowed'
                : 'bg-red-500 hover:bg-red-600'
            } text-white`}
            disabled={isSubmitting || !isFormValid}
          >
            {isSubmitting ? (
              <div className="flex justify-center items-center">
                <div className="w-5 h-5 border-2 border-dotted border-white rounded-full animate-spin"></div>
              </div>
            ) : (
              'GET START'
            )}
          </button>
        </div>
      </form>
      {isSubmitted && (
        <div className="mt-6 text-center">
          <p className="text-lg md:text-xl font-semibold mt-2">
          We have received your request and a member of our team will get back to you soon.
          </p>
        </div>
      )}
    </div>
  );
};

export default GymComponent2;
