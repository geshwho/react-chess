import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {  faChessPawn,
          faChessKnight,
          faChessBishop,
          faChessRook,
          faChessQueen,
          faChessKing
        } from '@fortawesome/fontawesome-free-solid/'

class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      row: props.row,
      col: props.col
    }
  }

  render() {
    // TODO: move this logic outta here!
    var ico;
    var color;
    switch(this.props.piece) {
      case 'P':
        ico = faChessPawn;
        break;
      case 'N':
        ico = faChessKnight;
        break;
      case 'B':
        ico = faChessBishop;
        break;
      case 'R':
        ico = faChessRook;
        break;
      case 'Q':
        ico = faChessQueen;
        break;
      case 'K':
        ico = faChessKing;
        break;
      case 'p':
        ico = faChessPawn;
        break;
      case 'n':
        ico = faChessKnight;
        break;
      case 'b':
        ico = faChessBishop;
        break;
      case 'r':
        ico = faChessRook;
        break;
      case 'q':
        ico = faChessQueen;
        break;
      case 'k':
        ico = faChessKing;
        break;
      default:
        ico = null;
    }
    switch(this.props.piece) {
      case 'P':
      case 'N':
      case 'B':
      case 'R':
      case 'Q':
      case 'K':
        color = 'white';
        break;
      case 'p':
      case 'n':
      case 'b':
      case 'r':
      case 'q':
      case 'k':
        color = 'black';
        break;
      default:
        color = null;
    }
    const piece = ico ? <FontAwesomeIcon icon={ico} size="2x" color={color} className="piece"/> : null;
    return (
      <div className="square" onClick={() => this.props.selector(this.state)} style={{backgroundColor: this.props.selected ? 'green' : ''}}>
        {piece}
      </div>
    )
  }
}

export default Square;
