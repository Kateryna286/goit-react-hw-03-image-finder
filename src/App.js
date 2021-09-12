import React, { Component } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import './App.css';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';

export default class App extends Component {
  state = {
    images: [],
    loading: false,
    keyWord: '',
    page: 1,
    showModal: false,
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.keyWord !== this.state.keyWord ||
      prevState.page !== this.state.page
    ) {
      this.setState({ loading: true });

      setTimeout(() => {
        axios
          .get(
            `https://pixabay.com/api/?q=${this.state.keyWord}&page=${this.state.page}&key=22564694-3177f5daba1f2572eee652a36&image_type=photo&orientation=horizontal&per_page=12`,
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

  formSubmitHandler = data => {
    this.setState({ keyWord: data });
  };

  hundleButtonClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.formSubmitHandler} />
        <ImageGallery images={this.state.images} />
        {this.state.loading && (
          <Loader type="Oval" color="#00BFFF" height={80} width={80} />
        )}
        {this.state.images.length > 0 && (
          <Button onClick={this.hundleButtonClick} />
        )}
        {this.state.showModal && <Modal />}
      </div>
    );
  }
}

//my key 22564694-3177f5daba1f2572eee652a36;
