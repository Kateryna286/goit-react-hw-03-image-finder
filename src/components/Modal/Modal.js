import React from 'react';
import './Modal.css';

function Modal(src, alt) {
  return (
    <div className="Overlay">
      <div className="Modal">
        <img src={src} alt={alt} />
      </div>
    </div>
  );
}

export default Modal;
