// import dependencies
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import backgroundImage from '/src/images/background.jpg';

// added a header to the nav tabs including my name and a background image
const NavTabs = () => {
  const currentPage = useLocation().pathname;

  // added styling to the header
  const headerStyle = {
    background: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'black',
  };

  // added styling to the links
  const linkStyle = {
    color: 'black', // Set text color to black
  };

  // return the header with the styling and the links to the different pages
  return (
    <header style={headerStyle}>
      <br />
      <br />
      <h1 className="display-1">
        Tyler <small className="text-body-secondary">Jay</small> Bested
      </h1>
      <br />
      <br />

      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
            to="/"
            className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
            style={linkStyle}
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Resume"
            className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
            style={linkStyle}
          >
            Resume
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Portfolio"
            className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
            style={linkStyle}
          >
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Contact"
            className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
            style={linkStyle}
          >
            Contact
          </Link>
        </li>
      </ul>
    </header>
  );
};

// export the nav tabs
export default NavTabs;
