import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Map from './pages/Map';
import Scan from './pages/Scan';
import RideActive from './pages/RideActive';
import RideSummary from './pages/RideSummary';
import Wallet from './pages/Wallet';
import About from './pages/About'; // ✅ NEW

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        {/* Keep top padding so content is not hidden behind fixed header */}
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} /> {/* ✅ NEW ROUTE */}
            <Route path="/products" element={<Products />} />
            <Route path="/map" element={<Map />} />
            <Route path="/scan" element={<Scan />} />
            <Route path="/ride-active" element={<RideActive />} />
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
