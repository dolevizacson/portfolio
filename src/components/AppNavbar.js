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

  render() {
    return (
      <div className="outer-navbar">
        <div className="middle-navbar">
          <Navbar className="inner-navbar" expand="md">
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
                    contacts
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default AppNavbar;
