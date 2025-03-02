// src/pages/DashboardPage.jsx

import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import PriceChart from '../components/PriceChart';
import { priceChartData } from '../mockdata';

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <h2>Dashboard Overview</h2>
      <PriceChart data={priceChartData} />
    </DashboardLayout>
  );
};

export default DashboardPage;
