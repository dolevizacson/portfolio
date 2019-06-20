import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { constants } from '../../../env/utils/access';

// style
import {
  AppNavbarStyle,
  NavbarContainerStyle,
  LeftStyle,
  MainLogoStyle,
  LinkStyle,
  RightStyle,
  CollapseIconStyle,
  LinksContainerStyle,
  CollapseStyle,
  CollapseLinkContainerStyle,
} from './AppNavbarStyle';

// constants
const {
  homeRoute,
  projectsRoute,
  skillsRoute,
  blogRoute,
  contactRoute,
  adminRoute,
} = constants;

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
