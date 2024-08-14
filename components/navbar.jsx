import React, { useState } from 'react';
import { FaBars, FaSearch, FaArrowRight, FaHome } from 'react-icons/fa';
import '../src/assets/css/navbar.css';

function Navbar() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="toggle-bar" onClick={togglePanel}>
          <FaBars size={24} />
        </div>
        <ul className={`nav-links ${isPanelOpen ? 'hidden' : ''}`}>
          <li>Home</li>
          <li>Contact Us</li>
          <li>Services</li>
        </ul>

        <div className={`mobile-nav ${isPanelOpen ? 'hidden' : ''}`}>
          <FaHome size={20} />
        </div>
        <div className={`search-container ${isPanelOpen ? 'hidden' : ''}`}>
          <FaSearch />
          <input type="text" placeholder="Search" className="search-input" />
        </div>


        <button className={`appointment-btn ${isPanelOpen ? 'hidden' : ''}`}>
          Book an Appointment <FaArrowRight />
        </button>


      </nav>

      <div className={`hidden-panel ${isPanelOpen ? 'open' : ''}`}>
        <ul className="panel-links">
          <li>Contact Us</li>
          <li>Services</li>
          <li>Meet the Team</li>
          <li>Search for Homes</li>
          <li>Our Communities</li>
          <li>Home Evaluation</li>
          <li>Home Across America</li>
          <li>Testimonials</li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
