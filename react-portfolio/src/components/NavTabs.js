import React from 'react';
import '../styles/NavTabs.css';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className = "nav">
        <h1>Taylor Stallings</h1>
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#about-me"
          onClick={() => handlePageChange('About Me')}
          // ternary operator - it is checking if the user is on the Home Page;
          // if yes, update className to nav-link active
          // if no, update className to nav-link
          className={currentPage === 'About Me' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}

          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Contact"
          onClick={() => handlePageChange('Contact')}

          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"

          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>
    </div>
  );
}

export default NavTabs;
