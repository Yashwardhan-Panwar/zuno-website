import React from 'react';
import Hero from '../components/Hero';
import BikeTypeCard from '../components/ProductCard';
import { bikeTypes } from '../data/bikes';

export default function Home() {
  const featuredBikes = bikeTypes.slice(0, 3);

  return (
    <div>
      <Hero />
      
      {/* Featured Bikes Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-slate-50">
        <h2 className="text-5xl font-bold text-center mb-4">Our Fleet</h2>
        <p className="text-center text-gray-600 text-lg mb-16">
          Choose from our premium e-bikes at ZUNO stations across Jaipur
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {featuredBikes.map(bike => (
            <BikeTypeCard key={bike.id} bike={bike} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/products" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-bold transition">
            🚴 Explore All Bikes
          </a>
        </div>
      </section>

      {/* Quick CTA */}
      <section className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Ride?</h2>
        <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition">
          📱 Download App
        </button>
      </section>
    </div>
  );
}
