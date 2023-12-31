import React from 'react';
import { useState, useCallback, useEffect, useRef } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Modal from 'react-bootstrap/Modal';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

import stories from '../data/datastories';
import books from '../data/databooks';
import Footer from '../components/footer';

const STORIES = stories;
const BOOKS = books;

function findBookByStoryId(storyId) {
  return books.find(book => book.id === storyId);
}

function Story(props) {
  const {story, index} = props

  const [show, setShow] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const book = findBookByStoryId(story.id);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setCurrentPage(0);
    setShow(true);
  };

  const handleNextPage = () => {
    if (currentPage < book.pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  return (
    <div className="col-lg-3">
      <div className="card bg-dark text-white hover-zoom-interest" onClick={() => story.availability ? handleShow() : null}>
        <div className="card-img-wrapper">
          <img src={story.image} className="card-img zoom-effect" alt={story.title} />
        </div>
        <div className="card-img-overlay d-flex flex-column justify-content-between">
          <h5 className="text-end" style={{ float: 'right', clear: 'both' }}>
            {index === 0 && (
              <Badge bg="warning text-black"><i class='fas fa-certificate'></i> Novedad</Badge>
            )}
            {story.availability == false && (
              <Badge bg="secondary text-black"><i class='fas fa-user-secret'></i> No disponible</Badge>
            )}
          </h5>
          <h2 className={`card-title title-story text-center ${story.classAttText}`} style={{ flex: '1', marginTop: '35%' }}>{story.title}</h2>
          <h4 className={`card-title title-story text-center ${story.classAttText} mobile-h4`} style={{ flex: '0' }}>{story.author}</h4>
        </div>
      </div>
      
      <Modal show={show} dialogClassName="custom-modal-style" contentClassName="modal-height" aria-labelledby="contained-modal-title-vcenter" centered onHide={handleClose} scrollable={true}>
        <Modal.Header className="bg-dark" closeButton>
          <Modal.Title className={`${story.classAttTextSecondary}`}>{story.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-white">
          {book ? (
            <>
              <p dangerouslySetInnerHTML={{ __html: book.pages[currentPage] }} />
            </>
          ) : (
            <p>No se encontró contenido para esta historia.</p>
          )}
        </Modal.Body>
        <Modal.Footer className="bg-dark">
          <ProgressBar variant="warning" now={currentPage} max={book.pages.length - 1} style={{width: '100%', position: 'relative'}} />
          <Button variant="warning text-white" onClick={handlePrevPage} disabled={currentPage === 0}>
            <i class='fas fa-caret-square-left'></i> Anterior
          </Button>
          <Button variant="warning text-white" onClick={handleNextPage} disabled={currentPage === book.pages.length - 1}>
            <i class='fas fa-caret-square-right'></i> Siguiente
          </Button>
          <Button variant="warning text-white" onClick={handleClose}>
            <i class='fas fa-sign-out-alt'></i> Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

function StoryList(props) {
  const {stories} = props

  return (
    <>
      {stories.map((story, index) => (
        <Story story={story} index={index}/>
      ))}
    </>
  )
}

function Stories(props) {
  const [state, setState] = useState({
    stories: STORIES,
  })
  
  return (
    <div className="resume-section-content">
      <h4 className="mb-4 glow-title">Historias</h4>
      <div className="row pb-5 gy-5">
        <StoryList stories={state.stories} />
      </div>
    </div>
  );
}

export default Stories;