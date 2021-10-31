import { Link } from 'react-router-dom';

import './navbar.scss';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-title">The Movie App</div>
      <Link to="/" className="navbar-link">
        <div className="navbar-link-item">Home</div>
      </Link>
    </nav>
  );
};
