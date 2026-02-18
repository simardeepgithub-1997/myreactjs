import React from 'react';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { currentUser, logout } = useAuth();

  return (
    <nav className="amazon-navbar">
      <div className="nav-left">
        <div className="nav-logo">
          <span className="amazon-logo">amazon</span>
          <span className="domain">.in</span>
        </div>
        <div className="nav-location">
          <span className="location-icon">📍</span>
          <div className="location-text">
            <span className="deliver-to">Deliver to {currentUser?.name || 'User'}</span>
            <span className="city">Update location</span>
          </div>
        </div>
      </div>

      <div className="nav-search">
        <select className="search-select">
          <option>All</option>
        </select>
        <input type="text" placeholder="Search Amazon.in" />
        <button className="search-btn">🔍</button>
      </div>

      <div className="nav-right">
        <div className="nav-item">
          <span className="nav-line-1">Hello, {currentUser?.name || 'Sign in'}</span>
          <span className="nav-line-2">Account & Lists</span>
          <div className="nav-dropdown">
            <button onClick={logout}>Sign Out</button>
          </div>
        </div>
        <div className="nav-item">
          <span className="nav-line-1">Returns</span>
          <span className="nav-line-2">& Orders</span>
        </div>
        <div className="nav-item cart">
          <span className="cart-icon">🛒</span>
          <span className="nav-line-2">Cart</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
