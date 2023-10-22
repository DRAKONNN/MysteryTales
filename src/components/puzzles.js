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
          <p dangerouslySetInnerHTML={{ __html: puzzle.description }} />
          <button type="button" class="btn btn-warning text-white" onClick={handleShow}>Leer</button>
        </div>
        <div className="img-zoom">
          <img src={puzzle.image} className="card-img-top" alt={puzzle.title}/>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="bg-dark" closeButton>
          <Modal.Title className='text-warning'>{puzzle.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-white">
          <div>
            <h4><span class="badge rounded-pill bg-warning text-dark"><i class='fas fa-user-secret'></i> Dificultad: {puzzle.difficulty}</span></h4>
          </div>
          <p dangerouslySetInnerHTML={{ __html: puzzle.question }} />
          <div className="row">
            <div className="col-sm-4">
              <button class="btn bg-warning text-dark mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                <i class='fas fa-exclamation-triangle'></i> <b>Solución</b>
              </button>
            </div>
          </div>
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
      <h4 className="mb-4 glow-title">Acertijos</h4>
      <div className="row pb-5 gy-5">
        <PuzzleList puzzles={state.puzzles} />
      </div>
    </div>
  );
}

export default Puzzles;