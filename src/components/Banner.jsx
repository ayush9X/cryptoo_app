import React from 'react';
import './Banner.css';

function Banner() {
  return (
    <div className="top-banner" aria-live="polite">
      <span className="flash-icon" aria-hidden="true">⚡</span>
      <span><strong>SPECIAL LAUNCH OFFER ... </strong></span>
      <a href="#"><strong style={{ color: 'white' }}>Ends Soon!</strong></a>
    </div>
  );
}

export default Banner;
