import React from 'react';
import './Preloader.css';

export default function Preloader({ progress, isLoaded }) {
  return (
    <div className={`loader-container ${isLoaded ? 'hidden' : ''}`}>
      <div className="loader-content">
        {/* Animated Double Orbit Spinner */}
        <div className="orbit-spinner">
          <div className="orbit-ring ring-outer"></div>
          <div className="orbit-ring ring-inner"></div>
          <div className="orbit-core"></div>
        </div>

        {/* Counter Display
        <div className="counter-group">
          <span className="counter-number">{progress}</span>
          <span className="counter-percent">%</span>
        </div> */}

        {/* Shimmer Progress Track */}
        <div className="progress-bar-track">
          <div
            className="progress-bar-fill"
            style={{ width: `${progress}%` }}
          >
            <div className="progress-shimmer"></div>
          </div>
        </div>

        <p className="loader-subtitle">Loading 300 HD Frame Experience</p>
      </div>
    </div>
  );
}
