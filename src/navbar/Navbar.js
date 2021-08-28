import React from 'react';
import {Link} from 'react-router-dom';

import Logo from '../Logo.js';
import NavbarElement from './NavbarElement.js'


function Navbar() {

  const elements = [
    { text: "Get an Intership", link: "/apply" },
    { text: "Workshops", link: "/workshops" },
    { text: "Events", link: "/events" },
    { text: "Resources", link: "/resources" },
    { text: "Fun", link: "/fun" },
    { text: "About Us", link: "/about" }
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-indigo">
      <div className="container-fluid ms-0 ps-0">

        <Link to="/" className="text-decoration-none">
          <span className="navbar-brand text-dark  text-brand rounded-pill bg-light px-3">
            <Logo width="30" height="30" className="me-2 d-inline-block align-top" />
            Interns GDL
          </span>
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            { elements.map((elem) => <NavbarElement text={elem.text} link={elem.link} key={elem.text}/>) }
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar;