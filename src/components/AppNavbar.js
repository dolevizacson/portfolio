import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navbar, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';

import './AppNavbar.css';

import {
  homeRoute,
  contactRoute,
  skillsRoute,
  projectsRoute,
} from '../confings/routes';

class AppNavbar extends React.Component {
  state = { isOpen: false };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  renderNavbar = () => {
    return (
      <div className="app-navbar">
        <div className="navbar-left">
          <div className="navbar-logo">
            <Link to={homeRoute}>
              <FontAwesomeIcon icon="dot-circle" />
            </Link>
          </div>
        </div>

        <div className="navbar-right">
          <div className="navbar-link">
            <Link className="nav-item nav-link active" to={projectsRoute}>
              projects
            </Link>
          </div>
          <span>/</span>
          <div className="navbar-link">
            <Link className="nav-item nav-link" to={skillsRoute}>
              skills
            </Link>
          </div>
          <span>/</span>
          <div className="navbar-link">
            <Link className="nav-item nav-link" to={contactRoute}>
              contact
            </Link>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>{this.renderNavbar()}</div>
      /* <Navbar className="appNavbar" expand="md" fixed="top">
        <Link to={homeRoute}>
          <FontAwesomeIcon icon="dot-circle" />
        </Link>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link className="nav-item nav-link active" to={projectsRoute}>
                projects
              </Link>
            </NavItem>
            <span>/</span>
            <NavItem>
              <Link className="nav-item nav-link" to={skillsRoute}>
                skills
              </Link>
            </NavItem>
            <span>/</span>
            <NavItem>
              <Link className="nav-item nav-link" to={contactRoute}>
                contact
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    */
    );
  }
}

export default AppNavbar;
