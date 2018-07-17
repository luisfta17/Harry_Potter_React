import React, { Component } from 'react';

const HPSelector = props => {
  function handleChange(event) {
    const characterIndex = event.target.value
    props.onCharacterSelect(characterIndex)
  }

  return (
    <select onChange={handleChange}>
      <option disabled value="default" selected>Choose a character...</option>
      {props.characters.map((character, index) =>
        <option value={index} key={`character-${index}`}>{character.name}</option>
      )}
    </select>
  )
}

export default HPSelector
