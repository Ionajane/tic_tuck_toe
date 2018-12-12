import React, { Component } from 'react';
import SquareGrid from '../components/SquareGrid.js';

class BoardContainer extends Component {

  constructor() {
    super();
    this.state = {
      squares: [
        {value: ""},
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
