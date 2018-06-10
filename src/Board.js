import React, { Component } from 'react';
import Square from './Square'

class Board extends Component {
  constructor() {
    super();
    // We'll use FEN notation. Cuz.. why re-invent something?
    // Also chess.js uses this if I decide this is only going to be a UI project
    // and chess.js will handle all of the validation, moving pieces, etc.
    this.state = {
      position: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
    }
  }

  replacer(match, offset, string) {
    const rep = parseInt(match,10);
    return ' '.repeat(rep);
  }

  render() {
    const squares = []
    var pieces = this.state.position.split(' ')[0];
    pieces = pieces.replace(/\d/g, this.replacer);
    pieces = pieces.split('/');
    for (let i = 0; i < 8; i++) {
      const col = []
      for (let j = 0; j < 8; j++) {
        col.push(<Square key={j} piece={pieces[i][j]}/>)
      }
      squares.push(<div className="col" key={i}>{col}</div>)
    }
    return (
      <div>
        <h2>Board Placeholder</h2>
        <div>Let's actually make some squares</div>
        <div className="board">{squares}</div>
      </div>
    )
  }
}

export default Board;
