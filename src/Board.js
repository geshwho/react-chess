import React, { Component } from 'react';
import Square from './Square'
import {toRowCol, toAlgebraicNotation} from './chess_notation'
import Chess from 'chess.js'

class Board extends Component {
  constructor() {
    super();
    // We'll use FEN notation. Cuz.. why re-invent something?
    this.state = {
      position: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      selectedSquare: null,
      row: null,
      col: null,
      chess: new Chess("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1")
    }

    this.squareSelector = this.squareSelector.bind(this);
  }

  squareSelector(square) {
    const algebraicSquare = toAlgebraicNotation(square.row, square.col)
    if(this.state.chess.get(algebraicSquare) !== null){
      this.setState({
          selectedSquare: algebraicSquare,
        row: square.row,
        col: square.col,
      });
    }
  }

  replacer(match, offset, string) {
    const rep = parseInt(match,10);
    return ' '.repeat(rep);
  }

  getSquares() {
    // Converts FEN into <Square>s
    const squares = [];
    const moves = this.state.chess.moves({ square: this.state.selectedSquare });
    console.log(moves);
    var pieces = this.state.position.split(' ')[0];
    pieces = pieces.replace(/\d/g, this.replacer);
    pieces = pieces.split('/');
    for (let i = 0; i < 8; i++) {
      const col = []
      for (let j = 0; j < 8; j++) {
        const selected = this.state.row===i && this.state.col===j;
        col.push(<Square key={j} row={i} col={j} piece={pieces[i][j]} selector={this.squareSelector} selected={selected} />)
      }
      squares.push(<div className="col" key={i}>{col}</div>)
    }
    return squares;
  }

  render() {
    const sqs = this.getSquares();
    return (
      <div>
        <h2>Board Placeholder</h2>
        <div>Let's actually make some squares</div>
        <div className="board">{sqs}</div>
      </div>
    )
  }
}

export default Board;
