import React from 'react';
import { useState, useCallback, useEffect, useRef } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

import characters from '../data/datacharacters';
import stories from '../data/datastories';
import Footer from '../components/footer';

const CHARACTERS = characters;
const STORIES = stories;

function Character(props) {
  const {character} = props

  const [show, setShow] = useState(false);

  return (
    <div className="col-lg-3">
      <a href='#lost' onClick={handleShow}>
      <div className="card bg-dark text-white hover-zoom-interest">
        <div className="card-img-wrapper">
          <img src={character.image} className="card-img zoom-effect" alt={character.title} />
        </div>
        <div class="card-body">
          <h5>{character.name}</h5>
        </div>
      </div>
      </a>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className='bg-dark' closeButton>
          <Modal.Title>{character.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-dark text-white'>Datos desconocidos</Modal.Body>
        <Modal.Footer className='bg-dark'>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

function CharacterList(props) {
  const {characters} = props
  
  return (
    <div className="row gy-5 mb-5">
      {characters.map(character => (
        <Character character={character} />
      ))}
    </div>
  )
}

function StoryCharacters({ stories, characters }) {
  return (
    <div>
        {stories.map(story => (
          <>
            <h4 className={`mb-4 ${story.classAttText}`}>{story.title}</h4>
            <CharacterList characters={characters.filter(character => character.idStory === story.id)} />
          </>
        ))}
    </div>
  );
}

function Characters(props) {
  const [state, setState] = useState({
    characters: CHARACTERS,
    stories: STORIES,
  })
  
  return (
    <div className="resume-section-content">
      <div>
        <StoryCharacters stories={state.stories} characters={state.characters} />
      </div>
      <Footer />
    </div>
  );
}

export default Characters;