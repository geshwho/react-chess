import React, { Component } from 'react';
import Square from './Square'
import {toAlgebraicNotation} from './chess_notation'
import Chess from 'chess.js'

class Board extends Component {
  constructor() {
    super();
    this.state = {
      selectedSquare: null,
      row: null,
      col: null,
      chess: new Chess("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"),
      moves: []
    }

    this.squareSelector = this.squareSelector.bind(this);
  }

  squareSelector(square) {
    const {selectedSquare, chess, moves} = this.state;
    const algebraicSquare = toAlgebraicNotation(square.row, square.col);
    const getSquare = chess.get(algebraicSquare);
    if (selectedSquare !== null && moves.includes(algebraicSquare)) { // already have a selected square, see if we clicked a possible move
      // this seems wrong. move() updates the state technically..
      chess.move({ from: selectedSquare, to: algebraicSquare });
      this.setState({
        selectedSquare: null,
        row: null,
        col: null,
        moves: []
      });
    } else if(getSquare !== null && getSquare.color === chess.turn()){ // nothing currently selected, see if we clicked the right color piece
      this.setState({
        selectedSquare: algebraicSquare,
        row: square.row,
        col: square.col,
        moves: this.state.chess.moves({ square: algebraicSquare, verbose: true }).map((x) => x.to)
      });
    } else { // otherwise, reset selections
      this.setState({
        selectedSquare: null,
        row: null,
        col: null,
        moves: []
      });
    }
  }

  replacer(match, offset, string) {
    const rep = parseInt(match,10);
    return ' '.repeat(rep);
  }

  squareFormatters(i, j){
    const selected = this.state.row===i && this.state.col===j;
    const possibleMove = this.state.moves.includes(toAlgebraicNotation(i, j));
    return [selected, possibleMove]
  }

  getSquares() {
    // Converts FEN into <Square>s
    const squares = [];
    var pieces = this.state.chess.fen().split(' ')[0];
    //this logic can be rewritten to just use chess.board()
    pieces = pieces.replace(/\d/g, this.replacer);
    pieces = pieces.split('/');
    for (let i = 0; i < 8; i++) {
      const col = []
      for (let j = 0; j < 8; j++) {
        const [selected, possibleMove] = this.squareFormatters(i, j);
        col.push(<Square key={j} row={i} col={j} piece={pieces[i][j]} selector={this.squareSelector} selected={selected} possibleMove={possibleMove}/>)
      }
      squares.push(<div className="col" key={i}>{col}</div>)
    }
    return squares;
  }

  render() {
    const sqs = this.getSquares();
    return (
      <div>
        <div className="board">{sqs}</div>
      </div>
    )
  }
}

export default Board;
