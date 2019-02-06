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
  state = { ShowIcon: false, isHidden: true };

  componentDidMount() {
    window.addEventListener('resize', this.checkWidth);
  }

  checkWidth = () => {
    const width = window.innerWidth;
    if (width < 767.98) {
      this.setState({ ShowIcon: true });
    } else {
      this.setState({ ShowIcon: false });
    }
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
          {this.state.ShowIcon && (
            <div className="navbar-collapse-icon">
              <FontAwesomeIcon icon="dot-circle" />
            </div>
          )}

          <div className="navbar-link">
            <Link to={projectsRoute}>projects</Link>
          </div>
          <span>/</span>
          <div className="navbar-link">
            <Link to={skillsRoute}>skills</Link>
          </div>
          <span>/</span>
          <div className="navbar-link">
            <Link to={contactRoute}>contact</Link>
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
