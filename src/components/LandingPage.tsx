import React, { useState, useEffect } from 'react';
import productsData from '../data/products.json'; // adjust the path as needed

const whatsappNumber = '96176769266';  // Your WhatsApp number in international format, no "+" or dashes

const SkeletonCard = () => (
  <div className="bg-purple-50 p-4 rounded-xl shadow animate-pulse">
    <div className="w-full h-64 bg-gray-300 rounded mb-4"></div>
    <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-5/6 mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
    <div className="h-10 bg-gray-300 rounded w-full"></div>
  </div>
);

const ProductGrid: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<typeof productsData>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProducts(productsData);
      setLoading(false);
    }, 1500); // simulate loading for 1.5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-12 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold text-violetCustom mb-8">Featured Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
          : products.map((product) => {
              const message = `Hello, I'm interested in the product: ${product.title}`;
              const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                message
              )}`;

              return (
                <div
                  key={product.id}
                  className="bg-purple-50 p-4 rounded-xl shadow hover:shadow-md transition"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-64 object-contain rounded-md mb-4"
                  />
                  <h3 className="text-xl font-semibold text-violetCustom">{product.title}</h3>
                  <p className="text-gray-600 text-sm mt-2 mb-3">{product.description}</p>
                  <p className="text-lg font-bold text-violetCustom mb-2">{product.price}</p>

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
