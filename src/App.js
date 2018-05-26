import React, { Component } from 'react';
import './App.css';
import Board from './Board'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Chess</h1>
        <div>
          <Board/>
        </div>
      </div>
    );
  }
}

export default App;
