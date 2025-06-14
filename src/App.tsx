import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ContactUs from "./components/Contact";
import FloatingContactButton from "./components/FloatingContactButton ";
import Hero from "./components/Hero";
import LandingPage from "./components/LandingPage";
import AboutUs from "./components/AboutUs";



function App() {
  return (
    <Router>
      <Navbar />
       <FloatingContactButton />
      <Routes>
        <Route path="/" element={<Hero />} />
          <Route path="/products" element={<LandingPage />} />
           <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
