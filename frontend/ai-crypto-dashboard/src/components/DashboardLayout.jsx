// src/components/DashboardLayout.js
import React from 'react';
import './DashboardLayout.css'; // Import custom CSS

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <nav>
          <ul>
            <li><a href="#">Overview</a></li>
            <li><a href="#">Sentiment Analysis</a></li>
            <li><a href="#">Trade History</a></li>
            <li><a href="#">Settings</a></li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
