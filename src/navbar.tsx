import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="site-title">Site Title</h1>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about-us">About Us</a></li>
        <li><a href="/events">Events</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/tutoring">Tutoring</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;