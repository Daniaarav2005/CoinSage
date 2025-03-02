// src/components/TradeHistory.jsx
import React from 'react';

const TradeHistory = () => {
  const tradeData = [
    { time: '2025-03-01', action: 'Buy', crypto: 'Bitcoin', price: '$45,000', amount: '0.5 BTC' },
    { time: '2025-03-02', action: 'Sell', crypto: 'Ethereum', price: '$3,000', amount: '1 ETH' },
    { time: '2025-03-02', action: 'Buy', crypto: 'Cardano', price: '$2.5', amount: '100 ADA' },
  ];

  return (
    <div>
      <h3>Trade History</h3>
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Time</th>
            <th>Action</th>
            <th>Cryptocurrency</th>
            <th>Price</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {tradeData.map((trade, index) => (
            <tr key={index}>
              <td>{trade.time}</td>
              <td>{trade.action}</td>
              <td>{trade.crypto}</td>
              <td>{trade.price}</td>
              <td>{trade.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TradeHistory;
