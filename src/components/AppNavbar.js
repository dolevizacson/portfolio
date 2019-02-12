import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './AppNavbar.css';

import {
  homeRoute,
  contactRoute,
  skillsRoute,
  projectsRoute,
} from '../confings/routes';

class AppNavbar extends React.Component {
  state = { ShowIcon: false, isCollapse: true, hideNavbar: false };

  componentDidMount() {
    window.addEventListener('resize', this.checkWidth);
    this.checkWidth();
  }

  checkWidth = () => {
    const width = window.innerWidth;
    if (width < 800) {
      this.setState({ ShowIcon: true });
    } else {
      this.setState({ ShowIcon: false });
    }
  };

  displayLinks = () => {
    return (
      <>
        <div className="navbar-link">
          <Link to={projectsRoute}>PROJECTS</Link>
        </div>
        {!this.state.ShowIcon && <span>/</span>}
        <div className="navbar-link">
          <Link to={skillsRoute}>SKILLS</Link>
        </div>
        {!this.state.ShowIcon && <span>/</span>}
        <div className="navbar-link">
          <Link to={contactRoute}>CONTACT</Link>
        </div>
      </>
    );
  };

  renderNavbar = () => {
    return (
      <div className="app-navbar">
        <div className="navbar-container">
          <div className="top-navbar">
            <div className="navbar-left">
              <div className="navbar-logo">
                <Link to={homeRoute}>
                  <FontAwesomeIcon icon="dot-circle" />
                </Link>
              </div>
            </div>

            <div className="navbar-right">
              {this.state.ShowIcon && (
                <div
                  className="navbar-collapse-icon"
                  onClick={() =>
                    this.setState({ isCollapse: !this.state.isCollapse })
                  }
                >
                  <FontAwesomeIcon icon="dot-circle" />
                </div>
              )}
              {!this.state.ShowIcon && <>{this.displayLinks()}</>}
            </div>
          </div>
          {!this.state.isCollapse && (
            <div className="navbar-collapse">{this.displayLinks()}</div>
          )}
        </div>
      </div>
    );
  };

  render() {
    return <div>{this.renderNavbar()}</div>;
  }
}

export default AppNavbar;
