import React from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { bikes } from '../data/bikes';

export default function Home() {
  const featuredBikes = bikes.slice(0, 3);

  return (
    <div>
      <Hero />
      
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">🏆 Featured Bikes</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredBikes.map(bike => (
            <ProductCard key={bike.id} bike={bike} />
          ))}
        </div>
      </section>
    </div>
  );
}
