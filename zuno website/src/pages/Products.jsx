import React from 'react';
import BikeTypeCard from '../components/ProductCard';
import { bikeTypes } from '../data/bikes';

export default function Products() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4" style={{ color: '#1F3A3C' }}>
            Our Fleet
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the bike that fits your riding style. All available now at ZUNO stations across the city.
          </p>
        </div>

        {/* Info Box */}
        <div
          className="rounded-lg p-6 mb-12 border-2"
          style={{ backgroundColor: '#E6F7F6', borderColor: '#1CBBB4' }}
        >
          <p className="text-center text-gray-700">
            🚴 <span className="font-bold">Not ready to buy?</span> No problem! ZUNO bikes are available for rent at affordable rates.
            <span className="font-bold" style={{ color: '#1CBBB4' }}> Download the app</span> and find the nearest station to start riding!
          </p>
        </div>

        {/* Bike Types Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {bikeTypes.map((bike) => (
            <BikeTypeCard key={bike.id} bike={bike} />
          ))}
        </div>

        {/* Pricing Section */}
        <div
          className="mt-20 rounded-2xl p-12 text-center text-white"
          style={{ background: 'linear-gradient(135deg, #1CBBB4, #14A79D)' }}
        >
          <h2 className="text-4xl font-bold mb-6">How Much Does It Cost?</h2>
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div>
              <p className="text-3xl font-bold">₹2/min</p>
              <p className="text-teal-100">Pay per ride</p>
            </div>
            <div>
              <p className="text-3xl font-bold">₹99</p>
              <p className="text-teal-100">Daily pass</p>
            </div>
            <div>
              <p className="text-3xl font-bold">₹799</p>
              <p className="text-teal-100">Monthly pass</p>
            </div>
            <div>
              <p className="text-3xl font-bold">₹6,999</p>
              <p className="text-teal-100">Annual pass</p>
            </div>
          </div>
          <button
            className="px-8 py-3 rounded-lg font-bold transition transform hover:scale-105 shadow"
            style={{ backgroundColor: '#FFFFFF', color: '#1CBBB4' }}
          >
            📱 Download App & Ride
          </button>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#1F3A3C' }}>
            Bike Questions?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#F4F7F8' }}>
              <p className="font-bold text-lg mb-2" style={{ color: '#1F3A3C' }}>
                🚲 Can I choose which bike?
              </p>
              <p className="text-gray-700">
                Yes! The ZUNO app shows all available bikes at nearby stations. Pick your favorite!
              </p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#F4F7F8' }}>
              <p className="font-bold text-lg mb-2" style={{ color: '#1F3A3C' }}>
                ⚡ How are they maintained?
              </p>
              <p className="text-gray-700">
                ZUNO maintains all bikes. They're checked daily and ready to ride anytime.
              </p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#F4F7F8' }}>
              <p className="font-bold text-lg mb-2" style={{ color: '#1F3A3C' }}>
                🔋 How long do batteries last?
              </p>
              <p className="text-gray-700">
                All bikes have sufficient range for daily commutes (45–70 km). Auto-charge at stations.
              </p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#F4F7F8' }}>
              <p className="font-bold text-lg mb-2" style={{ color: '#1F3A3C' }}>
                🌍 Are they eco-friendly?
              </p>
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
