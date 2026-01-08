import React from 'react';

export default function Solution() {
  const solutions = [
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "30 min ride instead of 2 hours. Avoid traffic completely. Get there when you want.",
    },
    {
      icon: "🌱",
      title: "100% Eco-Friendly",
      description: "Zero emissions. Save the planet with every ride. Be part of the green revolution.",
    },
    {
      icon: "💰",
      title: "Ultra Affordable",
      description: "₹2 per minute. ₹99/day or ₹799/month. Cheaper than any alternative.",
    },
    {
      icon: "📍",
      title: "Station-Based",
      description: "500+ stations across the city. Scan QR, unlock, ride. Return to any station.",
    },
    {
      icon: "💪",
      title: "Health Benefits",
      description: "Get daily exercise. Stay fit and healthy. Better than sitting in traffic.",
    },
    {
      icon: "📱",
      title: "Super Easy",
      description: "Download app → Scan QR → Ride. No paperwork. No registration. No hassle.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-6">The ZUNO Solution</h2>
        <p className="text-center text-gray-600 text-xl mb-16 max-w-3xl mx-auto">
          ZUNO is a bike-sharing platform designed for first-mile and last-mile mobility. 
          Affordable, eco-friendly, and available whenever you need it.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition transform hover:scale-105"
            >
              <p className="text-6xl mb-4">{solution.icon}</p>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{solution.title}</h3>
              <p className="text-gray-700">{solution.description}</p>
            </div>
          ))}
        </div>

        {/* Why choose ZUNO */}
        <div className="mt-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-6">Why Choose ZUNO?</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We're not just another bike-sharing company. We're building a sustainable future for urban mobility. 
            Every ride reduces carbon emissions and helps build cleaner, healthier cities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">✓ Most Affordable</span>
            <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">✓ Eco-Friendly</span>
            <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">✓ Always Available</span>
            <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">✓ Fast & Reliable</span>
          </div>
        </div>
      </div>
    </section>
  );
}
