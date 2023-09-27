import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

function Stories() {
  return (
    <div className="resume-section-content">
      <h1 className="">Historias</h1>
      <div className="row gy-5">
        <div className="col-lg-3">
          <div className="card bg-dark text-white">
            <div className="card-img-wrapper">
              <img src="/images/DurakAI.png" className="card-img zoom-effect" alt="..." />
            </div>
            <div className="card-img-overlay d-flex justify-content-center align-items-center">
              <h3 className="card-title">Kremlin</h3>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div class="card bg-dark text-white">
            <img src="/images/MentirosoAI.png" class="card-img" alt="..." />
            <div className="card-img-overlay d-flex justify-content-center align-items-center">
              <h3 className="card-title">Western</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stories;