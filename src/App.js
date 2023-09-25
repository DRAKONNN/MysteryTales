import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">MISTERY TALES</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNavbar" aria-controls="collapseNavbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapseNavbar">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Categories</a>
              </li>
              <li className="nav-item custom-range">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Categories</a>
              </li>
              <li className="nav-item custom-range">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Categories</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
