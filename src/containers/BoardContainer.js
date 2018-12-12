import React, { Component } from 'react';
import SquareGrid from '../components/SquareGrid.js';

class BoardContainer extends Component {

  constructor() {
    super();
    this.state = {
      squares: [
        {value: "x"},
        {value: ""},
        {value: ""},
        {value: ""},
        {value: ""},
        {value: ""},
        {value: ""},
        {value: ""},
        {value: ""}
      ]
    }
    // this.handleSquareClick = this.handleSquareClick.bind(this);
  }

  handleSquareClick(index) {
    const newSquares = this.state.squares;
    this.changeSquareValue(newSquares[index]);
    this.setState({squares: newSquares});
  }

  changeSquareValue(square) {
    if (square.value == "") {
      return square.value = "x";
    }
  }

  render() {
    return(
      <>
        <h1>Ru Paul</h1>
        <SquareGrid data={this.state.squares}/>
      </>
    )
  }
}

export default BoardContainer;
