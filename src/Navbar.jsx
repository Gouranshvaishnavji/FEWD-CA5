// Importing necessary dependencies from React and react-router-dom
import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

// Importing the CSS styles for the Navbar
import './navbar.css';

// Functional component for the Navbar
export default function Navbar() {
  // Using the useLocation hook from react-router-dom to get information about the current location
  const location = useLocation();

  // Rendering the Navbar component
  return (
    <>
      {/* Navbar container with an id of 'navbar' and a class of 'navbar' */}
      <div id='top'>
        {/* Navbar logo section */}
        <div className='navbar-logo'>
          {/* Linking the logo to the home page */}
          <Link to='/'>
            {/* Image for the logo */}
            <img src="https://pluspng.com/img-png/google-play-logo-png-google-play-logo-angle-brand-yellow-media-play-angle-rectangle-920x512.png" alt="logo" />
          </Link>
        </div>
        {/* Navbar links section */}
        <div className='register'>
          {/* NavLink for the registration page with conditional styling if the route matches */}
          <NavLink to="/registration" activeClassName='active-link'>
            {/* Text content for the NavLink */}
            REGISTER <span className='onlysr-'>"</span>
          </NavLink>
        </div>
      </div>
    </>
  );
}
