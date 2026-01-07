import React, { useState } from 'react';
import { stations } from '../data/stations';

export default function StationsSection() {
  const [selectedArea, setSelectedArea] = useState('all');

  const areas = ['all', ...new Set(stations.map(s => s.area))];
  
  const filteredStations = selectedArea === 'all' 
    ? stations 
    : stations.filter(s => s.area === selectedArea);

  return (
    <section id="stations" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4">Our Stations</h2>
        <p className="text-center text-gray-600 text-xl mb-12">
          Stations across the city • Real-time availability • Find nearest one
        </p>

        {/* Map Placeholder */}
        <div className="mb-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-1">
          <div className="bg-white rounded-xl p-12 text-center">
            <p className="text-4xl font-bold text-gray-800 mb-3">🗺️ Interactive Map</p>
            <p className="text-gray-600 mb-8 text-lg">
              Leaflet.js integration with real-time station availability coming soon
            </p>
            <div className="bg-slate-100 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-400 mb-2">Map Placeholder</p>
                <p className="text-gray-500">Will display all stations with live bike counts</p>
              </div>
            </div>
          </div>
        </div>

        {/* Area Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {areas.map(area => (
            <button
              key={area}
              onClick={() => setSelectedArea(area)}
              className={`px-6 py-2 rounded-full font-semibold transition transform hover:scale-105 ${
                selectedArea === area
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {area === 'all' ? '📍 All Areas' : area}
            </button>
          ))}
        </div>

        {/* Stations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStations.map((station) => (
            <div
              key={station.id}
              className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 border-2 border-blue-200 hover:shadow-lg transition transform hover:scale-105"
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900">{station.name}</h3>
                  <p className="text-gray-600 text-sm mt-1">📍 {station.address}</p>
                  <p className="text-gray-500 text-xs mt-1">{station.area}</p>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                    {station.bikes}
                  </div>
                  <div className="text-xs text-gray-600">bikes</div>
                </div>
              </div>

              {/* Capacity Bar */}
              <div className="mb-3">
                <div className="w-full bg-gray-300 rounded-full h-3 mb-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${(station.bikes / station.capacity) * 100}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-600">{station.bikes}/{station.capacity} capacity</p>
              </div>

              {/* Action Button */}
              <button className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold transition transform hover:scale-105">
                🗺️ Get Directions
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg">Showing {filteredStations.length} stations</p>
        </div>
      </div>
    </section>
  );
}
