import React from 'react';
import Square from './Square.js';

const SquareGrid = (props) => {

  const squares = props.data.map((square, index) => {
    return <Square
    value={index}
    key={index}
    selection={square.selection}
    handleSquareClick={props.handleSquareClick.bind(this)}
    />
  })

  return (
    <div className= "square-grid">
      {squares}
    </div>
  )
};

export default SquareGrid;
