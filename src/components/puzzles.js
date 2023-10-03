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
    <div className="col-lg-3">
      <div className="card bg-dark text-white hover-zoom-interest">
        <div className="card-img-wrapper">
          <img src={puzzle.image} className="card-img zoom-effect" alt={puzzle.title} />
        </div>
        <div className="card-img-overlay d-flex justify-content-center align-items-center">
          <h3 className={`card-title title-puzzle text-center ${puzzle.classAttText}`}>{puzzle.title}</h3>
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
        <puzzle puzzle={puzzle} />
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