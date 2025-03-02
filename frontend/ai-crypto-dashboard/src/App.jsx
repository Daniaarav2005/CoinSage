// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import DashboardPage from './pages/DashboardPage';
import SentimentPage from './pages/SentimentPage';
import MarketPage from './pages/MarketPage';
import TradeHistoryPage from './pages/TradeHistoryPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/sentiment" element={<SentimentPage />} />
          <Route path="/market" element={<MarketPage />} />
          <Route path="/trade-history" element={<TradeHistoryPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
