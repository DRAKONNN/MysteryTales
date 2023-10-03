import React from 'react';
import { useState, useCallback, useEffect, useRef } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import puzzles from '../data/datapuzzles';
import Footer from '../components/footer';

const PUZZLES = puzzles;

function Puzzle(props) {
  const {puzzle} = props

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="col-lg-4">
      <div className={`card shadow-box bg-dark`}>
        <div class="card-body text-white">
          <h5 class="card-title text-warning">{puzzle.title}</h5>
          <p class="card-text">{puzzle.description}</p>
          <button type="button" class="btn btn-warning text-white" onClick={handleShow}>Leer</button>
        </div>
        <div className="img-zoom">
          <a href={puzzle.url}>
            <img src={puzzle.image} className="card-img-top" alt={puzzle.title}/>
          </a>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="bg-dark" closeButton>
          <Modal.Title className='text-warning'>{puzzle.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-white">
          <p dangerouslySetInnerHTML={{ __html: puzzle.question }} />
          <p>
            <button class="btn btn-warning text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
              Revelar la solución
            </button>
          </p>
          <div class="collapse" id="collapseExample">
            <div class="card card-body bg-dark bg-gradient">
              <p dangerouslySetInnerHTML={{ __html: puzzle.solution }} />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="bg-dark">
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

function PuzzleList(props) {
  const {puzzles} = props

  return (
    <>
      {puzzles.map(puzzle => (
        <Puzzle puzzle={puzzle} />
      ))}
    </>
  )
}

function Puzzles(props) {
  const [state, setState] = useState({
    puzzles: PUZZLES,
  })
  
  return (
    <div className="resume-section-content">
      <h4 className="mb-4">Acertijos</h4>
      <div className="row pb-5 gy-5">
        <PuzzleList puzzles={state.puzzles} />
      </div>
    </div>
  );
}

export default Puzzles;