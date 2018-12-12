import React, { Component } from 'react';
import SquareGrid from '../components/SquareGrid.js';

class BoardContainer extends Component {

  constructor() {
    super();
    this.state = {
      squares: [
        {selection: "x"},
        {selection: ""},
        {selection: ""},
        {selection: ""},
        {selection: ""},
        {selection: ""},
        {selection: ""},
        {selection: ""},
        {selection: ""}
      ]
    }
    this.handleSquareClick = this.handleSquareClick.bind(this);
  }

  handleSquareClick(index) {
    const newSquares = this.state.squares;
    this.changeSquareValue(newSquares[index]);
    this.setState({squares: newSquares});
  }

  changeSquareValue(square) {
    if (square.selection === "") {
      return square.selection = "x";
    }
  }

  render() {
    return(
      <>
        <h1>TICK - TUCK - TOE</h1>
        <SquareGrid data={this.state.squares} handleSquareClick={this.handleSquareClick}/>
      </>
    )
  }
}

export default BoardContainer;
