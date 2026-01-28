import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="/zuno-logo.jpeg" 
              alt="ZUNO Logo" 
              className="h-12 w-12 object-contain"
            />
            <span className="text-3xl font-bold" style={{ color: '#1CBBB4' }}>
              ZUNO
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-[#1CBBB4] font-semibold transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-[#1CBBB4] font-semibold transition-colors"
            >
              About
            </Link>
            <Link 
              to="/map" 
              className="text-gray-700 hover:text-[#1CBBB4] font-semibold transition-colors"
            >
              Find Bikes 🗺️
            </Link>
            <Link 
              to="/scan" 
              className="bg-gradient-to-r from-[#1CBBB4] to-[#14A79D] text-white px-6 py-2 rounded-full font-bold hover:shadow-lg transition-all transform hover:scale-105"
            >
              📱 Scan QR
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <Link to="/" className="block text-gray-700 hover:text-[#1CBBB4] font-semibold">
              Home
            </Link>
            <Link to="/about" className="block text-gray-700 hover:text-[#1CBBB4] font-semibold">
              About
            </Link>
            <Link to="/map" className="block text-gray-700 hover:text-[#1CBBB4] font-semibold">
              Find Bikes 🗺️
            </Link>
            <Link to="/scan" className="block bg-[#1CBBB4] text-white px-6 py-2 rounded-full font-bold text-center">
              📱 Scan QR
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
