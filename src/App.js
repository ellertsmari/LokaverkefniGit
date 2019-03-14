import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Anna from './anna.js';
import Ragnhildur from './ragnhildur.js';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Anna></Anna>
          <Ragnhildur />
          <p>halló heimur</p>
      </div>
    );
  }
}

export default App;
