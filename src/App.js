import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {  faChessPawn,
          faChessKnight,
          faChessBishop,
          faChessRook,
          faChessQueen,
          faChessKing
        } from '@fortawesome/fontawesome-free-solid/'
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
