import React from 'react';
import './ImageGalleryItem.css';

function ImageGalleryItem({ src, alt }) {
  return (
    <li className="ImageGalleryItem">
      <img src={src} alt={alt} className="ImageGalleryItem-image" />
    </li>
  );
}

export default ImageGalleryItem;
