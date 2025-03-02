// src/pages/HomePage.jsx

import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { sentimentData, cryptoPrices } from '../mockData';
import PriceChart from '../components/PriceChart';
import TradeHistory from '../components/TradeHistory';

const priceChartData = [
  { time: '2025-03-01', price: 45000 },
  { time: '2025-03-02', price: 46000 },
  { time: '2025-03-03', price: 47000 },
  { time: '2025-03-04', price: 48000 },
];

const HomePage = () => {
  return (
    
    <DashboardLayout>
      <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem',
    marginTop: '1.5rem'
    }}>
      <h2>Dashboard Overview</h2>
      <p>Welcome to your crypto investment dashboard. This is where you will track sentiment, prices, and trading activities.</p>

      <div className="card">
        <h3>Sentiment Analysis</h3>
        <p><strong>Bitcoin Sentiment</strong>: {sentimentData.bitcoin.positive}% Positive, {sentimentData.bitcoin.negative}% Negative</p>
        <p><strong>Ethereum Sentiment</strong>: {sentimentData.ethereum.positive}% Positive, {sentimentData.ethereum.negative}% Negative</p>
      </div>

      {/* Price Chart */}
      <PriceChart data={priceChartData} />

      {/* Trade History */}
      <TradeHistory />
      </div>
    </DashboardLayout>
  );
};

export default HomePage;
