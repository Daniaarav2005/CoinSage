// src/components/Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <h1>coinSage</h1>
      </div>
      <div style={styles.searchContainer}>
        <input type="text" placeholder="Search..." style={styles.searchBar} />
      </div>
      <div style={styles.navLinks}>
        <Link to="/" style={styles.link}>Dashboard</Link>
        <Link to="/sentiment" style={styles.link}>Sentiment</Link>
        <Link to="/market" style={styles.link}>Market</Link>
        <Link to="/trade-history" style={styles.link}>Trade History</Link>
      </div>
    </nav>
  );
};

const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'rgba(30, 41, 59, 0.8)',
      padding: '1rem 2rem',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid #334155'
    },
    logo: {
      color: '#2DD4BF',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      letterSpacing: '-0.025em',
    },
    searchContainer: {
      flex: 1,
      textAlign: 'center',
      maxWidth: '600px',
      margin: '0 2rem'
    },
    searchBar: {
      width: '100%',
      padding: '0.75rem 1.25rem',
      borderRadius: '0.75rem',
      border: '1px solid #334155',
      background: '#1E293B',
      color: 'white',
      fontSize: '0.875rem',
    },
    navLinks: {
      display: 'flex',
      gap: '1.5rem',
    },
    link: {
      textDecoration: 'none',
      color: '#94A3B8',
      fontSize: '0.875rem',
      transition: 'color 0.3s ease',
      fontWeight: 500,
    },
  };

export default Navbar;
