import React from 'react';
import './Features.css'

function Features({title,image,content}) {
  return (
    <div>
      <h2 className="sr-only">Features</h2>
      <div className="feature-item">
        <img src={image} alt="Chat Icon" className="feature-icon" />
        <h3 className="feature-item-title">{title}</h3>
        <p>
         {content}
        </p>
      </div>
      
    </div>
  );
}

export default Features;