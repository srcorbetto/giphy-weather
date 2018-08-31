import React, { Component } from 'react';
import GifHolder from './containers/GifHolder/GifHolder';
import SearchBar from './components/SearchBar/SearchBar';

import './App.css';

let data;

class App extends Component {

  componentDidMount() {
    // Call our fetch function below once the component mounts
  this.callBackendAPI()
    .then(res => data = res.express)
    .catch(err => console.log(err));
}
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
callBackendAPI = async () => {
  const response = await fetch('/express_backend');
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message) 
  }
  return body;
};

  render() {
    console.log(data);
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
