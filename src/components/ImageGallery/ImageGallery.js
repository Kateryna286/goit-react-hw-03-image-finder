import React from 'react';
import './ImageGallery.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

function ImageGallery({ images, onClick }) {
  return (
    <div>
      <ul className="ImageGallery">
        {images.map(image => (
          <ImageGalleryItem
            onClick={onClick}
            src={image.webformatURL}
            alt={image.user}
            key={image.id}
            id={image.id}
          />
        ))}
      </ul>
    </div>
  );
}

export default ImageGallery;
