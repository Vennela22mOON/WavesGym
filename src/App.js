import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Navbar from "./GymComponents/Navbar";
import GymComponent from "./GymComponents/GymComponent";
import GymComponent2 from "./GymComponents/GymComponent2"; 
import GymComponent3 from "./GymComponents/GymComponent3";
import GymComponent4 from "./GymComponents/GymComponent4";
import GymComponent5 from "./GymComponents/GymComponent5";
import GymComponent6 from "./GymComponents/GymComponent6";
import GymComponent7 from "./GymComponents/GymComponent7";
import Footer from "./GymComponents/Footer";
import TryUs from "./GymComponents/TryUs";
import "./App.css";
const App = () => {
  return (
    <div>
       <Router>
      <Navbar />
      <Routes>
        <Route path="/try-us" element={<TryUs />} />  
      </Routes>
    </Router>
      <GymComponent />
      <GymComponent2 />
      <GymComponent3 />
      <GymComponent4 />
      <GymComponent5 />
      <GymComponent6 />
      <GymComponent7 />
      <Footer />
      </div>

  );
};

export default App;
