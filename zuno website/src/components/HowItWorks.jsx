import React from 'react';

export default function HowItWorks() {
  const steps = [
    {
      icon: "📱",
      title: "Download & Sign Up",
      description: "Get the ZUNO app. Sign up with your phone number and payment method in 2 minutes.",
      details: "No paperwork needed. Just download, verify, and you're ready to ride!",
    },
    {
      icon: "📍",
      title: "Find & Scan QR",
      description: "Open the app, locate the nearest ZUNO station. Walk to the station and scan the QR code on any bike.",
      details: "Real-time station map shows bike availability. GPS-enabled so you never get lost.",
    },
    {
      icon: "🚴",
      title: "Ride & Return",
      description: "Unlock the bike and ride to your destination. When done, return to ANY ZUNO station and park in the dock.",
      details: "Payment auto-deducted from your wallet. That's it! Simple, fast, and easy.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-6">How ZUNO Works</h2>
        <p className="text-center text-gray-600 text-xl mb-16 max-w-3xl mx-auto">
          Three simple steps. From download to ride in minutes.
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/3 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 transform -translate-y-1/2"></div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="text-center">
                {/* Step number circle */}
                <div className="mb-6 flex justify-center">
                  <div className="w-24 h-24 rounded-full bg-white border-4 border-blue-500 flex items-center justify-center">
                    <span className="text-5xl">{step.icon}</span>
                  </div>
                </div>

                {/* Step content */}
                <div className="bg-slate-50 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {i + 1}. {step.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{step.description}</p>
                  <p className="text-sm text-gray-600 italic">{step.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105">
            🚀 Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
}
