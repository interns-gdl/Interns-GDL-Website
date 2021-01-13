import React from 'react';
import Logo from './Logo.js';
class Navbar extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-indigo">
        <div className="container-fluid ms-0 ps-0">
          <span className="navbar-brand text-dark  text-brand rounded-pill bg-light px-3">
            <Logo width="30" height="30" className="me-2 d-inline-block align-top"/>
            Interns GDL
          </span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <span className="nav-link">Get an Internship</span>
            <span className="nav-link">Workshops</span>
            <span className="nav-link">Events</span>
            <span className="nav-link">Resources</span>
            <span className="nav-link">Fun</span>
            <span className="nav-link">About us</span>
          </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar;