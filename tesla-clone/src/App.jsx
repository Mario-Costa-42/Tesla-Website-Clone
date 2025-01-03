import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light " style={{ backgroundColor: "transparent" }}>
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
            <a className="nav-link active" aria-current="page" href="#">
              Vehicles
            </a>
            <a className="nav-link" href="#">
              Energy
            </a>
            <a className="nav-link" href="#">
              Charging
            </a>
            <a className="nav-link" href="#">
              Discover
            </a>
            <a className="nav-link" href="#">
              Shop
            </a>
            <a className="nav-link" href="#">
              We, Robot
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default App;
