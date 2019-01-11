import React from 'react';
import { Link } from 'react-router-dom';

import {
  homeRoute,
  contactRoute,
  skillsRoute,
  projectsRoute,
} from '../confings/routes';

const Navbar = () => {
  return (
    <div>
      navbar
      <Link to={homeRoute}>home</Link>
      <Link to={projectsRoute}>projects</Link>
      <Link to={skillsRoute}>skills</Link>
      <Link to={contactRoute}>contacts</Link>
    </div>
  );
};

export default Navbar;
