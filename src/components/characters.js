import React from 'react';
import { useState, useCallback, useEffect, useRef } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

import characters from '../data/datacharacters';

const CHARACTERS = characters;

function Character(props) {
  const {character} = props
  return (
    <div className="col-lg-3">
      <div className="card bg-dark text-white hover-zoom-interest">
        <div className="card-img-wrapper">
          <img src={character.image} className="card-img zoom-effect" alt={character.title} />
        </div>
        <div class="card-body">
          <h5>{character.name}</h5>
        </div>
      </div>
    </div>
  )
}

function CharacterList(props) {
  const {characters} = props

  return (
    <>
      {characters.map(character => (
        <Character character={character} />
      ))}
    </>
  )
}

function Characters(props) {
  const [state, setState] = useState({
    characters: CHARACTERS,
  })
  
  return (
    <div className="resume-section-content">
      <h1 className="">Personajes</h1>
      <div className="row gy-5">
        <CharacterList characters={state.characters} />
      </div>
    </div>
  );
}

export default Characters;