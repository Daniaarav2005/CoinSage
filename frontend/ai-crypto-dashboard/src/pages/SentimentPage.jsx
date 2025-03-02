// src/pages/SentimentPage.jsx

import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { sentimentData } from '/Users/KrrishDas1/Z Krrish Machine/projects/coinSage/frontend/ai-crypto-dashboard/src/mockdata';

const SentimentPage = () => {
  return (
    <DashboardLayout>
      <h2>Sentiment Analysis</h2>
      <div className="card">
        <h3>Bitcoin Sentiment</h3>
        <p><strong>Positive</strong>: {sentimentData.bitcoin.positive}%</p>
        <p><strong>Negative</strong>: {sentimentData.bitcoin.negative}%</p>
      </div>
    </DashboardLayout>
  );
};

export default SentimentPage;
