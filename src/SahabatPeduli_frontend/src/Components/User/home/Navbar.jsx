import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../../../assets/styles/user/home/Navbar.css';
import { authSubscribe, signIn, signOut } from '@junobuild/core';

function Navbar() {
  const [user, setUser] = useState(undefined);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Subscribe to authentication changes
    const sub = authSubscribe((user) => {
      console.log(user?.owner ?? "kosong");
      setUser(user);
    });

    return () => sub();
  }, []);

  const handleSignIn = async () => {
    await signIn();
  };

  const handleSignOut = async () => {
    await signOut();
  };

  const handleButtonClick = () => {
    if (user) {
      if (user.owner === "5uvni-p3bjy-w3mjd-mjj7h-4r5ur-aosy2-ylben-ox5sj-tweba-qtmeo-qae") {
        navigate('/withdraw-fundings');
      } else {
        handleSignOut();
      }
    } else {
      handleSignIn();
    }
  };

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
        <li>
          <Link
            to="/tracker"
            className={location.pathname === '/tracker' ? 'active' : ''}
          >
            Tracker
          </Link>
        </li>
        <li>
          <Link
            to="/front-withdraw-funding"
            className={location.pathname === '/front-withdraw-funding' ? 'active' : ''}
          >
            Withdraw Funds
          </Link>
        </li>
      </ul>
      <button className="login-button" onClick={handleButtonClick}>
        {user ? (user.owner === "5uvni-p3bjy-w3mjd-mjj7h-4r5ur-aosy2-ylben-ox5sj-tweba-qtmeo-qae" ? "Create Transaction" : "Logout") : "Login"}
      </button>
    </nav>
  );
}

export default Navbar;
