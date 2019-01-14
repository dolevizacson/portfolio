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
    <div className="navbar">
      <Link className="navbar-brand" to={homeRoute}>
        <FontAwesomeIcon icon="dot-circle" />
      </Link>
      <Link to={projectsRoute}>projects</Link>
      <Link to={skillsRoute}>skills</Link>
      <Link to={contactRoute}>contacts</Link>
    </div>
  );
};

export default Navbar;
