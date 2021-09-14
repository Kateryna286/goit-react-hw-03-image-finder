import React, { Component } from 'react';
import axios from 'axios';
import './ImageGallery.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Loader from 'react-loader-spinner';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

export default class ImageGallery extends Component {
  state = {
    images: null,
    page: 1,
    id: null,
    showModal: false,
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const { keyWord } = this.props;
    const { page } = this.state;

    if (prevProps.keyWord !== keyWord) {
      this.setState({
        images: null,
        page: 1,
        status: 'pending',
      });

      axios
        .get(
          `https://pixabay.com/api/?q=${keyWord}&page=${page}&key=22564694-3177f5daba1f2572eee652a36&image_type=photo&orientation=horizontal&per_page=12`,
        )
        .then(response => {
          if (response.data.total === 0) {
            this.setState({
              status: 'rejected',
              error: `Картинок по поиску '${keyWord}' не обнаружено`,
            });
          } else {
            this.setState({
              images: [...response.data.hits],
              status: 'resolved',
            });
          }
        })
        .then(this.smoothScroll)
        .catch(error => this.setState({ error: 'error', status: 'rejected' }));
    }

    if (
      prevState.page !== page &&
      page !== 1 &&
      prevProps.keyWord === keyWord
    ) {
      this.setState({
        status: 'pending',
      });
      axios
        .get(
          `https://pixabay.com/api/?q=${keyWord}&page=${page}&key=22564694-3177f5daba1f2572eee652a36&image_type=photo&orientation=horizontal&per_page=12`,
        )
        .then(response =>
          this.setState({
            images: [...prevState.images, ...response.data.hits],
            status: 'resolved',
          }),
        )
        .then(this.smoothScroll)
        .catch(error => this.setState({ error: 'error', status: 'rejected' }));
    }
  }

  smoothScroll() {
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

  formSubmitHandler = id => {
    this.setState({ id });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  getInfoById = () => {
    const { images, id } = this.state;

    if (images !== null) {
      const imgById = images.find(image => image.id === id);
      return imgById;
    }
  };

  render() {
    const imgById = this.getInfoById();
    const { images, status, page, showModal } = this.state;

    if (status === 'idle') {
      return <div>Введите ключевое слово</div>;
    }

    if (status === 'pending') {
      return <Loader type="Oval" color="#00BFFF" height={80} width={80} />;
    }

    if (status === 'resolved') {
      return (
        <div>
          <ul className="ImageGallery">
            {images.map(image => (
              <ImageGalleryItem
                src={image.webformatURL}
                alt={image.user}
                key={image.id}
                id={image.id}
                onClick={this.formSubmitHandler}
              />
            ))}
          </ul>

          {(page > 1 || images !== null) && (
            <Button onClick={this.hundleButtonClick} />
          )}
          {showModal && (
            <Modal
              onClose={this.toggleModal}
              src={imgById.largeImageURL}
              alt={imgById.id}
            />
          )}
        </div>
      );
    }

    if (status === 'rejected') {
      return <div>{this.state.error}</div>;
    }
  }
}
