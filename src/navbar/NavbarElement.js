import {Link} from 'react-router-dom';

function NavbarElement({ text, link }) {
  return (
    <Link to={link} className="text-decoration-none">
      <span className="nav-link">{text}</span>
    </Link>
  )
}

export default NavbarElement;