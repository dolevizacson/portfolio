import React from 'react';
import { Link, Route } from 'react-router-dom';
import { constants, UiHeader } from '../../env/utils/access';

// components
import BlogPostForm from './components/BlogPostForm/BlogPostForm';
import SkillsListForm from './components/SkillsListForm/SkillsListForm';
import TaskForm from './components/TaskForm/TaskForm';
import ProjectForm from './components/ProjectForm/ProjectForm';

// style
import { AdminStyle, HeaderIconStyle, LogoutButtonStyle } from './AdminStyle';

// constants
const {
  adminRoute,
  blogRoute,
  skillsRoute,
  taskListRoute,
  projectsRoute,
} = constants;

const AdminView = ({ state: { logout } }) => {
  return (
    <AdminStyle>
      <UiHeader text="admin" icon={HeaderIconStyle} />
      <LogoutButtonStyle onClick={logout}>Logout </LogoutButtonStyle>
      <Route
        path={adminRoute}
        exact
        render={() => (
          <>
            <Link to={`${adminRoute}${blogRoute}`}>Blog</Link>
            <Link to={`${adminRoute}${skillsRoute}`}>Skills</Link>
            <Link to={`${adminRoute}${taskListRoute}`}>Task</Link>
            <Link to={`${adminRoute}${projectsRoute}`}>Project</Link>
          </>
        )}
      />
      <Route
        path={`${adminRoute}${blogRoute}`}
        exact
        render={props => <BlogPostForm {...props} />}
      />
      <Route
        path={`${adminRoute}${skillsRoute}`}
        exact
        render={props => <SkillsListForm {...props} />}
      />
      <Route
        path={`${adminRoute}${taskListRoute}`}
        exact
        render={props => <TaskForm {...props} />}
      />
      <Route
        path={`${adminRoute}${projectsRoute}`}
        exact
        render={props => <ProjectForm {...props} />}
      />
    </AdminStyle>
  );
};

export default AdminView;
