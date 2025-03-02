// src/pages/HomePage.jsx
import React from 'react';
import DashboardLayout from '../components/DashboardLayout';

const HomePage = () => {
  return (
    <DashboardLayout>
      <h2 className="text-2xl mb-4">Dashboard Overview</h2>
      <p>Welcome to your crypto investment dashboard. This is where you will track sentiment, prices, and trading activities.</p>

      {/* Sentiment Section */}
      <div className="mt-8">
        <h3 className="text-xl mb-2">Sentiment Analysis</h3>
        <p>This section will show sentiment analysis graphs or charts for selected cryptocurrencies.</p>
      </div>

      {/* Prices Section */}
      <div className="mt-8">
        <h3 className="text-xl mb-2">Crypto Prices</h3>
        <p>Here we will display real-time crypto prices.</p>
      </div>

      {/* Trade History Section */}
      <div className="mt-8">
        <h3 className="text-xl mb-2">Trade History</h3>
        <p>Track your trading activity here.</p>
      </div>
    </DashboardLayout>
  );
};

export default HomePage;
