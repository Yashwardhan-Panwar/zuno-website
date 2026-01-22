import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import BikeTypeCard from '../components/ProductCard';
import { bikeTypes } from '../data/bikes';
import { stations, getTotalBikes } from '../data/stations';

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
          <Link 
            to="/products" 
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-bold transition inline-block"
          >
            🚴 Explore All Bikes
          </Link>
        </div>
      </section>

      {/* ✅ NEW: Map Preview Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">🗺️ Find Bikes Near You</h2>
            <p className="text-gray-600 text-xl">
              {getTotalBikes()} bikes available across {stations.length} stations in Jaipur
            </p>
          </div>

          {/* Station Quick Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {stations.slice(0, 4).map((station) => (
              <div
                key={station.id}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-200 text-center"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {station.bikes}
                </div>
                <div className="text-sm font-semibold text-gray-700 mb-1">
                  {station.name}
                </div>
                <div className="text-xs text-gray-500">{station.area}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex justify-center gap-4">
            <Link
              to="/map"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition transform hover:scale-105 shadow-lg"
            >
              🗺️ View Live Map
            </Link>
            <Link
              to="/scan"
              className="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-500 px-8 py-4 rounded-xl font-bold text-lg transition transform hover:scale-105"
            >
              📱 Scan QR Code
            </Link>
          </div>
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
