import React from 'react';

// components
import TaskList from './components/TaskList/TaskList';
import ProjectsList from './components/ProjectsList/ProjectsList';

// style
import { ProjectsStyle } from './ProjectsStyle';

const Projects = () => {
  return (
    <ProjectsStyle>
      <TaskList />
      <ProjectsList />
    </ProjectsStyle>
  );
};

export default Projects;
