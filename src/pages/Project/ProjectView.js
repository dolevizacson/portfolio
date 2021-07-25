import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  constants,
  UiHeader,
  UiTextBlock,
  UiButton,
  UiLoading,
  UiRequest,
  UiRequestError,
  UiBackButton,
  UiButtonsContainer,
} from '../../env/utils/access';

// constants
const { projectsRoute } = constants;

// style
const ProjectStyle = styled.article`
  display: grid;
  grid-gap: var(--ui-grid-gap-1);
`;

const ProjectHeaderStyle = styled(UiHeader)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const ProjectLoadingStyle = styled.div`
  margin: var(--ui-loading-top-bottom-margin);
`;

const ProjectContainerStyle = styled.div`
  display: grid;
  grid-gap: var(--ui-grid-gap-1);
`;

const ProjectDescriptionStyle = styled(UiTextBlock)``;

const ProjectDescriptionHeaderStyle = styled.h2`
  display: flex;
  align-items: center;
`;

const ProjectDescriptionBodyStyle = styled.p``;

const ProjectSubGridStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(32rem, 100%), 1fr));
  grid-auto-rows: min-content;
  grid-gap: var(--ui-grid-gap-1);
`;

const ProjectTechnologiesStyle = styled(UiTextBlock).attrs({
  gap: '0',
  center: true,
})``;

const ProjectTechnologiesHeaderStyle = styled.h2`
  display: flex;
  align-items: center;
`;

const ProjectTechnologyStyle = styled.p`
  font-weight: 700;
  text-align: center;

  padding: var(--ui-grid-gap-2) 0;

  &:first-child {
    padding-top: 0;
  }
  &:last-child {
    padding-bottom: 0;
  }
  &:not(:last-child) {
    border-bottom: 1px solid var(--ui-specific-color-3);
  }
`;

const ProjectLinksStyle = styled(UiTextBlock)``;

const ProjectLinksHeaderStyle = styled.h2`
  display: flex;
  align-items: center;
`;

const ProjectLinksBodyStyle = styled(UiButtonsContainer)`
  justify-content: center;
  align-content: flex-start;
  align-items: center;
`;

const ProjectLinkStyle = styled(UiButton).attrs({ forwardedAs: 'a' })`
  width: min(100%, 22rem);

  margin: 0.75rem;

  &:hover,
  &:focus-visible {
    background-color: var(--ui-main-color-4);
  }
`;

const ProjectButtonsStyle = styled(UiTextBlock)``;

const updateProject = (props) => {
  const { state, functions } = props;
  const project = state;
  functions.updateProject(project);
};

const deleteProject = (props) => {
  const { state, functions } = props;
  const id = state._id;
  functions.deleteProject(id);
};
const toggleProject = (props) => {
  const { state, functions } = props;
  const id = state._id;
  functions.toggleProject(id);
};

const ProjectView = (props) => {
  const { state, requestName, isLoggedIn, functions } = props;

  return (
    <ProjectStyle>
      <UiRequest
        requestName={requestName}
        loadingAnimation={
          <ProjectLoadingStyle>
            <UiLoading />
          </ProjectLoadingStyle>
        }
        topComponent={
          <ProjectHeaderStyle>
            {state?.header}
            <UiBackButton backTo={projectsRoute} />
          </ProjectHeaderStyle>
        }
        error={
          <UiRequestError
            errorMessage="Failed to project"
            request={functions.getProject}
          />
        }
      >
        <ProjectContainerStyle>
          <ProjectDescriptionStyle
            header={
              <ProjectDescriptionHeaderStyle>
                Description
              </ProjectDescriptionHeaderStyle>
            }
          >
            <ProjectDescriptionBodyStyle>
              {state?.description || state?.summery}
            </ProjectDescriptionBodyStyle>
          </ProjectDescriptionStyle>
          <ProjectSubGridStyle>
            <ProjectTechnologiesStyle
              header={
                <ProjectTechnologiesHeaderStyle>
                  Technologies
                </ProjectTechnologiesHeaderStyle>
              }
            >
              <>
                {state?.technologies?.map((technology) => (
                  <ProjectTechnologyStyle key={technology}>
                    {technology}
                  </ProjectTechnologyStyle>
                ))}
              </>
            </ProjectTechnologiesStyle>
            <ProjectLinksStyle
              header={<ProjectLinksHeaderStyle>Links</ProjectLinksHeaderStyle>}
            >
              <ProjectLinksBodyStyle>
                {state?.links?.map((link) => (
                  <ProjectLinkStyle
                    key={link?._id}
                    href={link?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link?.name}
                  </ProjectLinkStyle>
                ))}
              </ProjectLinksBodyStyle>
            </ProjectLinksStyle>
          </ProjectSubGridStyle>
          {isLoggedIn && (
            <ProjectButtonsStyle>
              <UiButtonsContainer>
                <UiButton onClick={() => updateProject(props)}>update</UiButton>
                <UiButton onClick={() => deleteProject(props)}>delete</UiButton>
                <UiButton onClick={() => toggleProject(props)}>
                  {state?.active !== 0 ? 'toggle off' : 'toggle on'}
                </UiButton>
              </UiButtonsContainer>
            </ProjectButtonsStyle>
          )}
        </ProjectContainerStyle>
      </UiRequest>
    </ProjectStyle>
  );
};

const mapStateToProps = ({ isLoggedIn }) => ({
  isLoggedIn,
});

export default connect(mapStateToProps)(ProjectView);
