import React, { Component } from 'react';

const Square = (props) => {
  if (props.value == "") {
  return(
    <p>SQUIRLS</p>
  )};

// function handleClick(event) {
//   console.log("square click event:",event.target.value);
//   props.handleSquareClick(event.target.value);
// }

  return(
    <>
      <a><p>Queens</p></a>
    </>
  )
}

export default Square;
