import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function RideSummary() {
  const location = useLocation();
  const navigate = useNavigate();
  const rideData = location.state;

  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  // If no ride data, redirect to map
  useEffect(() => {
    if (!rideData || !rideData.bike) {
      navigate('/map');
    }
  }, [rideData, navigate]);

  const handleRateRide = () => {
    if (rating > 0) {
      console.log('Rating saved:', rating, feedback);
      alert('Thanks for rating! 🎉');
      // Here you'd save to backend/localStorage
    }
  };

  if (!rideData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p>Loading ride summary...</p>
        </div>
      </div>
    );
  }

  const { bike, duration, durationMins, distance, fare, startStation, endStation } = rideData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 pt-20 pb-12">
      {/* Header */}
      <div className="bg-white shadow-lg rounded-3xl max-w-4xl mx-auto mb-8">
        <div className="p-8 text-center border-b border-gray-100">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
            Ride Completed! 🎉
          </h1>
          <p className="text-gray-600 text-lg">Here's your ride summary</p>
        </div>
      </div>

      {/* Receipt Card */}
      <div className="max-w-4xl mx-auto px-4 space-y-6">
        {/* Ride Details */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-6">📋 Ride Details</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Bike ID:</span>
                <span className="font-semibold">{bike.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Bike Type:</span>
                <span className="font-semibold">{bike.emoji} {bike.type}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Duration:</span>
                <span className="font-semibold text-green-600">{durationMins} mins</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Distance:</span>
                <span className="font-semibold">{distance} km</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Start:</span>
                <span className="font-semibold text-sm">{startStation}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">End:</span>
                <span className="font-semibold text-sm">{endStation}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Rate:</span>
                <span className="font-semibold">₹2/min</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Battery Used:</span>
                <span className="font-semibold">{bike.battery}% → {Math.max(20, bike.battery - 10)}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Fare Breakdown */}
        <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-3xl shadow-xl p-8 border-4 border-emerald-200">
          <h2 className="text-2xl font-bold mb-6">💰 Fare Breakdown</h2>
          <div className="bg-white rounded-2xl p-6">
            <div className="space-y-3">
              <div className="flex justify-between text-lg">
                <span>Ride Duration: {durationMins} mins × ₹2/min</span>
                <span className="font-bold text-emerald-600">₹{fare}</span>
              </div>
              <div className="flex justify-between">
                <span>Unlock Fee:</span>
                <span>FREE</span>
              </div>
              <div className="flex justify-between">
                <span>Convenience Fee:</span>
                <span>FREE</span>
              </div>
              <div className="border-t-2 border-gray-200 pt-3 mt-3 flex justify-between text-2xl font-bold">
                <span>TOTAL</span>
                <span className="text-emerald-600">₹{fare}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Rate Your Ride */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-6">⭐ Rate Your Ride</h2>
          <div className="flex items-center gap-2 mb-4 justify-center">
            {[1,2,3,4,5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                className={`text-4xl transition ${
                  rating >= star ? 'text-yellow-400 scale-110' : 'text-gray-300'
                } hover:text-yellow-400 hover:scale-110`}
              >
                ⭐
              </button>
            ))}
          </div>
          {rating > 0 && <p className="text-center text-gray-600 mb-4">You rated: {rating}/5 stars</p>}
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Tell us about your ride (optional)..."
            className="w-full p-4 border border-gray-200 rounded-xl resize-vertical focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows="3"
          />
          <button
            onClick={handleRateRide}
            disabled={rating === 0}
            className="mt-4 w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-3 rounded-xl font-bold transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
          >
            {rating === 0 ? 'Select Rating First' : 'Submit Rating'}
          </button>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="max-w-4xl mx-auto mt-12 px-4 flex gap-4 justify-center flex-wrap">
        <Link
          to="/wallet"
          className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition transform hover:scale-105 shadow-xl"
        >
          💳 View Wallet Balance
        </Link>
        <Link
          to="/map"
          className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition transform hover:scale-105 shadow-xl"
        >
          🚴 Start New Ride
        </Link>
      </div>
    </div>
  );
}
