import React, { Component } from 'react';
import './ImageGalleryItem.css';

class ImageGalleryItem extends Component {
  static defaultProps = {
    src: '',
    alt: '',
    id: '',
  };

  getId = event => {
    console.log(event.currentTarget.id);
  };

  render() {
    return (
      <li id={this.props.id} className="ImageGalleryItem" onClick={this.getId}>
        <img
          src={this.props.src}
          alt={this.props.alt}
          className="ImageGalleryItem-image"
        />
      </li>
    );
  }
}

// function ImageGalleryItem({ src, alt, onClick }) {
//   return (
//     <li className="ImageGalleryItem" onClick={onClick}>
//       <img src={src} alt={alt} className="ImageGalleryItem-image" />
//     </li>
//   );
// }

export default ImageGalleryItem;
