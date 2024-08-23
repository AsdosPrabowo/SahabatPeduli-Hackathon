import React from 'react'
import '../../../assets/styles/user/home/Footer.css'
function Footer() {
  return (
    <footer className='footer'>
        <div className='footer-content'>
            <p className='copyright'>
                Copyright © 2024 SahabatPeduli | All Rights Reserved
            </p>
            <div className='footer-links'>
                <a href="/">Home</a>
                <a href="/about-us">About Us</a>
                <a href="/tracker">Tracker</a>
            </div>
        </div>
    </footer>
  );
}

export default Footer
