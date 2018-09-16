import React, { Component } from 'react';
import GifHolder from './containers/GifHolder/GifHolder';
import SearchBar from './components/SearchBar/SearchBar';

import './App.css';

let testVar;

class App extends Component {

  componentDidMount() {
    this.callApi()
      .then(res => {
        testVar = res.express;
        console.log(testVar);
        return testVar
      })
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

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
