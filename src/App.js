import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import React, { Component, useState } from 'react'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';


import Stories from './components/stories';
import Characters from './components/characters';

function App() {
  const backgroundStyle = {
    backgroundImage: `url('/images/LockedRoom.png')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    minHeight: '100vh',
    position: 'relative',
    zIndex: 0,
  };

  const blurLayerStyle = {
    content: '',
    background: 'inherit',
    filter: 'blur(3px)', // Ajusta el valor de desenfoque según tus preferencias
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: -1,
  };

  const [activeTab, setActiveTab] = useState('stories');

  const renderContent = () => {
    if (activeTab === 'stories') {
      return <Stories />;
    } else if (activeTab === 'characters') {
      return <Characters />;
    }
  };
  return (
    <div style={backgroundStyle}>
      <div style={blurLayerStyle}></div>

      {/* =====UNUSED=====
      <Nav  className="justify-content-center navbar sticky-top">
        <Nav.Item>
          <Nav.Link eventKey="link-1" className="glow text-white" onClick={() => setActiveTab('stories')}>Historias</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" className="glow text-white">MYSTERY-TALES</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" className="glow text-white" onClick={() => setActiveTab('characters')}>Personajes</Nav.Link>
        </Nav.Item>
      </Nav>*/}
      
      
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top justify-content-end">
        <div className="container-fluid">
          <a className="navbar-brand glow" href="#"><h3>MYSTERY-TALES</h3></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNavbar" aria-controls="collapseNavbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapseNavbar">
            <ul className="navbar-nav ms-2 glow">
              <li className={`nav-item ${activeTab === 'stories' ? 'active' : ''}`}>
                <button className="nav-link glow" onClick={() => setActiveTab('stories')}>
                  <h4>Historias</h4>
                </button>
              </li>
              <li className={`nav-item ${activeTab === 'characters' ? 'active' : ''}`}>
                <button className="nav-link glow" onClick={() => setActiveTab('characters')}>
                <h4>Personajes</h4>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="container mt-4">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default App;
