import React, { Component } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import './App.css';

export default class App extends Component {
  state = {
    images: [],
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });

    setTimeout(() => {
      axios
        .get(
          'https://pixabay.com/api/?q=cat&page=1&key=22564694-3177f5daba1f2572eee652a36&image_type=photo&orientation=horizontal&per_page=12',
        )
        .then(response => this.setState({ images: response.data.hits }))
        .finally(() => this.setState({ loading: false }));
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <Searchbar />
        {this.state.loading && (
          <Loader type="Oval" color="#00BFFF" height={80} width={80} />
        )}
        {this.state.images && <ImageGallery images={this.state.images} />}
      </div>
    );
  }
}

//my key 22564694-3177f5daba1f2572eee652a36;
