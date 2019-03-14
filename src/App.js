import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import Ragnhildur from './ragnhildur.js';
=======
import Anna from '../LokaverkefniGit/src/anna'

>>>>>>> 8b722e1687f4570dd55a73fd079ede59642d90ac

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Anna></Anna>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Ragnhildur />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
