import React, { Component } from 'react';
import Square from './Square.js';

const SquareGrid = (props) => {
  console.log("SquareGrid props:", props);
  const squares = props.data.map((square, index) => {
    return <Square
    value={square.value}
    key={square.index}
    />
  })

  return (
    <div className= "square-grid">
      {squares}
    </div>
  )
};

export default SquareGrid;
