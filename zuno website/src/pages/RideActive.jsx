import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function RideActive() {
  const location = useLocation();
  const navigate = useNavigate();
  const { bike, startTime } = location.state || {};

  const [rideTime, setRideTime] = useState(0); // seconds
  const [distance, setDistance] = useState(0); // km
  const [speed, setSpeed] = useState(0); // km/h
  const [fare, setFare] = useState(0); // rupees
  const [showEndModal, setShowEndModal] = useState(false);

  // If no bike data, redirect to map
  useEffect(() => {
    if (!bike) {
      navigate('/map');
    }
  }, [bike, navigate]);

  // Timer - updates every second
  useEffect(() => {
    const timer = setInterval(() => {
      setRideTime(prev => prev + 1);
      
      // Simulate distance increase (random between 0.2-0.4 km per minute)
      const distanceIncrement = (Math.random() * 0.2 + 0.2) / 60; // per second
      setDistance(prev => parseFloat((prev + distanceIncrement).toFixed(2)));
      
      // Simulate speed variation (15-30 km/h)
      setSpeed(Math.floor(Math.random() * 15 + 15));
      
      // Calculate fare: ₹2 per minute
      const minutes = Math.floor((Date.now() - new Date(startTime)) / 60000);
      setFare(minutes * 2);
    }, 1000);

    return () => clearInterval(timer);
  }, [startTime]);

  // Format time as MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleEndRide = () => {
    setShowEndModal(true);
  };

  const confirmEndRide = () => {
    navigate('/ride-summary', {
      state: {
        bike,
        duration: rideTime,
        distance,
        fare,
        startTime,
        endTime: new Date().toISOString()
      }
    });
  };

  if (!bike) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-teal-500 to-blue-500 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">🚴 Ride in Progress</h1>
              <p className="text-gray-600">
                {bike.emoji} {bike.type} • {bike.id}
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
          {/* Distance */}
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-5xl mb-2">📍</div>
            <div className="text-3xl font-bold text-blue-600">{distance} km</div>
            <p className="text-gray-600 font-semibold">Distance</p>
          </div>

          {/* Speed */}
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-5xl mb-2">⚡</div>
            <div className="text-3xl font-bold text-yellow-600">{speed} km/h</div>
            <p className="text-gray-600 font-semibold">Current Speed</p>
          </div>

          {/* Fare */}
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-5xl mb-2">💰</div>
            <div className="text-3xl font-bold text-green-600">₹{fare}</div>
            <p className="text-gray-600 font-semibold">Current Fare</p>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h3 className="text-xl font-bold mb-4">🗺️ Live Route Tracking</h3>
          <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg h-64 flex items-center justify-center relative overflow-hidden">
            {/* Animated Route Line */}
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
              <p className="text-gray-700 text-lg font-semibold">
                Tracking Your Route
              </p>
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

        {/* End Ride Button */}
        <button
          onClick={handleEndRide}
          className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold py-4 rounded-xl text-xl transition transform hover:scale-105 shadow-lg"
        >
          🔒 End Ride & Lock Bike
        </button>

        {/* Safety Info */}
        <div className="mt-6 bg-yellow-50 border-2 border-yellow-300 rounded-xl p-4">
          <p className="text-yellow-800 text-center font-semibold">
            ⚠️ Remember to park at a ZUNO station when ending your ride
          </p>
        </div>

        {/* End Ride Confirmation Modal */}
        {showEndModal && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                🔒 End Ride?
              </h2>
              <p className="text-gray-600 text-center mb-6">
                Are you parked at a ZUNO station?
              </p>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700">Duration:</span>
                  <span className="font-bold">{formatTime(rideTime)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700">Distance:</span>
                  <span className="font-bold">{distance} km</span>
                </div>
                <div className="flex justify-between text-lg">
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
                  className="flex-1 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-bold py-3 rounded-lg transition"
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
