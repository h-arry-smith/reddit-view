import React from 'react'

import './PostPlaceholder.css';

export const PostPlaceholder = () => {
  return (
    <div className="PostPlaceholder">
      <div className="PostPlaceholder-image">
        <p>...</p>
      </div>
      <div className="PostPlaceholder-cardText">
        <h1 className="PostPlaceholder-title">Loading...</h1>
        <p className="PostPlaceholder-info">Loading...</p>
      </div>
      <div className="PostPlaceholder-score">
        <p>10000</p>
      </div>
    </div>
  );
}