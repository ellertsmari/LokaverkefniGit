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
          <p>Halló heimur</p>
          <p>Anna testar</p>
          <p>Ragnhildur testar</p>
      </div>
    );
  }
}

export default App;
