import React from 'react';
import { useState, useCallback, useEffect, useRef } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

import puzzles from '../data/datapuzzles';
import Footer from '../components/footer';

const PUZZLES = puzzles;

function Puzzle(props) {
  const {puzzle} = props
  return (
    <div className="col-lg-4">
        <div className={`card shadow-box bg-dark`}>
        <div class="card-body text-white">
          <h5 class="card-title text-warning">{puzzle.title}</h5>
          <p class="card-text">{puzzle.description}</p>
          <button type="button" class="btn btn-warning text-white">Leer</button>
        </div>
        <div className="img-zoom">
          <a href={puzzle.url}>
            <img src={puzzle.image} className="card-img-top" alt={puzzle.title}/>
          </a>
        </div>
      </div>
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