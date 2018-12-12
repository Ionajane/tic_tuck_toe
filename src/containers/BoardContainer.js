import React, { Component } from 'react';
import SquareGrid from '../components/SquareGrid.js';

class BoardContainer extends Component {

  constructor() {
    super();
    this.state = {
      squares: [
        {selection: null},
        {selection: null},
        {selection: null},
        {selection: null},
        {selection: null},
        {selection: null},
        {selection: null},
        {selection: null},
        {selection: null}
      ],
      currentPlayer: 1
    }
    this.handleSquareClick = this.handleSquareClick.bind(this);
  }

  handleSquareClick(index) {
    const newState = this.state;

    newState.squares[index].selection = this.getNewSquareSelection(newState.squares[index]);
    newState.currentPlayer = this.getNextPlayerNumber(newState);
    
    this.setState(newState);
  }

  getNewSquareSelection(square) {
    if (square.selection === null) {
      return this.state.currentPlayer;
    }
  }

  getNextPlayerNumber(currentState) {
    if (currentState.currentPlayer === 1) {
      return 2
    }
    if (currentState.currentPlayer === 2) {
      return 1
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
