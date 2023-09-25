import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

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
  return (
    <div style={backgroundStyle}>
      <div style={blurLayerStyle}></div>

      <nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand glow" href="#">MYSTERY-TALES</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNavbar" aria-controls="collapseNavbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapseNavbar">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 glow">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        <section className="resume-section" id="proyectos">
          <div className="resume-section-content">
            <h1 className="">Historias</h1>
            <div id="row-stories" class="row">
              <div className="col-lg-4">
                <Card style={{ width: '18rem', margin: '5rem' }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Placeholder as={Card.Title} animation="glow">
                      <Placeholder xs={6} />
                    </Placeholder>
                    <Placeholder as={Card.Text} animation="glow">
                      <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                      <Placeholder xs={6} /> <Placeholder xs={8} />
                    </Placeholder>
                    <Placeholder.Button variant="primary" xs={6} />
                  </Card.Body>
                </Card>
              </div>
              <div className="col-lg-4">
                <Card style={{ width: '18rem', margin: '5rem' }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Placeholder as={Card.Title} animation="glow">
                      <Placeholder xs={6} />
                    </Placeholder>
                    <Placeholder as={Card.Text} animation="glow">
                      <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                      <Placeholder xs={6} /> <Placeholder xs={8} />
                    </Placeholder>
                    <Placeholder.Button variant="primary" xs={6} />
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
