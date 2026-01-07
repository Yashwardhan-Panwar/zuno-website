import React from 'react';

export default function HowItWorks() {
  const steps = [
    {
      icon: "📱",
      title: "Download App",
      description: "Sign up in 2 minutes. Add your payment method and you're ready to ride!",
    },
    {
      icon: "📍",
      title: "Find & Scan",
      description: "Locate nearest ZUNO station, scan the QR code on the bike, and unlock instantly.",
    },
    {
      icon: "🚴",
      title: "Ride & Drop",
      description: "Enjoy your ride! Return to any ZUNO station and park in the dock. Payment auto-deducted.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4">How ZUNO Works</h2>
        <p className="text-center text-gray-600 text-xl mb-16">Three simple steps to start riding</p>
        
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition duration-300">
              <div className="text-8xl mb-6 transform group-hover:scale-110 transition duration-300">
                {step.icon}
              </div>
              <h3 className="text-3xl font-bold mb-4 text-slate-900">{step.title}</h3>
              <p className="text-gray-600 text-lg">{step.description}</p>
              
              {/* Step connector */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-24 -mr-6">
                  <div className="text-4xl text-blue-400">→</div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-12 text-center border-2 border-blue-200">
          <h3 className="text-2xl font-bold mb-4">Ready to ride?</h3>
          <p className="text-gray-600 mb-6">Join 50,000+ riders already using ZUNO for their daily commute</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105">
            📱 Download App Now
          </button>
        </div>
      </div>
    </section>
  );
}
