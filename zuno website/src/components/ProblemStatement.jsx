import React from 'react';

export default function ProblemStatement() {
  const problems = [
    {
      icon: "🚗",
      title: "Traffic Congestion",
      description: "Spend 2+ hours daily stuck in traffic. Lost productivity, wasted fuel, endless frustration.",
    },
    {
      icon: "💨",
      title: "Air Pollution",
      description: "Vehicle emissions choke our cities. We breathe toxic air every day. Eco-friendly alternatives needed.",
    },
    {
      icon: "💸",
      title: "Expensive Transport",
      description: "Autos, cabs, buses add up quickly. Monthly transport costs drain your wallet.",
    },
    {
      icon: "🚶",
      title: "First & Last Mile Gap",
      description: "Metro/bus stations are far from home/office. Walking takes 20+ minutes. No cheap option.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-6">The Problem</h2>
        <p className="text-center text-gray-600 text-xl mb-16 max-w-3xl mx-auto">
          Modern cities are drowning in problems. Traffic paralyzes commuters. Pollution chokes the air. 
          Traditional transport is expensive and inefficient. There has to be a better way.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-xl border-2 border-blue-200 hover:shadow-lg transition transform hover:scale-105"
            >
              <p className="text-6xl mb-4">{problem.icon}</p>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{problem.title}</h3>
              <p className="text-gray-700">{problem.description}</p>
            </div>
          ))}
        </div>

        {/* Impact stats */}
        <div className="mt-20 bg-red-50 border-l-4 border-red-500 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-red-900 mb-4">The Impact Today:</h3>
          <div className="grid md:grid-cols-3 gap-6 text-red-900">
            <div>
              <p className="text-3xl font-bold">2.5 hours</p>
              <p className="text-sm">Average commute time wasted daily</p>
            </div>
            <div>
              <p className="text-3xl font-bold">₹15K+</p>
              <p className="text-sm">Monthly transport cost per person</p>
            </div>
            <div>
              <p className="text-3xl font-bold">5.2 Tons</p>
              <p className="text-sm">CO2 emissions per car annually</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
