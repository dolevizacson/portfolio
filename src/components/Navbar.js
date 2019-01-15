import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  homeRoute,
  contactRoute,
  skillsRoute,
  projectsRoute,
} from '../confings/routes';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <Link className="navbar-brand" to={homeRoute}>
        <FontAwesomeIcon icon="dot-circle" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navRightLinks"
        aria-controls="navRightLinks"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navRightLinks"
      >
        <div className="navbar-nav">
          <Link className="nav-item nav-link active" to={projectsRoute}>
            projects
          </Link>
          <Link className="nav-item nav-link" to={skillsRoute}>
            skills
          </Link>
          <Link className="nav-item nav-link" to={contactRoute}>
            contacts
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
