import React from 'react';
import { bikeTypes } from '../data/stations';

export default function BikeFleet() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4">Our Fleet</h2>
        <p className="text-center text-gray-600 text-xl mb-16">Choose from 3 amazing bike types</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {bikeTypes.map((bike) => (
            <div
              key={bike.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden group"
            >
              {/* Bike Image/Emoji */}
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-8 text-center">
                <div className="text-9xl mb-4 transform group-hover:scale-110 transition duration-300">
                  {bike.emoji}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-slate-900">{bike.name}</h3>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-blue-600 font-bold text-lg">{bike.count} available</span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {bike.color}
                  </span>
                </div>

                {/* Specs Grid */}
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="text-gray-600">Range:</span>
                    <span className="font-bold text-slate-900">{bike.range}</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="text-gray-600">Max Speed:</span>
                    <span className="font-bold text-slate-900">{bike.speed}</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="text-gray-600">Battery:</span>
                    <span className="font-bold text-slate-900">{bike.battery}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Weight:</span>
                    <span className="font-bold text-slate-900">{bike.weight}</span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white py-3 rounded-lg font-bold transition transform hover:scale-105">
                  🚴 Reserve Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-600 mb-6">All bikes include:</p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: "🔒", text: "Smart Lock" },
              { icon: "📍", text: "GPS Tracking" },
              { icon: "🔋", text: "Auto-Charge" },
              { icon: "🛡️", text: "Insurance" },
            ].map((feature, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl mb-2">{feature.icon}</div>
                <p className="font-semibold text-gray-700">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
