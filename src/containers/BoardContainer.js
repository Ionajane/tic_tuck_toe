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
    newState.currentPlayer = this.getNextPlayerNumber(newState)
    console.log("this is the new state:", newState);
    this.setState(newState);
  }

  changeSquareValue(square) {
    console.log("changeSquareValue triggered for this square");
    if (square.selection === null) {
      square.selection = this.state.currentPlayer;
    }
  }

  getNextPlayerNumber(currentState) {
    console.log("changeCurrentPlayer triggered");
    if (currentState.currentPlayer === 1) {
      return 2
    }
    if (currentState.currentPlayer === 2) {
      return 1
    }
  }

  render() {
    return(
      <div className="board-container">
        <h1>TICK - TUCK - TOE</h1>
        <SquareGrid data={this.state.squares} handleSquareClick={this.handleSquareClick}/>
      </div>
    )
  }
}

export default BoardContainer;
