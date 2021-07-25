import React from 'react';
import styled from 'styled-components';
import {
  UiHeader,
  UiLoading,
  UiRequest,
  UiRequestError,
  UiTextMessage,
} from '../../../../env/utils/access';

// components
import MinimizedProject from '../MinimizedProject/MinimizedProject';

// style
const ProjectsListStyle = styled.section`
  display: grid;
  grid-gap: var(--ui-grid-gap-1);
`;

const ProjectsListLoadingStyle = styled.div`
  margin: var(--ui-loading-top-bottom-margin);
`;

const renderProjectsList = (state) => {
  if (state.projectsList.length === 0) {
    return <UiTextMessage>No projects at the moment</UiTextMessage>;
  }

  return state.projectsList.map((project) => {
    return <MinimizedProject key={project._id} state={project} />;
  });
};

const ProjectsListView = (props) => {
  const { state, requestName, functions } = props;

  return (
    <ProjectsListStyle>
      <UiRequest
        requestName={requestName}
        loadingAnimation={
          <ProjectsListLoadingStyle>
            <UiLoading />
          </ProjectsListLoadingStyle>
        }
        topComponent={<UiHeader>projects</UiHeader>}
        error={
          <UiRequestError
            errorMessage="Failed to load projects"
            request={functions.getProjects}
          />
        }
      >
        {renderProjectsList(state)}
      </UiRequest>
    </ProjectsListStyle>
  );
};

export default ProjectsListView;
