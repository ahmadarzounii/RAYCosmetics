import React from 'react';
import products from '../data/products.json'; // adjust the path as needed

const whatsappNumber = '96176769266';  // Your WhatsApp number in international format, no "+" or dashes

const ProductGrid: React.FC = () => {
  return (
    <section className="py-12 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold text-pink-600 mb-8">Featured Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product) => {
          const message = `Hello, I'm interested in the product: ${product.title}`;
         const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

          return (
            <div
              key={product.id}
              className="bg-pink-50 p-4 rounded-xl shadow hover:shadow-md transition"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-pink-700">{product.title}</h3>
              <p className="text-gray-600 text-sm mt-2 mb-3">{product.description}</p>
              <p className="text-lg font-bold text-pink-600 mb-2">{product.price}</p>

              <div className="flex justify-center text-yellow-400 mb-4">
                {Array.from({ length: product.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09L5.845 12 1 7.91l6.061-.88L10 2l2.939 5.03 6.061.88L14.155 12l1.723 6.09z" />
                  </svg>
                ))}
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
              >
                Contact on WhatsApp
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductGrid;
