import React, { Component } from 'react';
import './Searchbar.css';

export class Searchbar extends Component {
  state = {
    keyWord: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.keyWord.trim() === '') {
      alert('Введите ключевое слово');
      return;
    }

    this.props.onSubmit(this.state.keyWord);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      keyWord: '',
    });
  };

  render() {
    return (
      <>
        <header className="Searchbar">
          <form onSubmit={this.handleSubmit} className="SearchForm">
            <button type="submit" className="SearchForm-button">
              <span className="SearchForm-button-label">Search</span>
            </button>

            <input
              className="SearchForm-input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              name="keyWord"
              value={this.state.keyWord}
              onChange={this.handleChange}
            />
          </form>
        </header>
      </>
    );
  }
}

export default Searchbar;