import React from 'react';

const Square = (props) => {

  function handleClick(event) {
    props.handleSquareClick(props.value);
  }

  if (props.selection === null) {
    return(
      <div className= "square">
      <img onClick={handleClick} src={require("../images/RuPaulSilhouette.png")} height="200px;"/>
      </div>
    )};

  if (props.selection === 1) {
    return(
      <div className= "square">
      <img onClick={handleClick} src={require("../images/RuPaul_vector.gif")} height="200px;"/>
      </div>
    )}

  if (props.selection === 2) {
    return(
      <div className= "square">
      <img onClick={handleClick} src={require("../images/michelleVisage.png")} height="200px;"/>
      </div>
    )}
}

export default Square;
