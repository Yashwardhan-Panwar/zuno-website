import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Map from './pages/Map';

function App() {
  return (
    <Router>  {/* ✅ This wraps everything */}
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-20">  {/* ✅ pt-20 for sticky header */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/map" element={<Map />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
