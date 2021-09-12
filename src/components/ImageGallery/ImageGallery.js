import React, { Component } from 'react';
import './ImageGallery.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

export default class ImageGallery extends Component {
  static defaultProps = {
    images: [],
  };

  render() {
    return (
      <div>
        <ul className="ImageGallery">
          {this.props.images.map(image => (
            <ImageGalleryItem
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
}

// function ImageGallery({ images}) {
//   return (
//     <div>
//       <ul className="ImageGallery">
//         {images.map(image => (
//           <ImageGalleryItem
//             src={image.webformatURL}
//             alt={image.user}
//             key={image.id}
//             id={image.id}
//           />
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ImageGallery;
