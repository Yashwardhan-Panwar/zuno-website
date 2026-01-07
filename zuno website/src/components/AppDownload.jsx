import React from 'react';

export default function AppDownload() {
  return (
    <section className="py-24 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">Ready to Ride?</h2>
        <p className="text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Download ZUNO and get started in minutes. First ride credit on us! 🎉
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <button className="bg-white text-slate-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105 flex items-center justify-center gap-2">
            🍎 Download for iOS
          </button>
          <button className="bg-white text-slate-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105 flex items-center justify-center gap-2">
            🤖 Download for Android
          </button>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            { icon: "🎁", title: "Welcome Bonus", desc: "₹100 credits on first ride" },
            { icon: "⚡", title: "Instant Unlock", desc: "Scan QR and go in seconds" },
            { icon: "💰", title: "Smart Pricing", desc: "Best rates for your budget" },
          ].map((benefit, i) => (
            <div key={i}>
              <p className="text-4xl mb-3">{benefit.icon}</p>
              <p className="text-xl font-bold mb-2">{benefit.title}</p>
              <p className="text-gray-300">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
