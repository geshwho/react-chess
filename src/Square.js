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

  getIco() {
    var ico;
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
    return ico;
  }

  getColor() {
    var color;
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
    return color;
  }

  getClasses() {
    var classes = 'square';
    if (this.props.selected) {
      classes += ' selected';
    } else if (this.props.possibleMove) {
      classes += ' possible'
    } else {
      classes += ' notselected'
    }
    return classes;
  }

  render() {
    const [color, ico, classes] = [this.getColor(), this.getIco(), this.getClasses()];
    const piece = ico ? <FontAwesomeIcon icon={ico} size="2x" color={color} className="piece"/> : null;
    return (
      <div className={classes} onClick={() => this.props.selector(this.state)}>
        {piece}
      </div>
    )
  }
}

export default Square;
