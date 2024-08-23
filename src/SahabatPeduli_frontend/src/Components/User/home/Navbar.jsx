import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../../../assets/styles/user/home/Navbar.css';
import { authSubscribe, signIn, signOut } from '@junobuild/core';

function Navbar() {
  const [user, setUser] = useState(null); // Initialize with `null` to avoid confusion with `undefined`
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = authSubscribe((authUser) => {
      if (authUser) {
        console.log("User owner ID:", authUser.owner ?? "Owner property is missing");
        setUser(authUser);
      } else {
        console.log("User object is undefined or user is signed out");
        setUser(null); // Reset user to null on sign out
      }
    });

    return () => unsubscribe(); // Clean up the subscription on unmount
  }, []);

  const handleSignIn = async () => {
    try {
      await signIn();
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Error during sign-out:", error);
    }
  };

  const handleButtonClick = () => {
    if (user) {
      if (user.owner === "3duio-p4atu-wokz5-zxtib-urvrk-d23k2-frt3s-7klw3-iazh7-urait-rqe") {
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
        {user ? (user.owner === "3duio-p4atu-wokz5-zxtib-urvrk-d23k2-frt3s-7klw3-iazh7-urait-rqe" ? "Create Transaction" : "Logout") : "Login"}
      </button>
    </nav>
  );
}

export default Navbar;
