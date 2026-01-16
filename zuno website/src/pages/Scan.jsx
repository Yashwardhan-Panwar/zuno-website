import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { liveBikes } from '../data/mapBikes';

export default function Scan() {
  const navigate = useNavigate();
  const [scanMode, setScanMode] = useState('upload'); // 'upload' or 'camera'
  const [qrInput, setQrInput] = useState('');
  const [scannedBike, setScannedBike] = useState(null);
  const [unlocking, setUnlocking] = useState(false);
  const [error, setError] = useState('');

  // Simulate QR scan
  const handleScan = () => {
    setError('');
    
    // Check if QR code matches a bike ID
    const bike = liveBikes.find(b => b.id === qrInput.toUpperCase());
    
    if (!bike) {
      setError('❌ Invalid QR Code! Bike not found.');
      return;
    }

    if (bike.status !== 'available') {
      setError(`❌ Bike ${bike.id} is ${bike.status}. Please choose another bike.`);
      return;
    }

    // Success!
    setScannedBike(bike);
    setUnlocking(true);

    // Simulate unlock process
    setTimeout(() => {
      setUnlocking(false);
      // Navigate to active ride screen
      navigate('/ride-active', { 
        state: { 
          bike: bike,
          startTime: new Date().toISOString()
        } 
      });
    }, 3000);
  };

  // Quick test QR codes
  const testCodes = ['ZUNO001', 'ZUNO002', 'ZUNO010', 'ZUNO015'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-4">
            📱 Scan QR Code
          </h1>
          <p className="text-xl text-white opacity-90">
            Scan the QR code on the bike to unlock and start riding
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          
          {/* Scan Mode Toggle */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setScanMode('upload')}
              className={`px-6 py-3 rounded-lg font-bold transition ${
                scanMode === 'upload'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              📷 Manual Entry
            </button>
            <button
              onClick={() => setScanMode('camera')}
              className={`px-6 py-3 rounded-lg font-bold transition ${
                scanMode === 'camera'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              📹 Camera Scan
            </button>
          </div>

          {/* Camera Mode (Placeholder) */}
          {scanMode === 'camera' && (
            <div className="mb-8">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl h-96 flex items-center justify-center relative overflow-hidden">
                {/* Scanner Animation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 border-4 border-blue-400 rounded-lg relative">
                    {/* Scanning Line Animation */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-blue-400 animate-pulse"></div>
                    <div className="absolute top-1/4 left-0 right-0 h-1 bg-blue-400 animate-pulse delay-75"></div>
                    <div className="absolute top-1/2 left-0 right-0 h-1 bg-blue-400 animate-pulse delay-150"></div>
                    <div className="absolute top-3/4 left-0 right-0 h-1 bg-blue-400 animate-pulse delay-300"></div>
                    
                    {/* Corner Markers */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-blue-400"></div>
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-blue-400"></div>
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-blue-400"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-blue-400"></div>
                  </div>
                </div>

                <div className="text-center z-10">
                  <p className="text-white text-xl font-semibold mb-2">📹 Camera Active</p>
                  <p className="text-gray-300">Position QR code within the frame</p>
                </div>
              </div>

              <div className="mt-4 bg-yellow-50 border-2 border-yellow-300 rounded-lg p-4">
                <p className="text-yellow-800 text-center">
                  💡 <span className="font-bold">Demo Mode:</span> Use Manual Entry below to test
                </p>
              </div>
            </div>
          )}

          {/* Upload/Manual Mode */}
          {scanMode === 'upload' && (
            <div className="mb-8">
              <label className="block text-lg font-bold text-gray-700 mb-3">
                Enter Bike QR Code:
              </label>
              <input
                type="text"
                value={qrInput}
                onChange={(e) => setQrInput(e.target.value)}
                placeholder="e.g., ZUNO001"
                className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />

              {/* Quick Test Buttons */}
              <div className="mt-4">
                <p className="text-sm text-gray-600 mb-2 font-semibold">🚀 Quick Test (Click any):</p>
                <div className="flex flex-wrap gap-2">
                  {testCodes.map(code => (
                    <button
                      key={code}
                      onClick={() => setQrInput(code)}
                      className="bg-gray-100 hover:bg-blue-100 border-2 border-gray-300 hover:border-blue-400 px-4 py-2 rounded-lg font-mono font-bold text-sm transition"
                    >
                      {code}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mb-6 bg-red-50 border-2 border-red-300 rounded-lg p-4">
              <p className="text-red-800 font-semibold text-center">{error}</p>
            </div>
          )}

          {/* Scan Button */}
          <button
            onClick={handleScan}
            disabled={!qrInput || unlocking}
            className={`w-full py-4 rounded-lg font-bold text-xl transition transform ${
              unlocking
                ? 'bg-gray-400 cursor-not-allowed'
                : qrInput
                ? 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white hover:scale-105'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {unlocking ? '🔓 Unlocking...' : '🔍 Scan & Unlock'}
          </button>

          {/* Info Box */}
          <div className="mt-8 bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
            <h3 className="font-bold text-blue-900 mb-3 text-lg">📋 How to Use:</h3>
            <ol className="space-y-2 text-gray-700">
              <li>1️⃣ Find a bike on the <span className="font-bold">Find Bikes</span> page</li>
              <li>2️⃣ Go to the station and locate the bike</li>
              <li>3️⃣ Scan the QR code on the bike's handlebar</li>
              <li>4️⃣ Bike unlocks automatically - Start riding! 🚴</li>
            </ol>
          </div>
        </div>

        {/* Unlocking Modal */}
        {unlocking && scannedBike && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-12 text-center max-w-md animate-bounce">
              <div className="text-8xl mb-6 animate-spin">🔓</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Unlocking Bike...
              </h2>
              <p className="text-xl text-gray-600 mb-2">
                {scannedBike.emoji} {scannedBike.type}
              </p>
              <p className="text-lg text-gray-500 font-mono">
                {scannedBike.id}
              </p>
              <div className="mt-6">
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-3 rounded-full animate-pulse" style={{width: '100%'}}></div>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                🎉 Get ready to ride!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
