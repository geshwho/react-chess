import React, { Component } from 'react';
import Square from './Square'

class Board extends Component {
  // constructor() {
  //   super();
  //   this.state = { starting position for chess }
  // }

  render() {
    const squares = []
    for (let i = 0; i < 8; i++) {
      const col = []
      for (let j = 0; j < 8; j++) {
        col.push(<Square key={j}/>)
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
