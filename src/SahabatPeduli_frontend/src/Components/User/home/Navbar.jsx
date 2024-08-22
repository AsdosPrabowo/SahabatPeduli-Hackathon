import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../../assets/styles/user/home/Navbar.css';
import { authSubscribe, signIn, signOut } from '@junobuild/core';

function Navbar() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const sub = authSubscribe((user) => setUser(user));

    return () => sub();
  }, []);

  const handleSignIn = async () => {
    await signIn();
  };
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
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about-us"
            className={location.pathname === '/about-us' ? 'active' : ''}
          >
            About Us
          </Link>
        </li>

      </ul>
      <button className="login-button" onClick={user ?  signOut: handleSignIn}>{user ? "Logout" : "Login"}</button>
    </nav>
  );
}

export default Navbar;
