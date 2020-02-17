import React from 'react';
import {
  UiHeader,
  UiLoading,
  UiRequest,
  UiRequstError,
} from '../../../../env/utils/access';

// components
import MinimizedProject from '../MinimizedProject/MinimizedProject';

// style
import { ProjectsListStyle } from './ProjectsListStyle';

const renderProjectsList = list => {
  return list.map((project, index) => {
    return <MinimizedProject key={index} projectData={project} />;
  });
};

const ProjectsListView = ({ state: { projectsList }, requestName }) => {
  return (
    <ProjectsListStyle>
      <UiRequest
        requestName={requestName}
        loading={<UiLoading size={50} />}
        component={<UiHeader text="Projects" />}
        error={<UiRequstError message="failed to load" />}
      >
        <>{renderProjectsList(projectsList)}</>
      </UiRequest>
    </ProjectsListStyle>
  );
};

export default ProjectsListView;
