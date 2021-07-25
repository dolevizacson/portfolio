import React from 'react';
import styled from 'styled-components';

// components
import ProjectsList from './components/ProjectsList/ProjectsList';

// style
const ProjectsStyle = styled.div`
  display: grid;
  grid-gap: var(--ui-grid-gap-3);
`;

const Projects = () => {
  return (
    <ProjectsStyle>
      <ProjectsList />
    </ProjectsStyle>
  );
};

export default Projects;
