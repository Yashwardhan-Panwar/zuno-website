import React from 'react';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4">What Riders Say</h2>
        <p className="text-center text-gray-600 text-xl mb-16">Join thousands of happy riders</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition transform hover:scale-105"
            >
              {/* Stars */}
              <div className="text-yellow-500 mb-4">
                {'⭐'.repeat(Math.floor(testimonial.rating))}
                {testimonial.rating % 1 !== 0 && '✨'}
              </div>

              {/* Text */}
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>

              {/* User Info */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-bold text-slate-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
