import React from 'react';
import './ImageGallery.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

function ImageGallery({ images }) {
  return (
    <div>
      <ul className="ImageGallery">
        {images.map(image => (
          <ImageGalleryItem
            src={image.webformatURL}
            alt={image.user}
            key={image.id}
          />
        ))}
      </ul>
    </div>
  );
}

export default ImageGallery;
