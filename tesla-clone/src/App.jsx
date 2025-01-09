import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light " style={{
      backgroundColor: "white",
      position: "fixed",
      top: "0",
      width: "100%",
      zIndex: 1000, // Ensures it stays above other content
    }}>
      <div className="container-fluid">
        {/* Brand */}
        <a className="navbar-brand" href="javascript:void(0)">
          <img src='/src/assets/logo-tesla.png' id='tesla-logo'/>
        </a>


        {/* Toggle Button for Mobile View */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Section */}
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link" aria-current="page" href="#">
              Home
            </a>
            <a className="nav-link" href="#">
              Model Y
            </a>
            <a className="nav-link" href="#">
              Model 3
            </a>
            <a className="nav-link" href="#">
              Model X
            </a>
            <a className="nav-link" href="#">
              Model S 
            </a>
            <a className="nav-link" href="#">
              Cybertruck
            </a>
            <a className="nav-link" href="#">
              Solar Panels
            </a>
            <a className="nav-link" href="#">
              Powerwall
            </a>
            <a className="nav-link" href="#">
              Accessories 
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default App;
