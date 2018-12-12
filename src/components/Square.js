import React from 'react';

const Square = (props) => {

  function handleClick(event) {
    props.handleSquareClick(props.value);
  }

  if (props.selection === null) {
    return(
      <img onClick={handleClick} src={require("../images/RuPaulSilhouette.png")} height="200px;"/>
    )};

  if (props.selection === 1) {
    return(
      <img onClick={handleClick} src={require("../images/RuPaul_vector.gif")} height="200px;"/>
    )}

  if (props.selection === 2) {
    return(
      <img onClick={handleClick} src={require("../images/sissy_spastik_dribbble.png")} height="200px;"/>
    )}
}

export default Square;
