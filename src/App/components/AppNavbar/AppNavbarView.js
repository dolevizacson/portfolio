import React from 'react';
import { constants } from '../../../env/utils/access';

// style
import {
  AppNavbarStyle,
  NavbarContainerStyle,
  LeftStyle,
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

const linkList = [
  <LinkStyle to={projectsRoute}>PROJECTS</LinkStyle>,
  <LinkStyle to={skillsRoute}>SKILLS</LinkStyle>,
  <LinkStyle to={blogRoute}>BLOG</LinkStyle>,
  <LinkStyle to={contactRoute}>CONTACT</LinkStyle>,
];

const AppNavbarView = ({
  state: { showIcon, isCollapse, isLoggedIn, toggleNavbarMenu },
}) => {
  return (
    <AppNavbarStyle>
      <NavbarContainerStyle>
        <LeftStyle>
          <LinkStyle to={homeRoute}>Logo</LinkStyle>
        </LeftStyle>

        <RightStyle>
          {showIcon && <CollapseIconStyle onClick={toggleNavbarMenu} />}

          {!showIcon &&
            linkList.map((item, index) => {
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
          {linkList.map((item, index) => {
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
};

export default AppNavbarView;
