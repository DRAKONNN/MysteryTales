import React from 'react';
import { useState, useCallback, useEffect, useRef } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

import stories from '../data/datastories';

const STORIES = stories;

function Story(props) {
  const {story} = props
  return (
    <div className="col-lg-3">
      <div className="card bg-dark text-white hover-zoom-interest">
        <div className="card-img-wrapper">
          <img src={story.image} className="card-img zoom-effect" alt={story.title} />
        </div>
        <div className="card-img-overlay d-flex justify-content-center align-items-center">
          <h3 className={`card-title title-story text-center ${story.classAttText}`}>{story.title}</h3>
        </div>
      </div>
    </div>
  )
}

function StoryList(props) {
  const {stories} = props

  return (
    <>
      {stories.map(story => (
        <Story story={story} />
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
      <h4 className="">Historias</h4>
      <div className="row gy-5">
        <StoryList stories={state.stories} />
      </div>
    </div>
  );
}

export default Stories;