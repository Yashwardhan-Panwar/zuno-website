import React from 'react';
import { pricingPlans } from '../data/pricing';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4">Simple Pricing</h2>
        <p className="text-center text-gray-600 text-xl mb-16">
          Pay-as-you-ride or subscribe for better rates
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-105 ${
                plan.popular
                  ? 'ring-2 ring-blue-500 transform scale-105'
                  : ''
              }`}
            >
              {plan.popular && (
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-center py-2 font-bold">
                  ⭐ MOST POPULAR
                </div>
              )}

              <div className={`p-8 ${plan.popular ? 'bg-white' : 'bg-white'}`}>
                <h3 className="text-2xl font-bold mb-2 text-slate-900">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>

                {plan.savings && (
                  <div className="bg-green-50 border-l-4 border-green-500 p-3 mb-6 rounded">
                    <p className="text-green-700 font-semibold text-sm">{plan.savings}</p>
                  </div>
                )}

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <span className="text-blue-500 font-bold">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-lg font-bold transition transform hover:scale-105 ${
                    plan.popular
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
      </div>
    </section>
  );
}
