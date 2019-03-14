import React, { Component } from 'react';

import './App.css';
import Anna from './anna.js';
import Ragnhildur from './ragnhildur.js';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Anna></Anna>
          <Ragnhildur />
      </div>
    );
  }
}

export default App;
