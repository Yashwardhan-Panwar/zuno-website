import React from 'react';
import { Link } from 'react-router-dom';
import { stations, getTotalBikes } from '../data/stations';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center justify-center text-white pt-20"
        style={{ 
          background: 'linear-gradient(135deg, #1CBBB4 0%, #14A79D 100%)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in">
            ⚡ Ride the Future
          </h1>
          <p className="text-2xl md:text-3xl mb-8 opacity-90">
            Affordable Electric Mobility for Everyone
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto opacity-80">
            Empowering low and medium-tier cities with practical, cost-effective e-bikes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/map"
              className="bg-white text-[#1CBBB4] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
            >
              🗺️ Find Bikes Near You
            </Link>
            <Link
              to="/scan"
              className="bg-[#1F3A3C] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-xl"
            >
              📱 Scan QR & Ride
            </Link>
          </div>

          {/* Live Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
              <div className="text-4xl font-bold">{getTotalBikes()}+</div>
              <div className="text-sm opacity-80 mt-2">Active Bikes</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
              <div className="text-4xl font-bold">{stations.length}</div>
              <div className="text-sm opacity-80 mt-2">Stations</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
              <div className="text-4xl font-bold">₹2</div>
              <div className="text-sm opacity-80 mt-2">Per Minute</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
              <div className="text-4xl font-bold">24/7</div>
              <div className="text-sm opacity-80 mt-2">Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Find Stations Section (Moved from bottom) */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4" style={{ color: '#1F3A3C' }}>
              🗺️ Find Bikes Near You
            </h2>
            <p className="text-gray-600 text-xl">
              {getTotalBikes()} bikes available across {stations.length} stations in Jaipur
            </p>
          </div>

          {/* Station Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {stations.slice(0, 4).map((station) => (
              <div
                key={station.id}
                className="rounded-xl p-6 border-2 text-center hover:shadow-xl transition-all transform hover:scale-105"
                style={{ 
                  backgroundColor: '#E6F7F6',
                  borderColor: '#1CBBB4'
                }}
              >
                <div className="text-4xl font-bold mb-2" style={{ color: '#1CBBB4' }}>
                  {station.bikes}
                </div>
                <div className="text-sm font-semibold text-gray-800 mb-1">
                  {station.name}
                </div>
                <div className="text-xs text-gray-600">{station.area}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/map"
              className="bg-gradient-to-r from-[#1CBBB4] to-[#14A79D] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg text-center"
            >
              🗺️ View Live Map
            </Link>
            <Link
              to="/scan"
              className="bg-white text-[#1CBBB4] border-2 px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 text-center"
              style={{ borderColor: '#1CBBB4' }}
            >
              📱 Scan QR Code
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20" style={{ backgroundColor: '#E6F7F6' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center mb-16" style={{ color: '#1F3A3C' }}>
            How It Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: '🗺️', title: 'Find a Bike', desc: 'Locate nearest station on map' },
              { icon: '📱', title: 'Scan QR', desc: 'Unlock bike with QR code' },
              { icon: '🚴', title: 'Ride', desc: 'Enjoy your electric ride' },
              { icon: '🅿️', title: 'Park', desc: 'Return at any station' }
            ].map((step, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all">
                <div className="text-6xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#1CBBB4' }}>
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section 
        className="text-white py-20 text-center"
        style={{ 
          background: 'linear-gradient(135deg, #1CBBB4 0%, #14A79D 100%)'
        }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Ride?</h2>
        <p className="text-xl mb-8 opacity-90">Join thousands riding electric in Jaipur</p>
        <Link
          to="/scan"
          className="bg-white text-[#1CBBB4] px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all inline-block transform hover:scale-105 shadow-xl"
        >
          🚴 Start Your First Ride
        </Link>
      </section>
    </div>
  );
}
