import React, { Component } from 'react';
import Square from './Square'

class Board extends Component {
  // constructor() {
  //   super();
  //   this.state = { starting position for chess }
  // }

  render() {
    const squares = []
    for (let j = 0; j < 8; j++) {
      squares.push(<Square key={j}/>)
    }
    return (
      <div>
        <h2>Board Placeholder</h2>
        <div>I have many <Square/></div>
        <div>Let's actually make some</div>
        <div className="board">{squares}</div>
      </div>
    )
  }
}

export default Board;
