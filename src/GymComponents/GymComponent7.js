import React from 'react';
import GymLogo1 from "./Logos/logo-waves-gym.svg"; 
import FacebookIcon from "./Logos/facebook.png"; 
import InstagramIcon from "./Logos/Instagram.jpg";
import TwitterIcon from "./Logos/twitter.png"; 

const GymComponent7 = () => {
  return (  
    <div className="bg-black text-white flex flex-row items-start justify-around space-x-20 m-3" style={{ height: "100vh", boxSizing: "border-box" }}>
      {/* Logo and Contact Info */}
      <div className="text-center space-y-4 p-3">
        <img src={GymLogo1} className="h-20 mb-3" alt="Waves Gym Logo" />
        <p className="text-sm">
          504-505, Morya Estate Commercial PRM LTD,
          <br /> Oshiwara Link Road, Andheri West,
          <br /> Mumbai Suburban, Maharashtra, 400053
        </p>
        <h1 className="mt-4">
          <span className="font-semibold">Phone:</span> +9122 6678 7970
        </h1>
        <h1>
          <span className="font-semibold">Email:</span> info@wavesgym.com
        </h1>
      </div>

      {/* Sitemap */}
      <div className="text-center space-y-4 p-3">
        <h1 className="text-orange-500 text-4xl mb-3">Sitemap</h1>
        <ul className="space-y-2">
          {[
            "Try Us", 
            "Join Us", 
            "Personal Training", 
            "Transformation", 
            "In Body Assessment", 
            "Classes", 
            "Offers", 
            "Wedding Fitness", 
            "Careers at Waves Gym", 
            "About Us", 
            "Terms & Conditions", 
            "Membership Policy"
          ].map((item, index) => (
            <li
              key={index}
              className="hover:text-orange-500 cursor-pointer transition-all duration-200"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Social Media */}
      <div className="text-center space-y-4 p-3">
        <h1 className="text-orange-500 text-4xl italic mb-3">Follow Us</h1>
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.facebook.com/wavesgym"
            className="hover:opacity-80 transition-all duration-200"
            aria-label="Facebook"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src={FacebookIcon} alt="Facebook" className="h-8 w-8" />
          </a>
          <a
            href="https://www.instagram.com/wavesgym/"  
            className="hover:opacity-80 transition-all duration-200"
            aria-label="Instagram"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src={InstagramIcon} alt="Instagram" className="h-8 w-8" />
          </a>
          <a
            href="https://twitter.com/your-gym"  
            className="hover:opacity-80 transition-all duration-200"
            aria-label="Twitter"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src={TwitterIcon} alt="Twitter" className="h-8 w-8" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default GymComponent7;
