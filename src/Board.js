import React, { Component } from 'react';
import Square from './Square'
import {toRowCol, toAlgebraicNotation} from './chess_notation'

class Board extends Component {
  constructor() {
    super();
    // We'll use FEN notation. Cuz.. why re-invent something?
    this.state = {
      position: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      selectedSquare: null,
      row: null,
      col: null
    }

    this.squareSelector = this.squareSelector.bind(this);
  }

  squareSelector(square) {
    this.setState({
      selectedSquare: toAlgebraicNotation(square.row, square.col),
      row: square.row,
      col: square.col,
    });
  }

  replacer(match, offset, string) {
    const rep = parseInt(match,10);
    return ' '.repeat(rep);
  }

  render() {
    // TODO: move logic outside of render
    const squares = []
    var pieces = this.state.position.split(' ')[0];
    pieces = pieces.replace(/\d/g, this.replacer);
    pieces = pieces.split('/');
    for (let i = 0; i < 8; i++) {
      const col = []
      for (let j = 0; j < 8; j++) {
        col.push(<Square key={j} row={i} col={j} piece={pieces[i][j]} selector={this.squareSelector} selected={this.state.row===i && this.state.col===j} />)
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
