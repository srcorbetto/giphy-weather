import React, { Component } from 'react';
import GifHolder from './containers/GifHolder/GifHolder';
import SearchBar from './components/SearchBar/SearchBar';

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="container component-container">
          <SearchBar />
          <GifHolder />
        </div>
        <div className="footer-container container-fluid">
        </div>
      </div>
    );
  }
}

export default App;
