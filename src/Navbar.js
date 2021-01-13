import React from 'react';
import {Link} from 'react-router-dom';

import Logo from './Logo.js';

class Navbar extends React.Component{
  render(){
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-indigo">
        <div className="container-fluid ms-0 ps-0">
          <Link to="/" className="text-decoration-none">
            <span className="navbar-brand text-dark  text-brand rounded-pill bg-light px-3">
              <Logo width="30" height="30" className="me-2 d-inline-block align-top"/>
              Interns GDL
            </span>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/apply" className="text-decoration-none">
              <span className="nav-link">Get an Internship</span>
            </Link>
            <Link to="/workshops" className="text-decoration-none">
              <span className="nav-link">Workshops</span>
            </Link>
            <Link to="/events" className="text-decoration-none">
              <span className="nav-link">Events</span>
            </Link>
            <Link to="/resources" className="text-decoration-none">
              <span className="nav-link">Resources</span>
            </Link>
            <Link to="/fun" className="text-decoration-none">
              <span className="nav-link">Fun</span>
            </Link>
            <Link to="/about" className="text-decoration-none">
              <span className="nav-link">About us</span>
            </Link>
          </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar;