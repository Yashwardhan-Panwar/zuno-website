import React from 'react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-6xl font-bold mb-4">
          🚴‍♂️ Next Generation E-Bikes
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Fast • Eco-Friendly • Affordable. Experience the Future of Urban Mobility
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg font-bold text-lg transition transform hover:scale-105">
            🛍️ Shop Now
          </button>
          <button className="border-2 border-blue-400 text-blue-400 px-8 py-3 rounded-lg font-bold hover:bg-blue-400 hover:text-white transition">
            📖 Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
