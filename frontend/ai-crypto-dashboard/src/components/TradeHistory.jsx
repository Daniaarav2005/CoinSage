// src/components/TradeHistory.jsx

import React from 'react';

const TradeHistory = () => {
  const tradeData = [
    { time: '2025-03-01', action: 'Buy', crypto: 'Bitcoin', price: '$45,000', amount: '0.5 BTC' },
    { time: '2025-03-02', action: 'Sell', crypto: 'Ethereum', price: '$3,000', amount: '1 ETH' },
    { time: '2025-03-02', action: 'Buy', crypto: 'Cardano', price: '$2.5', amount: '100 ADA' },
  ];

  return (
    <div className="card">
      <h3>Trade History</h3>
      <table style={{ 
    width: '100%', 
    borderCollapse: 'collapse',
    marginTop: '1rem'
}}>
    <thead>
        <tr style={{ 
            backgroundColor: '#1E293B',
            borderBottom: '2px solid #334155'
        }}>
            <th style={{ padding: '1rem', textAlign: 'left', color: '#94A3B8' }}>Time</th>
            <th style={{ padding: '1rem', textAlign: 'left', color: '#94A3B8' }}>Action</th>
            <th style={{ padding: '1rem', textAlign: 'left', color: '#94A3B8' }}>Cryptocurrency</th>
            <th style={{ padding: '1rem', textAlign: 'left', color: '#94A3B8' }}>Price</th>
            <th style={{ padding: '1rem', textAlign: 'left', color: '#94A3B8' }}>Amount</th>
        </tr>
    </thead>
    <tbody>
        {tradeData.map((trade, index) => (
            <tr 
                key={index} 
                style={{ 
                    borderBottom: '1px solid #334155',
                    backgroundColor: index % 2 === 0 ? '#0F172A' : '#1E293B'
                }}
            >
                <td style={{ padding: '1rem', color: '#E2E8F0' }}>{trade.time}</td>
                <td style={{ padding: '1rem', color: '#E2E8F0' }}>{trade.action}</td>
                <td style={{ padding: '1rem', color: '#E2E8F0' }}>{trade.crypto}</td>
                <td style={{ padding: '1rem', color: '#E2E8F0' }}>{trade.price}</td>
                <td style={{ padding: '1rem', color: '#E2E8F0' }}>{trade.amount}</td>
            </tr>
        ))}
    </tbody>
</table>
    </div>
  );
};

export default TradeHistory;
