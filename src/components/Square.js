import React from 'react';

const Square = (props) => {

  function handleClick(event) {
    props.handleSquareClick(props.value);
  }

  if (props.selection === "") {
  return(
      <img onClick={handleClick} src={require("../images/RuPaulSilhouette.png")} height="200px;"/>
      // <h3 onClick={handleClick}>EMPTY</h3>
  )};

  return(
      <img onClick={handleClick} src={require("../images/RuPaul_vector.gif")} height="200px;"/>
      // <h3 onClick={handleClick}>QUEEN</h3>
  )
}

export default Square;
