import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { stations } from '../data/stations';
import { Link } from 'react-router-dom';

// Fix Leaflet default icon issue
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

export default function LeafletMap({ showBikes = false }) {
  // Jaipur center coordinates
  const center = [26.9124, 75.7873];

  // Custom marker colors based on availability
  const getMarkerColor = (bikes, capacity) => {
    const percentage = (bikes / capacity) * 100;
    if (percentage >= 60) return '#10B981'; // Green
    if (percentage >= 30) return '#F59E0B'; // Yellow
    return '#EF4444'; // Red
  };

  return (
     <MapContainer
       center={center}
       zoom={13}
       style={{ height: '500px', width: '100%', borderRadius: '12px', position: 'relative', zIndex: 0 }}
       className="shadow-2xl"
       scrollWheelZoom={true}
      >

      {/* Map Tiles */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Station Markers */}
      {stations.map((station) => (
        <React.Fragment key={station.id}>
          {/* Availability Circle */}
          <Circle
            center={[station.lat, station.lng]}
            radius={300}
            pathOptions={{
              color: getMarkerColor(station.bikes, station.capacity),
              fillColor: getMarkerColor(station.bikes, station.capacity),
              fillOpacity: 0.2,
            }}
          />

          {/* Station Marker */}
          <Marker position={[station.lat, station.lng]}>
            <Popup maxWidth={300}>
              <div className="p-2">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {station.name}
                </h3>
                
                <div className="mb-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-600">Available Bikes:</span>
                    <span className="text-2xl font-bold text-blue-600">
                      {station.bikes}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="h-2 rounded-full"
                      style={{
                        width: `${(station.bikes / station.capacity) * 100}%`,
                        backgroundColor: getMarkerColor(station.bikes, station.capacity),
                      }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {station.bikes}/{station.capacity} capacity
                  </p>
                </div>

                <div className="mb-3">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">📍</span> {station.address}
                  </p>
                  <p className="text-xs text-gray-500">{station.area}</p>
                </div>

                <div className="mb-3">
                  <p className="text-xs text-gray-600 font-semibold mb-1">Facilities:</p>
                  <div className="flex flex-wrap gap-1">
                    {station.facilities.map((facility, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded"
                      >
                        {facility}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to="/map"
                  className="block w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white text-center py-2 rounded-lg font-semibold transition text-sm"
                >
                  🚴 View Available Bikes
                </Link>
              </div>
            </Popup>
          </Marker>
        </React.Fragment>
      ))}
    </MapContainer>
  );
}
