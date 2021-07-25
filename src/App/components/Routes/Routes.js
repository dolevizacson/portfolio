import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  ProtectedRoute,
  constants,
  ErrorPage,
} from '../../../env/utils/access';

// page component
import Home from '../../../pages/Home/Home';
import Projects from '../../../pages/Projects/Projects';
import Project from '../../../pages/Project/Project';
import Skills from '../../../pages/Skills/Skills';
import Tasks from '../../../pages/Tasks/Tasks';
import Blog from '../../../pages/Blog/Blog';
import BlogPost from '../../../pages/BlogPost/BlogPost';
import Contact from '../../../pages/Contact/Contact';
import Login from '../../../pages/Login/Login';
import Admin from '../../../pages/Admin/Admin';
import ProjectForm from '../../../pages/ProjectForm/ProjectForm';
import SkillsListForm from '../../../pages/SkillsListForm/SkillsListForm';
import TaskForm from '../../../pages/TaskForm/TaskForm';
import BlogPostForm from '../../../pages/BlogPostForm/BlogPostForm';

// constants
const {
  homeRoute,
  projectsRoute,
  skillsRoute,
  tasksRoute,
  blogRoute,
  contactRoute,
  loginRoute,
  adminRoute,
  updateRoute,
} = constants;

const Routes = () => {
  return (
    <Switch>
      <Route path={homeRoute} exact component={Home} />
      <Route path={projectsRoute} exact component={Projects} />
      <Route path={`${projectsRoute}/:id`} exact component={Project} />
      <Route path={skillsRoute} exact component={Skills} />
      <Route path={tasksRoute} exact component={Tasks} />
      <Route path={blogRoute} exact component={Blog} />
      <Route path={`${blogRoute}/:id`} exact component={BlogPost} />
      <Route path={contactRoute} exact component={Contact} />
      <Route path={loginRoute} exact component={Login} />
      <ProtectedRoute path={adminRoute} exact component={Admin} />
      <ProtectedRoute
        path={`${adminRoute}${projectsRoute}`}
        exact
        component={ProjectForm}
      />
      <ProtectedRoute
        path={`${adminRoute}${projectsRoute}${updateRoute}/:id`}
        exact
        component={ProjectForm}
      />
      <ProtectedRoute
        path={`${adminRoute}${skillsRoute}`}
        exact
        component={SkillsListForm}
      />
      <ProtectedRoute
        path={`${adminRoute}${skillsRoute}${updateRoute}/:id`}
        exact
        component={SkillsListForm}
      />
      <ProtectedRoute
        path={`${adminRoute}${tasksRoute}`}
        exact
        component={TaskForm}
      />
      <ProtectedRoute
        path={`${adminRoute}${tasksRoute}${updateRoute}/:id`}
        exact
        component={TaskForm}
      />
      <ProtectedRoute
        path={`${adminRoute}${blogRoute}`}
        exact
        component={BlogPostForm}
      />
      <ProtectedRoute
        path={`${adminRoute}${blogRoute}${updateRoute}/:id`}
        exact
        component={BlogPostForm}
      />
      <Route component={ErrorPage} />
    </Switch>
  );
};

export default Routes;
