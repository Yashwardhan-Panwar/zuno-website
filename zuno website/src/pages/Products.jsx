import React, { useState } from 'react';
import BikeTypeCard from '../components/ProductCard';
import { bikeTypes } from '../data/bikes';

export default function Products() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">Our Fleet</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the bike that fits your riding style. All available now at ZUNO stations across the city.
          </p>
        </div>

        {/* Info Box */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-12">
          <p className="text-gray-700 text-center">
            🚴 <span className="font-bold">Not ready to buy?</span> No problem! ZUNO bikes are available for rent at affordable rates. 
            <span className="font-bold text-blue-600"> Download the app</span> and find the nearest station to start riding!
          </p>
        </div>

        {/* Bike Types Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {bikeTypes.map((bike) => (
            <BikeTypeCard key={bike.id} bike={bike} />
          ))}
        </div>

        {/* Pricing Section */}
        <div className="mt-20 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 rounded-2xl p-12 text-white text-center">
          <h2 className="text-4xl font-bold mb-6">How Much Does It Cost?</h2>
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div>
              <p className="text-3xl font-bold text-blue-400">₹2/min</p>
              <p className="text-gray-300">Pay per ride</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-cyan-400">₹99</p>
              <p className="text-gray-300">Daily pass</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-400">₹799</p>
              <p className="text-gray-300">Monthly pass</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-cyan-400">₹6,999</p>
              <p className="text-gray-300">Annual pass</p>
            </div>
          </div>
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition transform hover:scale-105">
            📱 Download App & Ride
          </button>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Bike Questions?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-6 rounded-lg">
              <p className="font-bold text-lg mb-2">🚲 Can I choose which bike?</p>
              <p className="text-gray-700">
                Yes! The ZUNO app shows all available bikes at nearby stations. Pick your favorite!
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg">
              <p className="font-bold text-lg mb-2">⚡ How are they maintained?</p>
              <p className="text-gray-700">
                ZUNO maintains all bikes. They're checked daily and ready to ride anytime.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg">
              <p className="font-bold text-lg mb-2">🔋 How long do batteries last?</p>
              <p className="text-gray-700">
                All bikes have sufficient range for daily commutes (45-70 km). Auto-charge at stations.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg">
              <p className="font-bold text-lg mb-2">🌍 Are they eco-friendly?</p>
              <p className="text-gray-700">
                100% electric. Zero emissions. Help reduce carbon footprint with every ride!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
