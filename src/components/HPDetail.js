import React from 'react';

const HPDetail = props => {
  if (!props.character) {return null}
  const character = props.character
  
  return(
    <div>
      <h3> {character.name} </h3>
      <p> {character.house}</p>
      <img src={character.image}/>
    </div>
  )
}

export default HPDetail;
