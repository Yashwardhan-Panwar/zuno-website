import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Map from './pages/Map';
import Scan from './pages/Scan';           // ✅ NEW
import RideActive from './pages/RideActive'; // ✅ NEW
import RideSummary from './pages/RideSummary';
import Wallet from './pages/Wallet';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/map" element={<Map />} />
            <Route path="/scan" element={<Scan />} />           {/* ✅ NEW */}
            <Route path="/ride-active" element={<RideActive />} /> {/* ✅ NEW */}
            <Route path="/ride-summary" element={<RideSummary />} />
            <Route path="/wallet" element={<Wallet />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
