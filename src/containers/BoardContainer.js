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
    this.changeSquareValue(newState.squares[index]);
    this.changeCurrentPlayer(newState.currentPlayer)
    this.setState(newState);
  }

  changeSquareValue(square) {
    if (square.selection === null) {
      square.selection = this.state.currentPlayer;
    }
  }

  changeCurrentPlayer(currentPlayer) {
    if (currentPlayer === 1) {
      currentPlayer = 2
    }
    if (currentPlayer === 2) {
      currentPlayer = 1
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
