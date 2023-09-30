import React from 'react';
import { useState, useCallback, useEffect, useRef } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';


function Footer(props) {
  return (
    <>
      <footer className="container py-5 mt-5 footer-bottom">
        <div className="row">
          <div className="col-6 col-md">
            <small className="d-block mb-3 text-muted">&copy; 2023 Copyright:</small>
          </div>
          <div className="col-6 col-md">
            <a className="text-muted" href="https://mdbootstrap.com/">MDBootstrap.com</a>
          </div>
          <div className="col-6 col-md">
            <a className="text-muted" href="https://react-bootstrap.netlify.app/">React-Bootstrap</a>
          </div>
          <div className="col-6 col-md">
            <a className="text-muted" href="https://github.com/DRAKONNN/MysteryTales">GitHub</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;