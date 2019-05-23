import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Domain } from 'styled-icons/material';
import { ThMenu } from 'styled-icons/typicons';

// constants
import {
  homeRoute,
  projectsRoute,
  skillsRoute,
  blogRoute,
  contactRoute,
  adminRoute,
} from '../../confing/constants';

// style
const AppNavbarStyle = styled.div`
  ${({ theme }) => theme.div}
  ${({ theme }) => theme.BackgroundColor.black1}

  width: 100%;
  box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.75);
  flex-direction: column;
`;
const NavbarContainerStyle = styled.div`
  ${({ theme }) => theme.div}

  width: 100%;
  height: 50px;
  justify-content: space-between;
  align-items: center;
`;
const LeftStyle = styled.div`
  ${({ theme }) => theme.div}

  width: 30%;
  height: 100%;
  align-items: center;
`;
const RightStyle = styled.div`
  ${({ theme }) => theme.div}

  width: 70%;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
`;

const MainLogoStyle = styled(Domain)`
  ${({ theme }) => theme.color.red1}
  width: 50px;
  height: 50px;
`;

const LinksContainerStyle = styled.div`
  ${({ theme }) => theme.div}
  padding: 0 10px;
`;

const LinkStyle = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;

  ${({ theme }) => theme.font.font1}
  ${({ theme }) => theme.color.white1}
`;
const CollapseIconStyle = styled(ThMenu)`
  ${({ theme }) => theme.color.white1}
  width: 50px;
  height: 50px;
  cursor: pointer;
`;
const CollapseStyle = styled.div`
  ${({ theme }) => theme.div}
  flex-direction: column;
  padding: 7px;
`;
const CollapseLinkContainerStyle = styled.div`
  ${({ theme }) => theme.div}
  padding: 3px 0;
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

  linkList = [
    <LinkStyle to={projectsRoute}>PROJECTS</LinkStyle>,
    <LinkStyle to={skillsRoute}>SKILLS</LinkStyle>,
    <LinkStyle to={blogRoute}>BLOG</LinkStyle>,
    <LinkStyle to={contactRoute}>CONTACT</LinkStyle>,
  ];

  render() {
    return (
      <AppNavbarStyle>
        <NavbarContainerStyle>
          <LeftStyle>
            <Link to={homeRoute}>
              <MainLogoStyle />
            </Link>
          </LeftStyle>

          <RightStyle>
            {this.state.showIcon && (
              <CollapseIconStyle
                onClick={() =>
                  this.setState(state => {
                    return { isCollapse: !this.state.isCollapse };
                  })
                }
              />
            )}

            {!this.state.showIcon &&
              this.linkList.map((item, index) => {
                return (
                  <LinksContainerStyle key={index}>{item}</LinksContainerStyle>
                );
              })}
            {this.props.isLoggedIn && !this.state.showIcon && (
              <LinksContainerStyle>
                <LinkStyle to={adminRoute}>ADMIN</LinkStyle>
              </LinksContainerStyle>
            )}
          </RightStyle>
        </NavbarContainerStyle>
        {!this.state.isCollapse && (
          <CollapseStyle>
            {this.linkList.map((item, index) => {
              return (
                <CollapseLinkContainerStyle>{item}</CollapseLinkContainerStyle>
              );
            })}
            {this.props.isLoggedIn && (
              <CollapseLinkContainerStyle>
                <LinkStyle to={adminRoute}>ADMIN</LinkStyle>
              </CollapseLinkContainerStyle>
            )}
          </CollapseStyle>
        )}
      </AppNavbarStyle>
    );
  }
}

const mapStateToProps = ({ isLoggedIn }) => {
  return {
    isLoggedIn,
  };
};

export default connect(mapStateToProps)(AppNavbar);
