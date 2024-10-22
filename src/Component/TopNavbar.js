import React from 'react'; // Create this file for the styling of the top navbar
import logo from './pictlogo.png'

const TopNavbar = () => {
  return (
    <div className="top-navbar">
      <div className="logo">
      <img src={logo} alt="Logo" /> {/* Use the imported image */} </div>
      <div className="navbar-title">
        <h1>Pune Institute of Computer Technology</h1>
      </div>
    </div>
  );
};

export default TopNavbar;
