import React from 'react';

export default function ProductCard({ bike }) {
  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition overflow-hidden hover:scale-105 duration-300">
      <img src={bike.image} alt={bike.name} className="w-full h-48 object-cover" />
      
      <div className="p-4">
        <h3 className="text-xl font-bold text-slate-900 mb-2">{bike.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{bike.description}</p>
        
        <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
          <div className="bg-blue-50 p-2 rounded">
            <span className="font-semibold text-blue-900">Range:</span> {bike.range}
          </div>
          <div className="bg-blue-50 p-2 rounded">
            <span className="font-semibold text-blue-900">Motor:</span> {bike.motor}
          </div>
          <div className="bg-teal-50 p-2 rounded">
            <span className="font-semibold text-teal-900">Speed:</span> {bike.topSpeed}
          </div>
          <div className="bg-teal-50 p-2 rounded">
            <span className="font-semibold text-teal-900">Weight:</span> {bike.weight}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold text-blue-600">{bike.price}</span>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition">
            ➕ Add
          </button>
        </div>
      </div>
    </div>
  );
}
