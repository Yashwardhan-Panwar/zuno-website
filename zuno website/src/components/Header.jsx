import React from 'react';
import { Link } from 'react-router';

export default function Header() {
  return (
    <header className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
          ⚡ ZUNO
        </Link>
        
        <nav className="flex gap-8">
          <Link to="/" className="hover:text-blue-400 transition">Home</Link>
          <Link to="/products" className="hover:text-blue-400 transition">Products</Link>
          <Link to="/" className="hover:text-blue-400 transition">About</Link>
        </nav>

        <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg font-semibold transition">
          🛒 Cart
        </button>
      </div>
    </header>
  );
}
