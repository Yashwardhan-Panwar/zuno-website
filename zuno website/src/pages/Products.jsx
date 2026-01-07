import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { bikes } from '../data/bikes';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceFilter, setPriceFilter] = useState(3000);

  const filtered = bikes.filter(bike => {
    const bikePrice = parseInt(bike.price.replace('$', '').replace(',', ''));
    const categoryMatch = selectedCategory === 'all' || bike.category === selectedCategory;
    const priceMatch = bikePrice <= priceFilter;
    return categoryMatch && priceMatch;
  });

  const categories = ['all', 'city', 'mountain', 'performance', 'budget'];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">🚴 All Bikes</h1>

      <div className="flex gap-8">
        {/* Sidebar Filters */}
        <aside className="w-64 bg-slate-50 p-6 rounded-lg h-fit sticky top-24">
          <h3 className="text-lg font-bold mb-4">Filters</h3>
          
          <div className="mb-6">
            <h4 className="font-semibold mb-3 text-slate-900">Category</h4>
            <div className="space-y-2">
              {categories.map(cat => (
                <label key={cat} className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="category"
                    value={cat}
                    checked={selectedCategory === cat}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="mr-2"
                  />
                  <span className="capitalize font-medium">{cat}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-slate-900">Max Price</h4>
            <input
              type="range"
              min="500"
              max="3000"
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
              className="w-full"
            />
            <p className="text-blue-600 font-bold mt-2">${priceFilter}</p>
          </div>
        </aside>

        {/* Products Grid */}
        <main className="flex-1">
          <p className="text-gray-600 mb-6">Showing {filtered.length} bikes</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map(bike => (
              <ProductCard key={bike.id} bike={bike} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
