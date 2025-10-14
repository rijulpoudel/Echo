import React from 'react';
import './Landing.css';
import heroImage from '../../assets/NepalBG.jpg'; // adjust to your actual path

const Landing = () => {
  return (
    <div 
      className="landing-container"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="overlay">
        <h1 className="landing-title">Welcome to Echo</h1>
        <p className="landing-subtitle">Connect with communities that matter</p>
        <button className="landing-btn">Get Started</button>
      </div>
    </div>
  );
};

export default Landing;
