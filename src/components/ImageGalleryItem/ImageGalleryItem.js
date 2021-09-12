import React, { Component } from 'react';
import './ImageGalleryItem.css';

class ImageGalleryItem extends Component {
  getId = event => {
    const Id = event.currentTarget.id;
    this.props.onClick(Id);
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

export default ImageGalleryItem;
