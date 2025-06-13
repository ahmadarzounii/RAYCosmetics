import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-4 py-3 md:flex md:items-center md:justify-between relative">
      {/* Top row */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-pink-600">RAYCosmetics</h1>

        {/* Burger icon only on mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      <div
        className={`md:flex md:items-center md:gap-6 overflow-hidden transition-all duration-300 ease-in-out
          ${menuOpen ? "max-h-60 opacity-100 mt-3" : "max-h-0 opacity-0"}
          md:max-h-full md:opacity-100 md:mt-0`}
      >
        <Link
          to="/products"
          className="block py-2 text-gray-800 hover:text-pink-500 md:py-0 md:px-4"
          onClick={() => setMenuOpen(false)}
        >
          Products
        </Link>
        <Link
          to="/about"
          className="block py-2 text-gray-800 hover:text-pink-500 md:py-0 md:px-4"
          onClick={() => setMenuOpen(false)}
        >
          About
        </Link>
        <Link
          to="/contact"
          className="block py-2 text-gray-800 hover:text-pink-500 md:py-0 md:px-4"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
