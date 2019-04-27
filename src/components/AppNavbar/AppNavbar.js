import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// constants
import {
  homeRoute,
  contactRoute,
  skillsRoute,
  projectsRoute,
} from '../../confing/routes';

// style
const AppNavbarStyle = styled(Flex).attrs({ column: true })`
  width: 100%;
  box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.75);

  ${props => props.theme.BackgroundColor.black1}
`;
const NavbarContainerStyle = styled(Flex).attrs({ justifyBetween: true })`
  padding: 0.625em;
`;
const LeftStyle = styled(Flex).attrs({ full: true })``;
const RightStyle = styled(Flex).attrs({ full: true, justifyEnd: true })``;
const LogoStyle = styled(Flex)`
  font-size: 24px;
`;
const MainLogoStyle = styled(Flex)`
  ${props => props.theme.color.red1}
`;
const LinkStyle = styled(Link)`
  text-decoration: none;
  padding: 0 0.625em;
  font-size: 24px;

  ${props => props.theme.font.font1}
  ${props => props.theme.color.white1}
  ${props => props.theme.media.tablet`
    padding: 0.05em;
  `}
`;
const CollapseIconStyle = styled(Flex)`
  color: white;
  font-size: 24px;
  cursor: pointer;
`;
const CollapseStyle = styled(Flex).attrs({ column: true })`
  padding: 0.3em 0.625em;
`;

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
        <LinkStyle to={projectsRoute}>PROJECTS</LinkStyle>
        <LinkStyle to={skillsRoute}>SKILLS</LinkStyle>
        <LinkStyle to={contactRoute}>CONTACT</LinkStyle>
      </>
    );
  };

  render() {
    return (
      <AppNavbarStyle>
        <NavbarContainerStyle>
          <LeftStyle>
            <LogoStyle>
              <Link to={homeRoute}>
                <MainLogoStyle>
                  <FontAwesomeIcon icon="dot-circle" />
                </MainLogoStyle>
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
        </NavbarContainerStyle>
        {!this.state.isCollapse && (
          <CollapseStyle>{this.displayLinks()} </CollapseStyle>
        )}
      </AppNavbarStyle>
    );
  }
}

export default AppNavbar;
