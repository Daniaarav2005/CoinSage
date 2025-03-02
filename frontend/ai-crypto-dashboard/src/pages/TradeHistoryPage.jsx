// src/pages/TradeHistoryPage.jsx

import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import TradeHistory from '../components/TradeHistory';

const TradeHistoryPage = () => {
  return (
    <DashboardLayout>
      <h2>Trade History</h2>
      <TradeHistory />
    </DashboardLayout>
  );
};

export default TradeHistoryPage;
