import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { stations } from '../data/stations';

export default function RideActive() {
  const location = useLocation();
  const navigate = useNavigate();
  const { bike, startTime, startStation } = location.state || {};

  const [rideTime, setRideTime] = useState(0);
  const [distance, setDistance] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [fare, setFare] = useState(0);
  const [showEndModal, setShowEndModal] = useState(false);
  const [selectedDropStation, setSelectedDropStation] = useState('');

  // Get pickup station (from bike location or passed state)
  const pickupStation = startStation || bike?.location?.station || "City Center Station";

  useEffect(() => {
    if (!bike) {
      navigate('/map');
    }
  }, [bike, navigate]);

  useEffect(() => {
    const timer = setInterval(() => {
      setRideTime(prev => prev + 1);
      const distanceIncrement = (Math.random() * 0.2 + 0.2) / 60;
      setDistance(prev => parseFloat((prev + distanceIncrement).toFixed(2)));
      setSpeed(Math.floor(Math.random() * 15 + 15));
      
      // ✅ REAL-TIME FARE: Calculate based on actual elapsed time
      const elapsedMinutes = Math.ceil(rideTime / 60);
      setFare(elapsedMinutes * 2); // ₹2/min
    }, 1000);

    return () => clearInterval(timer);
  }, [rideTime]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleEndRide = () => {
    if (!selectedDropStation) {
      alert('⚠️ Please select a drop station!');
      return;
    }
    setShowEndModal(true);
  };

  const confirmEndRide = () => {
    // ✅ Calculate final values
    const finalMinutes = Math.ceil(rideTime / 60);
    const finalFare = finalMinutes * 2;

    navigate('/ride-summary', {
      state: {
        bike,
        duration: rideTime,
        durationMins: finalMinutes,
        distance: distance.toFixed(2),
        fare: finalFare,
        startTime,
        endTime: new Date().toISOString(),
        startStation: pickupStation,
        endStation: selectedDropStation
      }
    });
  };

  if (!bike) return null;

  return (
      <div className="min-h-screen pt-20" style={{ background: 'linear-gradient(135deg, #E6F7F6, #1CBBB4)' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">🚴 Ride in Progress</h1>
              <p className="text-gray-600">
                {bike.emoji} {bike.type} • {bike.id}
              </p>
              <p className="text-sm text-blue-600 font-semibold mt-1">
                📍 From: {pickupStation}
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600">{formatTime(rideTime)}</div>
              <p className="text-sm text-gray-500">Duration</p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-5xl mb-2">📍</div>
            <div className="text-3xl font-bold text-blue-600">{distance.toFixed(2)} km</div>
            <p className="text-gray-600 font-semibold">Distance</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-5xl mb-2">⚡</div>
            <div className="text-3xl font-bold text-yellow-600">{speed} km/h</div>
            <p className="text-gray-600 font-semibold">Current Speed</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-5xl mb-2">💰</div>
            <div className="text-3xl font-bold text-green-600">₹{fare}</div>
            <p className="text-gray-600 font-semibold">Current Fare</p>
            <p className="text-xs text-gray-500 mt-1">₹2/min</p>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h3 className="text-xl font-bold mb-4">🗺️ Live Route Tracking</h3>
          <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg h-64 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0">
              <svg className="w-full h-full">
                <path
                  d="M 50 200 Q 150 50, 250 150 T 450 200"
                  stroke="#3B82F6"
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray="10,5"
                  className="animate-pulse"
                />
              </svg>
            </div>
            <div className="text-center z-10">
              <p className="text-6xl mb-4 animate-bounce">{bike.emoji}</p>
              <p className="text-gray-700 text-lg font-semibold">Tracking Your Route</p>
              <p className="text-gray-600">Real-time GPS tracking active</p>
            </div>
          </div>
        </div>

        {/* Battery & Bike Info */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h3 className="text-xl font-bold mb-4">🔋 Bike Status</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-semibold">Battery:</span>
              <span className="text-green-600 font-bold">{bike.battery}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-green-500 to-teal-500 h-3 rounded-full"
                style={{ width: `${bike.battery}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Range: {bike.range}</span>
              <span>Max Speed: {bike.speed}</span>
            </div>
          </div>
        </div>

        {/* ✅ NEW: Drop Station Selector */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <h3 className="text-xl font-bold mb-4">🏁 Select Drop Station</h3>
          <select
            value={selectedDropStation}
            onChange={(e) => setSelectedDropStation(e.target.value)}
            className="w-full border-2 border-blue-200 rounded-xl px-4 py-3 text-lg focus:ring-4 focus:ring-blue-300 focus:border-blue-500"
          >
            <option value="">-- Choose where to park --</option>
            {stations.map(station => (
              <option key={station.id} value={station.name}>
                {station.name} ({station.area})
              </option>
            ))}
          </select>
          <p className="text-sm text-gray-500 mt-2">
            💡 Park at any ZUNO station to complete your ride
          </p>
        </div>

        {/* End Ride Button */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <button
            onClick={handleEndRide}
            disabled={!selectedDropStation}
            className="w-full text-white py-4 rounded-xl font-bold text-lg transition transform hover:scale-105 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ background: 'linear-gradient(135deg, #EF4444, #DC2626)' }}
          >
            {selectedDropStation ? '🛑 End Ride' : '⚠️ Select Drop Station First'}
          </button>
        </div>

        {/* Safety Info */}
        <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-4 mb-6">
          <p className="text-yellow-800 text-center font-semibold">
            ⚠️ You selected: {selectedDropStation || 'No station selected'}
          </p>
        </div>

        {/* End Ride Confirmation Modal */}
        {showEndModal && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">🔒 End Ride?</h2>
              <p className="text-gray-600 text-center mb-6">
                Park at <span className="font-bold text-blue-600">{selectedDropStation}</span>
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700">Duration:</span>
                  <span className="font-bold">{formatTime(rideTime)} ({Math.ceil(rideTime / 60)} mins)</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700">Distance:</span>
                  <span className="font-bold">{distance.toFixed(2)} km</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700">From:</span>
                  <span className="font-bold text-sm">{pickupStation}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700">To:</span>
                  <span className="font-bold text-sm">{selectedDropStation}</span>
                </div>
                <div className="flex justify-between text-lg border-t pt-2 mt-2">
                  <span className="text-gray-700">Total Fare:</span>
                  <span className="font-bold text-green-600">₹{fare}</span>
                </div>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => setShowEndModal(false)}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-3 rounded-lg transition"
                >
                  Cancel
                </button>
              <button
                 onClick={confirmEndRide}
                 className="flex-1 text-white font-bold py-3 rounded-lg transition" style={{ background: 'linear-gradient(135deg, #1CBBB4, #14A79D)' }}
              > 
               Confirm & Lock
              </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
