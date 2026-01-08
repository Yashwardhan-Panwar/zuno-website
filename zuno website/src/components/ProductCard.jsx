import React from 'react';

export default function BikeTypeCard({ bike }) {
  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition overflow-hidden hover:scale-105 duration-300">
      {/* Bike Emoji Header */}
      <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-8 text-center">
        <span className="text-7xl">{bike.emoji}</span>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-2xl font-bold text-slate-900 mb-2">{bike.name}</h3>

        {/* Badge */}
        <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
          {bike.color}
        </span>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4">{bike.description}</p>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
          <div className="bg-blue-50 p-2 rounded">
            <span className="font-semibold text-blue-900">Range:</span>
            <p className="text-slate-900">{bike.range}</p>
          </div>
          <div className="bg-blue-50 p-2 rounded">
            <span className="font-semibold text-blue-900">Speed:</span>
            <p className="text-slate-900">{bike.speed}</p>
          </div>
          <div className="bg-teal-50 p-2 rounded">
            <span className="font-semibold text-teal-900">Battery:</span>
            <p className="text-slate-900">{bike.battery}</p>
          </div>
          <div className="bg-teal-50 p-2 rounded">
            <span className="font-semibold text-teal-900">Weight:</span>
            <p className="text-slate-900">{bike.weight}</p>
          </div>
        </div>

        {/* Features */}
        <div className="mb-4">
          <p className="text-xs font-semibold text-gray-600 mb-2">Features:</p>
          <div className="flex flex-wrap gap-1">
            {bike.features.map((feature, i) => (
              <span key={i} className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs">
                ✓ {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Availability */}
        <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded">
          <p className="text-sm text-green-700 font-semibold">{bike.availability}</p>
        </div>

        {/* CTA - Find Station */}
        <button className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold transition transform hover:scale-105">
          📍 Find Station & Ride
        </button>
      </div>
    </div>
  );
}
