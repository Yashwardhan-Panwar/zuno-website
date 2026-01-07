import React, { useState } from 'react';
import { faqs } from '../data/faq';

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4">FAQs</h2>
        <p className="text-center text-gray-600 text-xl mb-16">Common questions answered</p>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-white rounded-lg shadow hover:shadow-lg transition">
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full p-6 text-left font-bold text-lg flex justify-between items-center hover:text-blue-600 transition"
              >
                {faq.question}
                <span className={`text-2xl transition transform ${
                  openId === faq.id ? 'rotate-45' : ''
                }`}>
                  +
                </span>
              </button>

              {openId === faq.id && (
                <div className="px-6 pb-6 text-gray-700 border-t border-gray-200 animate-slide-down">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
