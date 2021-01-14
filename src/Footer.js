import Logo from './Logo.js';
import { Link } from 'react-router-dom';

function Footer(){
  return (
    <footer className="bg-indigo text-light py-4 px-5 container-fluid">
      <div className="row">
        <div className="col-12 col-md-4 text-center text-md-start">
          <div className="d-flex justify-content-center justify-content-md-start">
            <span className="navbar-brand text-dark text-brand rounded-pill bg-light px-3 m-3">
            <Logo width="30" height="30" className="me-2 d-inline-block align-top"/>
            Interns GDL
            </span>
          </div>

          <h4>Follow us</h4>
          <ul className="list-unstyled">
            <li>
              <a href="https://www.instagram.com/interns.gdl/" rel="noreferrer" target="_blank" className="link-cultured text-decoration-none">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://github.com/interns-gdl" rel="noreferrer" target="_blank" className="link-cultured text-decoration-none">
                Github
              </a>
            </li>
          </ul>
        </div>
        <div className="col-12 col-md-8 p-4 mb-4 text-center">
          <Link to="/" className="link-cultured text-decoration-none d-block d-md-inline-block m-3">
            Home
          </Link>
          <Link to="/apply" className="link-cultured text-decoration-none d-block d-md-inline-block m-3">
            Get an Internship
          </Link>
          <Link to="/workshops" className="link-cultured text-decoration-none d-block d-md-inline-block m-3">
            Workshops
          </Link>
          <Link to="/events" className="link-cultured text-decoration-none d-block d-md-inline-block m-3">
            Events
          </Link>
          <Link to="/resources" className="link-cultured text-decoration-none d-block d-md-inline-block m-3">
            Resources
          </Link>
          <Link to="/fun" className="link-cultured text-decoration-none d-block d-md-inline-block m-3">
            Fun
          </Link>
          <Link to="/about" className="link-cultured text-decoration-none m-3 d-block d-md-inline-block">
            About us
          </Link>
        </div>
      </div>
      <div className="container-fluid text-light text-center">
        <small>© Copyright Interns GDL 2021</small>
      </div>
    </footer>
  );
}

export default Footer;