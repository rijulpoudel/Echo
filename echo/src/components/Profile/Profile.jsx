import React from 'react';
import './Profile.css';

const ProfileDropdown = () => {
  return (
    <div className="profile-container">
      <button className="profile-button"> 
        <div className="profile-avatar">JD</div>
        <span className="profile-name">John Doe</span>
        <i className="bi bi-chevron-down"></i>
      </button>
    </div>
  );
};

export default ProfileDropdown;