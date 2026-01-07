import React, { useEffect } from 'react';
import { stations } from '../data/stations';

export default function StationMap() {
  useEffect(() => {
    // Leaflet.js will be integrated here
    // For now, we'll show a placeholder
    console.log('StationMap: Ready for Leaflet.js integration');
    console.log('Stations:', stations);
  }, []);

  return (
    <section id="map" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-4">Map of Stations</h2>
        <p className="text-center text-gray-600 text-xl mb-12">
          Real-time availability and live bike counts
        </p>

        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-1">
          <div className="bg-white rounded-xl overflow-hidden">
            <div
              id="map-container"
              className="w-full h-96 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center"
            >
              <div className="text-center">
                <p className="text-3xl font-bold text-slate-400 mb-3">🗺️</p>
                <p className="text-xl font-bold text-slate-600 mb-2">Interactive Map</p>
                <p className="text-gray-500">Leaflet.js will be loaded here</p>
                <p className="text-sm text-gray-400 mt-4">
                  Total stations: {stations.length} | Total bikes: {stations.reduce((sum, s) => sum + s.bikes, 0)}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
          <h3 className="font-bold text-lg mb-2">To integrate Leaflet.js:</h3>
          <p className="text-gray-700">
            Install: <code className="bg-gray-200 px-2 py-1 rounded">npm install leaflet react-leaflet</code>
          </p>
          <p className="text-gray-700 mt-2">
            Then use the stations data to render markers with real-time bike counts
          </p>
        </div>
      </div>
    </section>
  );
}
