import React from 'react';

export default function About() {
  const founders = [
    {
      id: 1,
      name: 'Lavi Khandelwal',
      role: 'Founder',
      bio: 'Brief description about founder 1 and their role in ZUNO.'
    },
    {
      id: 2,
      name: 'Sahej Tripathi',
      role: 'IOT Engineer',
      bio: 'Brief description about founder 2 and their role in ZUNO.'
    },
    {
      id: 3,
      name: 'Syed Abdullah',
      role: 'Software Engineer', // Fixed typo
      bio: 'Brief description about founder 3 and their role in ZUNO.'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <div 
        className="text-white py-24"
        style={{ 
          background: 'linear-gradient(135deg, #1CBBB4 0%, #14A79D 100%)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About ZUNO</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Empowering India's cities with affordable electric mobility
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Company Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-16 border-2" style={{ borderColor: '#1CBBB4' }}>
          <div className="flex items-center gap-4 mb-8">
            <img 
              src="/zuno-logo.jpeg" 
              alt="ZUNO Logo" 
              className="h-20 w-20 object-contain"
            />
            <h2 className="text-4xl font-bold" style={{ color: '#1F3A3C' }}>
              Our Story
            </h2>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-xl leading-relaxed">
              We started an e-bike company with the vision of making <span className="font-bold" style={{ color: '#1CBBB4' }}>affordable and reliable electric mobility accessible to people in low and medium-tier cities</span>. While most electric vehicle solutions focus on metro areas, we aim to address the real needs of everyday users in smaller cities by offering practical, cost-effective, and easy-to-maintain e-bikes.
            </p>
            <p className="text-lg leading-relaxed">
              We believe that by collaborating with the Indian Government, we can reach a wider population, support sustainable transportation initiatives, and make electric mobility more accessible for everyone.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="rounded-xl p-6 text-center" style={{ backgroundColor: '#E6F7F6' }}>
              <div className="text-4xl font-bold" style={{ color: '#1CBBB4' }}>21+</div>
              <p className="text-gray-700 font-semibold mt-2">Active Bikes</p>
            </div>
            <div className="rounded-xl p-6 text-center" style={{ backgroundColor: '#E6F7F6' }}>
              <div className="text-4xl font-bold" style={{ color: '#1CBBB4' }}>8</div>
              <p className="text-gray-700 font-semibold mt-2">Stations in Jaipur</p>
            </div>
            <div className="rounded-xl p-6 text-center" style={{ backgroundColor: '#E6F7F6' }}>
              <div className="text-4xl font-bold" style={{ color: '#1CBBB4' }}>₹2/min</div>
              <p className="text-gray-700 font-semibold mt-2">Affordable Pricing</p>
            </div>
          </div>
        </div>

        {/* ✅ FIXED Founders Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 mb-16" style={{ borderColor: '#1CBBB4' }}>
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#1F3A3C' }}>
            👥 Meet Our Team
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {founders.map((founder) => (
              <div 
                key={founder.id}
                className="rounded-2xl p-8 text-center hover:shadow-2xl transition-all transform hover:scale-105"
                style={{ backgroundColor: '#E6F7F6' }}
              >
                {/* ✅ REAL FOUNDER IMAGES */}
                <img 
                  src={`/founder${founder.id}.jpeg`} 
                  alt={founder.name}
                  className="w-40 h-40 rounded-full mx-auto mb-6 shadow-lg object-cover border-4"
                  style={{ borderColor: '#1CBBB4' }}
                />
                
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#1F3A3C' }}>
                  {founder.name}
                </h3>
                <p className="font-semibold mb-4" style={{ color: '#1CBBB4' }}>
                  {founder.role}
                </p>
                <p className="text-gray-600 text-sm">
                  {founder.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision/Mission */}
        <div className="grid md:grid-cols-2 gap-8">
          <div 
            className="text-white rounded-2xl p-8 shadow-xl"
            style={{ 
              background: 'linear-gradient(135deg, #1CBBB4 0%, #14A79D 100%)'
            }}
          >
            <h3 className="text-3xl font-bold mb-4">🎯 Our Mission</h3>
            <p className="text-lg opacity-90">
              To make sustainable urban transportation accessible and affordable for every citizen in low and medium-tier cities across India.
            </p>
          </div>
          <div 
            className="text-white rounded-2xl p-8 shadow-xl"
            style={{ 
              background: 'linear-gradient(135deg, #14A79D 0%, #0F8A82 100%)'
            }}
          >
            <h3 className="text-3xl font-bold mb-4">🌍 Our Vision</h3>
            <p className="text-lg opacity-90">
              To become India's leading e-bike sharing platform, partnering with the government to create a sustainable mobility ecosystem nationwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
