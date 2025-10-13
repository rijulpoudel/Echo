import React from 'react';
import './Navbar.css';
import ECHO from '../../assets/ECHOlogo.svg'; // your SVG logo
import ProfileDropdown from '../Profile/Profile';

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Left section: Logo + ECHO + nav icons */}
      <div className="left">
        <img src={ECHO} alt="Echo Logo" className="logo-ECHO" />

        <div className="nav-links">
          <i className="bi bi-chat-dots"></i>
          <i className="bi bi-bell"></i>
          <i className="bi bi-plus"></i>
        </div>
      </div>

      {/* Center section: Search box */}
      <div className="center">
        <div className="search-box">
          <input type="text" placeholder="Search for Community posts" />
          <i className="bi bi-search"></i>
        </div>
      </div>

      {/* Right section (optional) */}
      <div className="right">
        <button className = 'btn-signin'> Sign In </button>
        <button className = 'btn-register'> Register</button>
      </div>
    </div>
  );
};

export default Navbar;
