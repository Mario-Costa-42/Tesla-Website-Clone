import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import teslaLogo from './assets/logo-tesla.png';


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
          <img src={teslaLogo}  id='tesla-logo'/>
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
            <a className="nav-link" href="#car-model-y">
              Model Y
            </a>
            <a className="nav-link" href="#car-model-3">
              Model 3
            </a>
            <a className="nav-link" href="#car-model-x">
              Model X
            </a>
            <a className="nav-link" href="#car-model-s">
              Model S 
            </a>
            <a className="nav-link" href="#car-model-cbertruck">
              Cybertruck
            </a>
            <a className="nav-link" href="#Solar-Panels">
              Solar Panels
            </a>
            <a className="nav-link" href="#Powerwall">
              Powerwall
            </a>
            <a className="nav-link" href="#Acessories">
              Accessories 
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default App;
