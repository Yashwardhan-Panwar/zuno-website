import React from 'react';

export default function Pricing() {
  const pricingPlans = [
    {
      id: 1,
      name: "Pay Per Ride",
      price: "₹2",
      period: "/min",
      tag: "Perfect for occasional riders",
      features: [
        "No subscription needed",
        "₹50 max per ride",
        "All bikes unlocked",
        "Any station to any station",
        "Auto-deducted from wallet",
      ],
      cta: "Start Riding",
      highlight: false,
    },
    {
      id: 2,
      name: "Daily Pass",
      price: "₹99",
      period: "/24 hours",
      tag: "Best for regular commuters",
      features: [
        "Unlimited rides (24 hours)",
        "₹1/min rate",
        "Priority support",
        "Free unlock",
        "Any station access",
      ],
      cta: "Get Daily Pass",
      highlight: true,
      badge: "POPULAR",
    },
    {
      id: 3,
      name: "Monthly Pass",
      price: "₹799",
      period: "/30 days",
      tag: "Best value for daily users",
      features: [
        "Unlimited rides (30 days)",
        "₹0.80/min rate",
        "24/7 priority support",
        "Free unlimited unlocks",
        "Exclusive perks",
      ],
      cta: "Get Monthly Pass",
      highlight: false,
    },
    {
      id: 4,
      name: "Annual Pass",
      price: "₹6,999",
      period: "/12 months",
      tag: "Maximum savings & benefits",
      features: [
        "Unlimited rides (365 days)",
        "₹0.60/min rate",
        "VIP 24/7 support",
        "Free bike repair",
        "Exclusive community events",
      ],
      cta: "Get Annual Pass",
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-4">Simple Pricing</h2>
        <p className="text-center text-gray-600 text-xl mb-16 max-w-3xl mx-auto">
          Pay only for what you ride. No hidden fees. No commitments. Choose the plan that fits your lifestyle.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-105 ${
                plan.highlight ? 'ring-3 ring-blue-500 scale-105' : ''
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-center py-2 font-bold">
                  ⭐ {plan.badge}
                </div>
              )}

              <div className={`p-8 ${plan.badge ? 'pt-16' : ''}`}>
                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-slate-900 mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-600 mb-6">{plan.tag}</p>

                {/* Price */}
                <div className="mb-8">
                  <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                  <span className="text-gray-600 text-sm">{plan.period}</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <span className="text-blue-500 font-bold">✓</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 rounded-lg font-bold transition transform hover:scale-105 ${
                    plan.highlight
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                      : 'bg-gray-100 text-slate-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12">How Much Will You Save?</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-center">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-6 py-3 text-left font-bold">Scenario</th>
                  <th className="px-6 py-3 font-bold">Pay Per Ride</th>
                  <th className="px-6 py-3 font-bold">Daily Pass</th>
                  <th className="px-6 py-3 font-bold">Monthly Pass</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-3 text-left font-semibold">15 min ride (1 ride)</td>
                  <td className="px-6 py-3">₹30</td>
                  <td className="px-6 py-3 text-gray-600">-</td>
                  <td className="px-6 py-3 text-gray-600">-</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-3 text-left font-semibold">2 rides per day (₹60)</td>
                  <td className="px-6 py-3">₹1,800/month</td>
                  <td className="px-6 py-3 text-green-600 font-bold">₹198/month ✓</td>
                  <td className="px-6 py-3 text-gray-600">-</td>
                </tr>
                <tr className="border-b bg-blue-50">
                  <td className="px-6 py-3 text-left font-semibold">5 rides per day (₹150)</td>
                  <td className="px-6 py-3">₹4,500/month</td>
                  <td className="px-6 py-3">₹495/month</td>
                  <td className="px-6 py-3 text-green-600 font-bold">₹799/month ✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">Pricing FAQs</h3>
          <div className="space-y-6">
            <div>
              <p className="font-bold text-slate-900 mb-2">❓ Is there a minimum ride duration?</p>
              <p className="text-gray-700">No! You can ride for 1 minute or 1 hour. You only pay for what you ride.</p>
            </div>
            <div>
              <p className="font-bold text-slate-900 mb-2">❓ Can I switch plans anytime?</p>
              <p className="text-gray-700">Yes! Switch plans anytime in the app. No cancellation fees.</p>
            </div>
            <div>
              <p className="font-bold text-slate-900 mb-2">❓ What if I return the bike early?</p>
              <p className="text-gray-700">You only pay for the time you ride. No refunds, but no overpayment either.</p>
            </div>
            <div>
              <p className="font-bold text-slate-900 mb-2">❓ Are there extra charges?</p>
              <p className="text-gray-700">No hidden fees. Late charges only apply if you keep the bike 24 hours.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
