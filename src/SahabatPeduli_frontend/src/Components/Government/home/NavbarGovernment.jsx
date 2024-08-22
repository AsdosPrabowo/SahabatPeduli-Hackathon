import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../../assets/styles/government/home/NavbarGovernment.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

function NavbarGovernment() {
  const location = useLocation();

  return (
    <nav className="navbar-government">
        <div className='navbar-government-logo'>
            Sahabat<span className="government-logo-highlight">Peduli</span>
        </div>
        <ul className='navbar-government-links'>
          <li>
            <Link
              to="/government"
              className={location.pathname === '/government' ? 'active' : ''}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about-us-government"
              className={location.pathname === '/about-us-government' ? 'active' : ''}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/dana"
              className={location.pathname === '/dana' ? 'active' : ''}
            >
              Fund Prospects 
            </Link>
          </li>
          <li>
            <Link
              to="/tarik-dana"
              className={location.pathname === '/withdraw-funds' ? 'active' : ''}
            >
              Withdraw Funds
            </Link>
          </li>
        </ul>
        <div className='navbar-notification'>
          <button style={{ border: "none", background: "none" }}>
            <FontAwesomeIcon icon={faBell} className="notification-icon"/>
          </button>
          <button className='create-transaction'>+ Create Transaction</button>
        </div>
    </nav>
  );
}

export default NavbarGovernment;
