import React, { useState, useRef, useEffect } from 'react';
import './Profile.css';

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="profile-container" ref={dropdownRef}>
      <button 
        className="profile-button"
        onClick={() => setIsOpen(!isOpen)}
      > 
        <div className="profile-avatar">JD</div>
        <span className="profile-name">John Doe</span>
        <i className={`bi bi-chevron-${isOpen ? 'up' : 'down'}`}></i>
      </button>

      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-header">
            <p className="user-name">John Doe</p>
            <p className="user-email">john.doe@example.com</p>
          </div>

          <div className="dropdown-items">
            <button className="dropdown-item">
              <i className="bi bi-person"></i>
              <span>My Profile</span>
            </button>
            <button className="dropdown-item">
              <i className="bi bi-gear"></i>
              <span>Settings</span>
            </button>
            <button className="dropdown-item">
              <i className="bi bi-question-circle"></i>
              <span>Help</span>
            </button>
          </div>

          <div className="dropdown-divider"></div>

          <div className="dropdown-items">
            <button className="dropdown-item signout">
              <i className="bi bi-box-arrow-right"></i>
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;