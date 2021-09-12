import React, { Component } from 'react';
import axios from 'axios';
import './ImageGallery.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Loader from 'react-loader-spinner';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

export default class ImageGallery extends Component {
  state = {
    images: [],
    loading: false,
    page: 1,
    id: '',
    showModal: false,
  };

  static defaultProps = {
    keyWord: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.keyWord !== this.props.keyWord ||
      prevState.page !== this.state.page
    ) {
      this.setState({ loading: true });

      setTimeout(() => {
        axios
          .get(
            `https://pixabay.com/api/?q=${this.props.keyWord}&page=${this.state.page}&key=22564694-3177f5daba1f2572eee652a36&image_type=photo&orientation=horizontal&per_page=12`,
          )
          .then(response =>
            this.setState({
              images: [...prevState.images, ...response.data.hits],
            }),
          )
          .finally(() => this.setState({ loading: false }));
      }, 1000);
    }

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  hundleButtonClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  formSubmitHandler = Id => {
    this.setState({ id: Id });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  getInfoById = () => {
    const currentId = +this.state.id;
    const imgById = this.state.images.find(image => image.id === currentId);

    return imgById;
  };

  render() {
    const imgById = this.getInfoById();

    return (
      <div>
        <ul className="ImageGallery">
          {this.state.images.map(image => (
            <ImageGalleryItem
              src={image.webformatURL}
              alt={image.user}
              key={image.id}
              id={image.id}
              onClick={this.formSubmitHandler}
            />
          ))}
        </ul>
        {this.state.loading && (
          <Loader type="Oval" color="#00BFFF" height={80} width={80} />
        )}
        {this.state.images.length > 0 && (
          <Button onClick={this.hundleButtonClick} />
        )}
        {this.state.showModal && (
          <Modal
            onClick={this.toggleModal}
            src={imgById.largeImageURL}
            alt={imgById.id}
          />
        )}
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
