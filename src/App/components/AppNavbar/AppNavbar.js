import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { constants } from '../../../env/utils/access';

// icons
import { Domain } from 'styled-icons/material';
import { ThMenu } from 'styled-icons/typicons';

// constants
const {
  homeRoute,
  projectsRoute,
  skillsRoute,
  blogRoute,
  contactRoute,
  adminRoute,
} = constants;

// style
const AppNavbarStyle = styled.div`
  ${({ theme: { div } }) => div}
  ${({
    theme: {
      BackgroundColor: { black1 },
    },
  }) => black1}

  width: 100%;
  box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.75);
  flex-direction: column;
`;
const NavbarContainerStyle = styled.div`
  ${({ theme: { div } }) => div}

  width: 100%;
  height: 50px;
  justify-content: space-between;
  align-items: center;
`;
const LeftStyle = styled.div`
  ${({ theme: { div } }) => div}

  width: 30%;
  height: 100%;
  align-items: center;
`;
const RightStyle = styled.div`
  ${({ theme: { div } }) => div}

  width: 70%;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
`;

const MainLogoStyle = styled(Domain)`
  ${({
    theme: {
      color: { red1 },
    },
  }) => red1}
  width: 50px;
  height: 50px;
`;

const LinksContainerStyle = styled.div`
  ${({ theme: { div } }) => div}
  padding: 0 10px;
`;

const LinkStyle = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;

  ${({
    theme: {
      font: { font1 },
    },
  }) => font1}
  ${({
    theme: {
      color: { white1 },
    },
  }) => white1}
`;
const CollapseIconStyle = styled(ThMenu)`
  ${({
    theme: {
      color: { white1 },
    },
  }) => white1}
  width: 50px;
  height: 50px;
  cursor: pointer;
`;
const CollapseStyle = styled.div`
  ${({ theme: { div } }) => div}
  flex-direction: column;
  padding: 7px;
`;
const CollapseLinkContainerStyle = styled.div`
  ${({ theme: { div } }) => div}
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
    const { showIcon, isCollapse } = this.state;
    const { isLoggedIn } = this.props;

    return (
      <AppNavbarStyle>
        <NavbarContainerStyle>
          <LeftStyle>
            <Link to={homeRoute}>
              <MainLogoStyle />
            </Link>
          </LeftStyle>

          <RightStyle>
            {showIcon && (
              <CollapseIconStyle
                onClick={() =>
                  this.setState(state => {
                    return { isCollapse: !isCollapse };
                  })
                }
              />
            )}

            {!showIcon &&
              this.linkList.map((item, index) => {
                return (
                  <LinksContainerStyle key={index}>{item}</LinksContainerStyle>
                );
              })}
            {isLoggedIn && !showIcon && (
              <LinksContainerStyle>
                <LinkStyle to={adminRoute}>ADMIN</LinkStyle>
              </LinksContainerStyle>
            )}
          </RightStyle>
        </NavbarContainerStyle>
        {!isCollapse && (
          <CollapseStyle>
            {this.linkList.map((item, index) => {
              return (
                <CollapseLinkContainerStyle>{item}</CollapseLinkContainerStyle>
              );
            })}
            {isLoggedIn && (
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

const mapStateToProps = ({ isLoggedIn }) => ({
  isLoggedIn,
});

export default connect(mapStateToProps)(AppNavbar);
