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

import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';

import Stories from './components/stories';
import Characters from './components/characters';
import Puzzles from './components/puzzles';

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
    } else if (activeTab === 'puzzles') {
      return <Puzzles />;
    }
  };

  const lightNavbarTheme = {
    backgroundColor: '#ffffff',
    textColor: '#000000',
    // Otros estilos para el modo claro del Navbar
  };

  const NavbarContainer = styled.nav`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  `;

const Navbar = () => {
    return (
      <NavbarContainer>
        {/* Contenido del Navbar, como elementos de navegación */}
      </NavbarContainer>
    );
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
      
      <ThemeProvider theme={lightNavbarTheme}>
        <nav className="navbar navbar-expand-md bg-dark navbar-dark sticky-top mt-0">
          <div className="container-fluid">
            <a className="navbar-brand glow" href="#"><h3>MYSTERY-TALES</h3></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNavbar" aria-controls="collapseNavbar" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapseNavbar">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-2 glow">
                <li className={`nav-item ${activeTab === 'stories' ? 'active' : ''}`}>
                  <button className="nav-link glow" onClick={() => setActiveTab('stories')}>
                    <h4><i class='fas fa-book'></i> Historias</h4>
                  </button>
                </li>
                <li className={`nav-item ${activeTab === 'characters' ? 'active' : ''}`}>
                  <button className="nav-link glow" onClick={() => setActiveTab('characters')}>
                  <h4><i class='fas fa-users'></i> Personajes</h4>
                  </button>
                </li>
                <li className={`nav-item ${activeTab === 'puzzles' ? 'active' : ''}`}>
                  <button className="nav-link glow" onClick={() => setActiveTab('puzzles')}>
                  <h4><i class='fas fa-brain'></i> Acertijos</h4>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Navbar />
      </ThemeProvider>

      <div className="container mt-4 container-render">
        {renderContent()}
      </div>
      
      {/*<a data-toggle="modal" href="#myModal" className="btn btn-primary">Launch modal</a>*/}
    </div>
  );
}

export default App;
