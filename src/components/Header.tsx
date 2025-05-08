// src/components/Header.tsx
// import React from 'react';
import './Header.css'; // Import the CSS for the Header

function Header() {
  return (
    <header className="header">
      <div className="container">
        {/* Company Logo or Name */}
        <div className="logo">
          {/* Replace with your company logo image or text */}
          <a href="/">Neurogati</a>
        </div>

        {/* Navigation Links */}
        <nav className="navigation">
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact">Contact</a></li>
            {/* Add more navigation links as needed */}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
