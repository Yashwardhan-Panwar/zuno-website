import React, { useState } from 'react';
import { liveBikes, getAvailableBikesCount } from '../data/mapBikes';
import { stations } from '../data/bikes';

export default function Map() {
  const [selectedBike, setSelectedBike] = useState(null);
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterType, setFilterType] = useState('all');

  // Filter bikes based on status and type
  const filteredBikes = liveBikes.filter(bike => {
    const statusMatch = filterStatus === 'all' || bike.status === filterStatus;
    const typeMatch = filterType === 'all' || bike.type === filterType;
    return statusMatch && typeMatch;
  });

  const getBatteryColor = (battery) => {
    if (battery >= 70) return 'text-green-600';
    if (battery >= 40) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getStatusBadge = (status) => {
    const badges = {
      'available': 'bg-green-100 text-green-800',
      'in-use': 'bg-blue-100 text-blue-800',
      'low-battery': 'bg-red-100 text-red-800',
    };
    return badges[status] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">🗺️ Find Bikes Near You</h1>
          <p className="text-xl">
            {getAvailableBikesCount()} bikes available across {stations.length} stations in Jaipur
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Status Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Filter by Status:
              </label>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Status</option>
                <option value="available">Available</option>
                <option value="in-use">In Use</option>
                <option value="low-battery">Low Battery</option>
              </select>
            </div>

            {/* Type Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Filter by Type:
              </label>
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Types</option>
                <option value="Standard City Bike">Standard City Bike 🚲</option>
                <option value="Premium Electric Bike">Premium Electric Bike 🚴</option>
                <option value="Mountain E-Bike">Mountain E-Bike 🏔️</option>
              </select>
            </div>
          </div>

          <div className="mt-4 flex gap-4 text-sm flex-wrap">
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              Available ({liveBikes.filter(b => b.status === 'available').length})
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
              In Use ({liveBikes.filter(b => b.status === 'in-use').length})
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              Low Battery ({liveBikes.filter(b => b.status === 'low-battery').length})
            </span>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">📍 Interactive Map (Coming Soon)</h2>
          <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <p className="text-6xl mb-4">🗺️</p>
              <p className="text-gray-700 text-lg font-semibold">
                Google Maps / Leaflet Integration
              </p>
              <p className="text-gray-600">
                Will show all stations and bikes with real-time locations
              </p>
            </div>
          </div>
        </div>

        {/* Bikes Grid */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-6">
            Available Bikes ({filteredBikes.length})
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBikes.map((bike) => (
              <div
                key={bike.id}
                onClick={() => setSelectedBike(bike)}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition cursor-pointer p-6"
              >
                {/* Bike Header */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-5xl mb-2 block">{bike.emoji}</span>
                    <h3 className="text-xl font-bold text-gray-900">{bike.type}</h3>
                    <p className="text-sm text-gray-600">{bike.id}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusBadge(bike.status)}`}>
                    {bike.status === 'in-use' ? 'IN USE' : bike.status === 'low-battery' ? 'CHARGING' : 'AVAILABLE'}
                  </span>
                </div>

                {/* Battery */}
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-semibold text-gray-700">Battery</span>
                    <span className={`text-sm font-bold ${getBatteryColor(bike.battery)}`}>
                      {bike.battery}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        bike.battery >= 70 ? 'bg-green-500' :
                        bike.battery >= 40 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${bike.battery}%` }}
                    ></div>
                  </div>
                </div>

                {/* Specs */}
                <div className="mb-4 bg-slate-50 p-3 rounded-lg">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Range:</span>
                    <span className="font-semibold">{bike.range}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Speed:</span>
                    <span className="font-semibold">{bike.speed}</span>
                  </div>
                </div>

                {/* Location */}
                <div className="mb-4 bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-blue-900">📍 {bike.location.station}</p>
                  <p className="text-xs text-gray-600">
                    {bike.location.lat.toFixed(4)}°N, {bike.location.lng.toFixed(4)}°E
                  </p>
                </div>

                {/* Stats */}
                <div className="flex justify-between text-sm mb-4 text-gray-600">
                  <span>Last ride: <span className="font-semibold">{bike.lastRide}</span></span>
                  <span>Rides: <span className="font-semibold">{bike.rideCount}</span></span>
                </div>

                {/* Action Button */}
                {bike.status === 'available' && (
                  <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-lg transition">
                    🚴 Reserve Now
                  </button>
                )}
                {bike.status === 'in-use' && (
                  <button className="w-full bg-gray-300 text-gray-600 font-bold py-2 rounded-lg cursor-not-allowed" disabled>
                    Currently In Use
                  </button>
                )}
                {bike.status === 'low-battery' && (
                  <button className="w-full bg-red-100 text-red-600 font-bold py-2 rounded-lg cursor-not-allowed" disabled>
                    ⚠️ Low Battery - Charging
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Selected Bike Modal */}
        {selectedBike && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-lg w-full p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-6xl block mb-2">{selectedBike.emoji}</span>
                  <h2 className="text-2xl font-bold">{selectedBike.type}</h2>
                  <p className="text-gray-600">{selectedBike.id}</p>
                </div>
                <button
                  onClick={() => setSelectedBike(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-semibold text-blue-900">📍 Location</p>
                  <p className="text-gray-700">{selectedBike.location.station}</p>
                  <p className="text-sm text-gray-600">
                    {selectedBike.location.lat.toFixed(4)}°N, {selectedBike.location.lng.toFixed(4)}°E
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="font-semibold text-green-900">🔋 Battery: {selectedBike.battery}%</p>
                  <p className="text-sm text-gray-600">Range: {selectedBike.range} | Speed: {selectedBike.speed}</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Last ride: {selectedBike.lastRide}</p>
                  <p className="text-sm text-gray-600">Total rides: {selectedBike.rideCount}</p>
                </div>

                {selectedBike.status === 'available' && (
                  <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-3 rounded-lg transition">
                    🚴 Reserve & Unlock
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
