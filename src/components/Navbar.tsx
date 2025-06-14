import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../images/Logo.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animateLogo, setAnimateLogo] = useState(false);
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    // Stop logo spin after 1s and show text
    const timer = setTimeout(() => {
      setShowTitle(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleLogoClick = () => {
    setAnimateLogo(true);
    setTimeout(() => setAnimateLogo(false), 600);
  };

  return (
    <nav className="bg-violetCustom shadow-md px-4 py-3 md:flex md:items-center md:justify-between relative">
      {/* Top row */}
      <div className="flex justify-between items-center">
     <div className="flex items-center gap-2">
  <div
    onClick={handleLogoClick}
    className={`w-16 h-16 bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transition-transform duration-500 ${
      animateLogo ? "scale-110 rotate-6" : ""
    }`}
  >
    <img
      src={Logo}
      alt="Logo"
      className="w-full h-full object-cover"
    />
  </div>

  <h1
    className={`text-4xl text-white font-semibold tracking-wide transition-all duration-700 ease-out
      ${showTitle ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
    `}
    style={{ fontFamily: "Georgia, serif" }}
  >
    Cosmetics
  </h1>
</div>



        {/* Burger menu icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu links */}
      <div
        className={`md:flex md:items-center md:gap-6 overflow-hidden transition-all duration-300 ease-in-out
          ${menuOpen ? "max-h-60 opacity-100 mt-3" : "max-h-0 opacity-0"}
          md:max-h-full md:opacity-100 md:mt-0`}
      >
        <Link
          to="/products"
          className="block py-2 text-white hover:text-red-200 md:py-0 md:px-4"
          onClick={() => setMenuOpen(false)}
        >
          Products
        </Link>
        <Link
          to="/about"
          className="block py-2 text-white hover:text-red-200 md:py-0 md:px-4"
          onClick={() => setMenuOpen(false)}
        >
          About
        </Link>
        <Link
          to="/contact"
          className="block py-2 text-white hover:text-red-200 md:py-0 md:px-4"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </Link>
      </div>

      {/* Custom animation keyframe */}
      <style>{`
        @keyframes spinOnce {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spinOnce {
          animation: spinOnce 1s ease-in-out;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
