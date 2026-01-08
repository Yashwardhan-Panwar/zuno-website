import React from 'react';

export default function BikeFleet() {
  const bikeTypes = [
    {
      id: 1,
      name: "Standard City Bike",
      emoji: "🚲",
      color: "Blue",
      range: "45 km",
      speed: "25 km/h",
      weight: "24 kg",
      battery: "36V, 10Ah",
      description: "Perfect for casual city rides and commuting",
    },
    {
      id: 2,
      name: "Premium Electric Bike",
      emoji: "🚴",
      color: "Black",
      range: "70 km",
      speed: "32 km/h",
      weight: "28 kg",
      battery: "48V, 14Ah",
      description: "More power for longer distances and steep climbs",
    },
    {
      id: 3,
      name: "Mountain E-Bike",
      emoji: "🏔️",
      color: "Red",
      range: "60 km",
      speed: "35 km/h",
      weight: "32 kg",
      battery: "48V, 16Ah",
      description: "Built for adventure and off-road trails",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-4">Our Fleet</h2>
        <p className="text-center text-gray-600 text-xl mb-16 max-w-3xl mx-auto">
          Coming Soon! We're sourcing premium e-bikes from our partners in China. 
          These bikes will be available at ZUNO stations across the city.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {bikeTypes.map((bike) => (
            <div
              key={bike.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:scale-105 relative"
            >
              {/* Coming Soon Badge */}
              <div className="absolute top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                Coming Soon
              </div>

              {/* Bike Image/Emoji */}
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-12 text-center">
                <div className="text-9xl mb-4">{bike.emoji}</div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-slate-900">{bike.name}</h3>
                <p className="text-gray-600 mb-6">{bike.description}</p>

                {/* Specs Grid */}
                <div className="space-y-3 mb-8 bg-slate-50 p-6 rounded-lg">
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-semibold">Range:</span>
                    <span className="text-slate-900">{bike.range}</span>
                  </div>
                  <div className="flex justify-between border-t pt-3">
                    <span className="text-gray-600 font-semibold">Max Speed:</span>
                    <span className="text-slate-900">{bike.speed}</span>
                  </div>
                  <div className="flex justify-between border-t pt-3">
                    <span className="text-gray-600 font-semibold">Battery:</span>
                    <span className="text-slate-900">{bike.battery}</span>
                  </div>
                  <div className="flex justify-between border-t pt-3">
                    <span className="text-gray-600 font-semibold">Weight:</span>
                    <span className="text-slate-900">{bike.weight}</span>
                  </div>
                </div>

                <p className="text-center text-gray-600 italic">
                  🎯 Launching Q2 2026
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Info Box */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">📦 Fleet Details</h3>
          <div className="grid md:grid-cols-3 gap-8 text-gray-700">
            <div>
              <p className="font-bold text-lg mb-2">🔋 Smart Battery</p>
              <p>Auto-charge at stations. No manual charging needed.</p>
            </div>
            <div>
              <p className="font-bold text-lg mb-2">🔒 Security</p>
              <p>GPS tracking + Smart locks. Your ride is always safe.</p>
            </div>
            <div>
              <p className="font-bold text-lg mb-2">🛠️ Maintenance</p>
              <p>ZUNO maintains all bikes. You just ride and return.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
