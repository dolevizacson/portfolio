import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  constants,
  UiHeader,
  UiButton,
  UiTextBlock,
  UiButtonsContainer,
} from '../../env/utils/access';

// icons
import { Dash } from '@styled-icons/octicons';

// constants
const { adminRoute, blogRoute, skillsRoute, tasksRoute, projectsRoute } =
  constants;

// style
const AdminStyle = styled.section`
  display: grid;
`;

const AdminContainerStyle = styled.div`
  display: grid;
  grid-gap: var(--ui-grid-gap-1);
`;

const AdminBodyStyle = styled(UiTextBlock)``;

const AdminBodyHeaderStyle = styled.h3`
  color: var(--ui-font-color-1);
  text-transform: uppercase;
`;

const AdminButtonsContainerStyle = styled(UiButtonsContainer)`
  justify-content: flex-start;

  ${(props) => props.theme.media('18.75em')`justify-content: center;`}
`;

const AdminLogoutButtonContainerStyle = styled(UiButtonsContainer)`
  justify-content: center;

  border-top: 1px solid var(--ui-specific-color-3);
  padding-top: var(--ui-grid-gap-2);
`;

const AdminDashIconStyle = styled(Dash)`
  height: 2rem;
  width: 2rem;

  margin: 0 0.5rem;
`;

const logout = (props) => {
  const { functions } = props;
  functions.logout();
};

const AdminView = (props) => {
  return (
    <AdminStyle>
      <AdminContainerStyle>
        <>
          <UiHeader>Administrative stuff</UiHeader>
          <AdminBodyStyle>
            <AdminBodyHeaderStyle>
              Skills Page
              <AdminDashIconStyle />
            </AdminBodyHeaderStyle>
            <AdminButtonsContainerStyle>
              <UiButton as={Link} to={`${adminRoute}${skillsRoute}`}>
                add a Skill list
              </UiButton>
            </AdminButtonsContainerStyle>
            <AdminBodyHeaderStyle>
              Projects Page
              <AdminDashIconStyle />
            </AdminBodyHeaderStyle>
            <AdminButtonsContainerStyle>
              <UiButton as={Link} to={`${adminRoute}${tasksRoute}`}>
                add a task
              </UiButton>
              <UiButton as={Link} to={`${adminRoute}${projectsRoute}`}>
                add a project
              </UiButton>
            </AdminButtonsContainerStyle>
            <AdminBodyHeaderStyle>
              Blog
              <AdminDashIconStyle />
            </AdminBodyHeaderStyle>
            <AdminButtonsContainerStyle>
              <UiButton as={Link} to={`${adminRoute}${blogRoute}`}>
                add a blog post
              </UiButton>
            </AdminButtonsContainerStyle>
            <AdminLogoutButtonContainerStyle>
              <UiButton onClick={() => logout(props)}>Logout</UiButton>
            </AdminLogoutButtonContainerStyle>
          </AdminBodyStyle>
        </>
      </AdminContainerStyle>
    </AdminStyle>
  );
};

export default AdminView;
