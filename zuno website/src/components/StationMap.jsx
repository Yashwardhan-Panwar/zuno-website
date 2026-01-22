import React from 'react';
import { stations, getTotalBikes } from '../data/stations';
import LeafletMap from './LeafletMap';

export default function StationMap() {
  return (
    <section id="map" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-4">🗺️ Live Station Map</h2>
        <p className="text-center text-gray-600 text-xl mb-12">
          {getTotalBikes()} bikes across {stations.length} stations in Jaipur
        </p>

        {/* ✅ REAL LEAFLET MAP */}
       <div className="mb-8 relative z-0 overflow-hidden rounded-xl">
         <LeafletMap />
       </div>


        {/* Legend */}
        <div className="flex justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-green-500"></div>
            <span>High Availability (60%+)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
            <span>Medium (30-60%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-red-500"></div>
            <span>Low (&lt;30%)</span>
          </div>
        </div>
      </div>
    </section>
  );
}
