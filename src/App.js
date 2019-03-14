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

          <p>Anna testar</p>
          <p>Anna testar aftur</p>
      </div>
    );
  }
}

export default App;
