import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../../assets/styles/user/home/Navbar.css';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        Sahabat<span className="logo-highlight">Peduli</span>
      </div>
      <ul className="navbar-links">
        <li>
          <Link
            to="/"
            className={location.pathname === '/' ? 'active' : ''}
          >
            Beranda
          </Link>
        </li>
        <li>
          <Link
            to="/about-us"
            className={location.pathname === '/about-us' ? 'active' : ''}
          >
            Tentang Kami
          </Link>
        </li>
        <li>
          <Link
            to="/dana"
            className={location.pathname === '/dana' ? 'active' : ''}
          >
            Prospek Dana
          </Link>
        </li>
      </ul>
      <button className="login-button">Masuk</button>
    </nav>
  );
}

export default Navbar;
