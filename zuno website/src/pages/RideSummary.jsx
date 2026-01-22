import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { rideHistory, currentRide } from '../data/rides';
import { pricingPlans } from '../data/pricing';

export default function RideSummary() {
  const navigate = useNavigate();
  const [ride, setRide] = useState(null);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  // Simulate completed ride from ride-active
  useEffect(() => {
    // Get last ride or demo data
    const completedRide = {
      ...currentRide,
      endTime: new Date().toISOString(),
      duration: "25 mins",
      distance: "5.2 km",
      fare: "₹50"
    };
    setRide(completedRide);
  }, []);

  const handleRateRide = () => {
    if (rating > 0) {
      // Simulate save
      console.log('Rating saved:', rating, feedback);
      alert('Thanks for rating! 🎉');
    }
  };

  if (!ride) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p>Generating ride summary...</p>
        </div>
      </div>
    );
  }

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
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Ride Details */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-6">📋 Ride Details</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <div className="flex justify-between mb-2">
                <span>Bike ID:</span>
                <span className="font-semibold">{ride.bikeId}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Duration:</span>
                <span className="font-semibold text-green-600">{ride.duration}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Distance:</span>
                <span className="font-semibold">{ride.distance}</span>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span>Start:</span>
                <span className="font-semibold">City Center</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>End:</span>
                <span className="font-semibold">University Campus</span>
              </div>
              <div className="flex justify-between mb-4">
                <span>Rate:</span>
                <span className="font-semibold">₹2/min</span>
              </div>
            </div>
          </div>
        </div>

        {/* Fare Breakdown */}
        <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-3xl shadow-xl p-8 border-4 border-emerald-200">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            💰 Total Fare: <span className="text-3xl text-emerald-600">₹{ride.fare}</span>
          </h2>
          <div className="bg-white rounded-2xl p-6">
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>Ride Duration: 25 mins × ₹2/min</div>
              <div className="text-right font-bold text-emerald-600">₹50</div>
              <div>Convenience fee:</div>
              <div className="text-right">FREE</div>
              <div className="border-t pt-2 font-bold">TOTAL</div>
              <div className="text-right border-t pt-2 font-bold text-emerald-600 text-lg">₹50</div>
            </div>
          </div>
        </div>

        {/* Rate Your Ride */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-6">⭐ Rate Your Ride</h2>
          <div className="flex items-center gap-2 mb-4">
            {[5,4,3,2,1].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                className={`text-2xl transition ${
                  rating >= star ? 'text-yellow-400' : 'text-gray-300'
                } hover:text-yellow-400`}
              >
                ⭐
              </button>
            ))}
          </div>
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
            className="mt-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-3 rounded-xl font-bold transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
          >
            Submit Rating
          </button>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="max-w-4xl mx-auto mt-12 flex gap-4 justify-center">
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
