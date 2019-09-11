import React from 'react';

// components
import TaskList from './components/TaskList/TaskList';

// style
import { ProjectsStyle } from './ProjectsStyle';

const Projects = () => {
  return (
    <ProjectsStyle>
      <TaskList />
    </ProjectsStyle>
  );
};

export default Projects;
