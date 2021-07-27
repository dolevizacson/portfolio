import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { constants, AppLogo } from '../../../env/utils/access';

// icons
import { ThMenu } from 'styled-icons/typicons';

// style
const AppNavbarStyle = styled.nav`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;

  height: var(--navbar-height);

  padding: 0 1rem;
  border-bottom: 1px solid var(--ui-general-color-2);

  font-size: 1.7rem;
`;

const AppNavbarLinkListStyle = styled.ul`
  display: flex;
`;

const AppNavbarLinkListItemStyle = styled.li`
  display: flex;
`;

const AppNavbarLinkStyle = styled(NavLink)`
  &:visited,
  &:link {
    display: flex;
    align-items: center;
    flex: 1 1 auto;

    position: relative;

    padding: 0.3rem 0.8rem;

    color: var(--ui-font-color-1);
    font-family: var(--ui-header-font-1);
    font-weight: 400;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
  }
  &:focus-visible {
    box-shadow: var(--ui-shadow-1);
    outline: none;
  }

  &.active,
  &.active:hover,
  &:active,
  &:active:hover {
    color: var(--ui-main-color-1);
    box-shadow: none;
  }

  &:hover {
    box-shadow: var(--ui-shadow-1);
  }
`;

const AppNavbarLogoStyle = styled(NavLink)`
  &:visited,
  &:link {
    display: flex;
    align-items: center;
    flex: 0;
    align-self: center;
    padding: 2px;
    margin-right: auto;
  }

  &:focus-visible {
    outline: none;
    padding: 0;
    border: 2px solid var(--ui-main-color-1);
    border-radius: 4px;
    box-sizing: content-box;
  }
`;

const AppNavbarCollapseIconStyle = styled(ThMenu)`
  margin: auto 1rem;
  width: 3.5rem;
  height: 3.5rem;

  color: var(--ui-general-color-2);
  cursor: pointer;
`;

const AppNavbarCollapseStyle = styled.div`
  & ${AppNavbarLinkListStyle} {
    display: flex;
    flex-direction: column;

    & ${AppNavbarLinkListItemStyle} {
      &:not(:last-child) {
        padding-bottom: 0.3rem;
      }
    }
  }

  padding: 0.5rem;

  width: 100%;
  border-bottom: 1px solid var(--ui-general-color-2);

  font-size: 2.2rem;
`;

// constants
const {
  homeRoute,
  projectsRoute,
  skillsRoute,
  tasksRoute,
  blogRoute,
  contactRoute,
  adminRoute,
} = constants;

const linkList = [
  { route: projectsRoute, name: 'projects' },
  { route: skillsRoute, name: 'skills' },
  { route: tasksRoute, name: 'tasks' },
  { route: blogRoute, name: 'blog' },
  { route: contactRoute, name: 'contact' },
  { route: adminRoute, name: 'admin', protected: true },
];

const renderLinkList = (isLoggedIn) => {
  return (
    <AppNavbarLinkListStyle>
      {linkList
        .filter((route) => !route.protected || isLoggedIn)
        .map(({ route, name }) => {
          return (
            <AppNavbarLinkListItemStyle key={route}>
              <AppNavbarLinkStyle to={route}>{name}</AppNavbarLinkStyle>
            </AppNavbarLinkListItemStyle>
          );
        })}
    </AppNavbarLinkListStyle>
  );
};

const AppNavbarView = ({
  state: { showIcon, isCollapse, isLoggedIn, toggleNavbarMenu },
}) => {
  return (
    <>
      <AppNavbarStyle collapseClosed={isCollapse}>
        <AppNavbarLogoStyle exact to={homeRoute}>
          <AppLogo />
        </AppNavbarLogoStyle>

        {showIcon && <AppNavbarCollapseIconStyle onClick={toggleNavbarMenu} />}
        {!showIcon && renderLinkList(isLoggedIn)}
      </AppNavbarStyle>
      {!isCollapse && (
        <AppNavbarCollapseStyle>
          {renderLinkList(isLoggedIn)}
        </AppNavbarCollapseStyle>
      )}
    </>
  );
};

export default AppNavbarView;
