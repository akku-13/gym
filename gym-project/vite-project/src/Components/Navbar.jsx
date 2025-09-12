import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router


function Navbar() {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <span>Abhi</span> Fitness <span>Club</span>
          </Link>
        </div>
        <a href="javascript:void(0)" className="ham-burger">
          <span />
          <span />
          
        </a>
        <div className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/classes">Classes</Link></li>
            <li><Link to="/schedule">Schedule</Link></li>
            <li><Link to="/package">Price</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
