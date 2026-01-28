import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Wallet() {
  const [balance, setBalance] = useState(247.50);
  const [transactions, setTransactions] = useState([
    { id: "TXN001", type: "ride", amount: -50, date: "21 Jan 2:15 PM", desc: "Ride #RIDE003" },
    { id: "TXN002", type: "topup", amount: 500, date: "20 Jan 6:30 PM", desc: "UPI Payment" },
    { id: "TXN003", type: "ride", amount: -90, date: "20 Jan 11:30 AM", desc: "Ride #RIDE001" },
    { id: "TXN004", type: "topup", amount: 200, date: "19 Jan 9:45 PM", desc: "Card Payment" },
  ]);

  const addMoney = (amount) => {
    setBalance(balance + amount);
    setTransactions(prev => [{
      id: `TXN${Date.now()}`,
      type: "topup", 
      amount,
      date: new Date().toLocaleString('en-IN', { 
        day: 'numeric', month: 'short', hour: 'numeric', minute: '2-digit' 
      }),
      desc: "Quick Top-up"
    }, ...prev.slice(0, 3)]); // Keep last 4
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50 pt-20 pb-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4" style={{ 
           background: 'linear-gradient(135deg, #1CBBB4, #14A79D)',
           WebkitBackgroundClip: 'text',
           WebkitTextFillColor: 'transparent'
         }}>
           💳 Wallet
        </h1>
        <p className="text-xl text-gray-600">Manage your ride balance</p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Balance Card */}
        <div className="text-white rounded-3xl p-8 shadow-2xl" style={{ background: 'linear-gradient(135deg, #1CBBB4, #14A79D)' }}>
          <div className="text-center">
            <div className="text-6xl font-bold mb-2">₹{balance.toFixed(2)}</div>
            <p className="text-indigo-100 text-lg">Available Balance</p>
          </div>
          
          {/* Quick Top-up */}
          <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/20">
            {[100, 500, 1000].map(amount => (
              <button
                key={amount}
                onClick={() => addMoney(amount)}
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                +₹{amount}
              </button>
            ))}
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-6">📊 Recent Transactions</h2>
          <div className="space-y-4">
            {transactions.map(tx => (
              <div key={tx.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition">
                <div>
                  <div className="font-semibold text-gray-900">{tx.desc}</div>
                  <div className="text-sm text-gray-500">{tx.date}</div>
                </div>
                <div className={`text-2xl font-bold ${
                  tx.amount > 0 ? 'text-emerald-600' : 'text-red-600'
                }`}>
                  {tx.amount > 0 ? '+' : ''}₹{Math.abs(tx.amount)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="max-w-md mx-auto mt-12 flex gap-4 justify-center">
        <Link
           to="/ride-summary"
           className="flex-1 text-white py-4 px-6 rounded-2xl font-bold text-center transition transform hover:scale-105 shadow-xl" 
           style={{ background: 'linear-gradient(135deg, #10B981, #059669)' }}
           >
            📋 View Ride History
            </Link>
            <Link
            to="/map"
            className="flex-1 text-white py-4 px-6 rounded-2xl font-bold text-center transition transform hover:scale-105 shadow-xl"
            style={{ background: 'linear-gradient(135deg, #1CBBB4, #14A79D)' }}
            >
              🚴 Find Bikes
              </Link>
      </div>
    </div>
  );
}
