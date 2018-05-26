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
        <h2>Here are some chess pieces</h2>
        <FontAwesomeIcon icon={faChessPawn} size="2x"/>
        <FontAwesomeIcon icon={faChessKnight} size="2x"/>
        <FontAwesomeIcon icon={faChessBishop} size="2x"/>
        <FontAwesomeIcon icon={faChessRook} size="2x"/>
        <FontAwesomeIcon icon={faChessQueen} size="2x"/>
        <FontAwesomeIcon icon={faChessKing} size="2x"/>
        <div>
          <Board/>
        </div>
      </div>
    );
  }
}

export default App;
