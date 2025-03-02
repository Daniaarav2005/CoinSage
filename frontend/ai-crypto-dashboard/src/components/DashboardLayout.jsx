// src/components/DashboardLayout.js
import React from 'react';

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 border-r p-4">
        <nav>
          <ul>
            <li className="mb-4"><a href="#">Overview</a></li>
            <li className="mb-4"><a href="#">Sentiment Analysis</a></li>
            <li className="mb-4"><a href="#">Trade History</a></li>
            <li className="mb-4"><a href="#">Settings</a></li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
