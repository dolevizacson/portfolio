import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Flex, { FlexItem } from 'styled-flex-component';
import { Grid, GridItem } from 'styled-grid-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './AppNavbar.css';

// constants
import {
  homeRoute,
  contactRoute,
  skillsRoute,
  projectsRoute,
} from '../../confing/routes';

const AppNavbarstyle = styled(Flex).attrs({ column: true })`
  width: 100%;
  ${props => props.theme.BackgroundColor.black1}
`;
const LeftStyle = styled(Flex)``;
const RightStyle = styled(Flex).attrs({ justifyEnd: true })``;
const LogoStyle = styled(Flex)``;
const LinkStyle = styled(Flex)``;
const LinksListStyle = styled(Flex)``;
const CollapseIconStyle = styled(Flex)`
  color: white;
`;
const Collapsestyle = styled(Flex).attrs({ column: true })``;

class AppNavbar extends Component {
  state = { showIcon: false, isCollapse: true };

  componentDidMount() {
    window.addEventListener('resize', this.checkWidth);
    this.checkWidth();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkWidth);
  }

  checkWidth = () => {
    const width = window.innerWidth;
    if (width < 768) {
      this.setState(state => {
        return { showIcon: true };
      });
    } else {
      this.setState(state => {
        return { showIcon: false, isCollapse: true };
      });
    }
  };

  displayLinks = () => {
    return (
      <>
        <LinkStyle>
          <Link to={projectsRoute}>PROJECTS</Link>
        </LinkStyle>
        <LinkStyle>
          <Link to={skillsRoute}>SKILLS</Link>
        </LinkStyle>
        <LinkStyle>
          <Link to={contactRoute}>CONTACT</Link>
        </LinkStyle>
      </>
    );
  };

  renderNavbar = () => {
    return (
      <>
        <div className="top-navbar">
          <div className="navbar-left">
            <div className="navbar-logo">
              <Link to={homeRoute}>
                <FontAwesomeIcon icon="dot-circle" />
              </Link>
            </div>
          </div>

          <div className="navbar-right">
            {this.state.showIcon && (
              <div
                className="navbar-collapse-icon"
                onClick={() =>
                  this.setState({ isCollapse: !this.state.isCollapse })
                }
              >
                <FontAwesomeIcon icon="dot-circle" />
              </div>
            )}
            {!this.state.showIcon && <>{this.displayLinks()}</>}
          </div>
        </div>
        {!this.state.isCollapse && (
          <div className="navbar-collapse">{this.displayLinks()}</div>
        )}
      </>
    );
  };

  render() {
    return (
      <AppNavbarstyle>
        <Flex>
          <LeftStyle>
            <LogoStyle>
              <Link to={homeRoute}>
                <FontAwesomeIcon icon="dot-circle" />
              </Link>
            </LogoStyle>
          </LeftStyle>

          <RightStyle>
            {this.state.showIcon && (
              <CollapseIconStyle
                onClick={() =>
                  this.setState(state => {
                    return { isCollapse: !this.state.isCollapse };
                  })
                }
              >
                <FontAwesomeIcon icon="dot-circle" />
              </CollapseIconStyle>
            )}
            {!this.state.showIcon && this.displayLinks()}
          </RightStyle>
        </Flex>
        {!this.state.isCollapse && (
          <Collapsestyle>{this.displayLinks()} </Collapsestyle>
        )}
      </AppNavbarstyle>
    );
  }
}

export default AppNavbar;
