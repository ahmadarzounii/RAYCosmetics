import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate('/products');
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-purple-50 pt-20"
    >
      <h1 className="text-4xl md:text-6xl font-bold text-violetCustom mb-4">
        Glow Naturally with RAYCosmetics
      </h1>
      <p className="text-lg text-gray-700 max-w-xl">
        Discover our premium cosmetic line made from natural, cruelty-free ingredients to enhance your beauty.
      </p>
      <button
        onClick={handleShopNow}
        className="mt-6 px-6 py-3 bg-violetCustom text-white rounded-xl shadow-md hover:bg-purple-300 transition"
      >
        Shop Now
      </button>
    </section>
  );
};

export default Hero;
