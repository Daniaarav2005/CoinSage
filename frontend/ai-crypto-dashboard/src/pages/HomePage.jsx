// src/pages/HomePage.jsx
import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { sentimentData, cryptoPrices } from '../mockData';
import PriceChart from '../components/PriceChart';
import TradeHistory from '../components/TradeHistory';

// Create mock price data for the chart
const priceChartData = [
  { time: '2025-03-01', price: 45000 },
  { time: '2025-03-02', price: 46000 },
  { time: '2025-03-03', price: 47000 },
  { time: '2025-03-04', price: 48000 },
];

const HomePage = () => {
  return (
    <DashboardLayout>
      <h2>Dashboard Overview</h2>
      <p>Welcome to your crypto investment dashboard. This is where you will track sentiment, prices, and trading activities.</p>

      {/* Sentiment Section */}
      <div>
        <h3>Sentiment Analysis</h3>
        <p>This section will show sentiment analysis graphs or charts for selected cryptocurrencies.</p>
        <p>Bitcoin Sentiment: {sentimentData.bitcoin.positive}% Positive, {sentimentData.bitcoin.negative}% Negative</p>
        <p>Ethereum Sentiment: {sentimentData.ethereum.positive}% Positive, {sentimentData.ethereum.negative}% Negative</p>
      </div>

      {/* Real-Time Price Chart */}
      <PriceChart data={priceChartData} />

      {/* Prices Section */}
      <div>
        <h3>Crypto Prices</h3>
        <p>Here we will display real-time crypto prices.</p>
      </div>

      {/* Trade History Section */}
      <div>
        <h3>Trade History</h3>
        <p>Track your trading activity here.</p>
        <TradeHistory />
      </div>
    </DashboardLayout>
  );
};

export default HomePage;
