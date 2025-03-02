// src/components/PriceChart.jsx

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PriceChart = ({ data }) => {
  return (
    <div className="card chart-container">
      <h3>Real-Time Price Chart</h3>
      <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
    <XAxis 
        dataKey="time" 
        stroke="#94A3B8" 
        tick={{ fill: '#64748B' }}
    />
    <YAxis 
        stroke="#94A3B8" 
        tick={{ fill: '#64748B' }}
    />
    <Tooltip 
        contentStyle={{
            background: '#1E293B',
            border: '1px solid #334155',
            borderRadius: '8px'
        }}
    />
    <Legend wrapperStyle={{ paddingTop: '20px' }} />
    <Line 
        type="monotone" 
        dataKey="price" 
        stroke="#2DD4BF" 
        strokeWidth={2}
        dot={false}
        activeDot={{ r: 6 }}
    />
</LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PriceChart;
