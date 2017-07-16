import React from 'react';
import { Link } from 'react-router';

function Header() {
  return (
    <nav className="light-blue lighten-1" role="navigation">
      <div className="nav-wrapper container">
        <a id="logo-container" href="/" className="brand-logo">BarMeetup</a>
        <ul className="right hide-on-med-and-down">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header;
