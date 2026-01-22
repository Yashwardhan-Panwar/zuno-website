import React from 'react';
import { Link } from 'react-router-dom';
export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden pt-24 pb-32">
      {/* Background animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
            The Future of <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Urban Mobility</span>
          </h1>
         <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
           Navigate Jaipur's traffic with ease. Get to your destination faster.<br />
           Eco-friendly, affordable, and always available across the Pink City.
          </p>


          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105">
              📱 Download App
            </button>
            <Link
             to="/map"
             className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-bold hover:bg-blue-400 hover:text-slate-900 transition inline-block"
          >
             🗺️ Find Stations
            </Link>
          </div>

          {/* Trust badges */}
          <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-gray-700">
            <div className="text-center">
              <p className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">50K+</p>
              <p className="text-gray-300 mt-2">Active Riders</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">10K+</p>
              <p className="text-gray-300 mt-2">Bikes Available</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">5 Cities</p>
              <p className="text-gray-300 mt-2">Across India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
