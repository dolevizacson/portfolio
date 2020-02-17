import React from 'react';
import { UiLoading, UiRequest, UiRequstError } from '../../env/utils/access';

// style
import {
  ProjectStyle,
  ProjectContainerStyle,
  ProjectHeaderStyle,
  ProjectSeperatorStyle,
  ProjectDescriptionStyle,
  ProjectTechnologiesListStyle,
  ProjectTechnologiesStyle,
  ProjectLinksListStyle,
  ProjectLinkStyle,
  ProjectDeleteButtonStyle,
  ProjectUpdateButtonStyle,
  ProjectToggleButtonStyle,
} from './ProjectStyle';

const ProjectView = ({
  state: { project, deleteProject, updateProject, toggleProject, isLoggedIn },
  requestName,
}) => {
  return (
    <ProjectStyle>
      <UiRequest
        requestName={requestName}
        loading={<UiLoading size={50} />}
        error={<UiRequstError message="failed to load" />}
      >
        <ProjectContainerStyle>
          <ProjectHeaderStyle>{project.header}</ProjectHeaderStyle>
          <ProjectSeperatorStyle />
          <ProjectDescriptionStyle>
            {project.description || project.summery}
          </ProjectDescriptionStyle>
          <ProjectSeperatorStyle />
          <ProjectTechnologiesListStyle>
            {project.technologies &&
              project.technologies.map((technology, index) => {
                return (
                  <ProjectTechnologiesStyle key={index}>
                    {technology}
                  </ProjectTechnologiesStyle>
                );
              })}
          </ProjectTechnologiesListStyle>
          <ProjectSeperatorStyle />
          <ProjectLinksListStyle>
            {project.links &&
              project.links.map((link, index) => {
                return <ProjectLinkStyle key={index}>{link}</ProjectLinkStyle>;
              })}
          </ProjectLinksListStyle>
          {isLoggedIn && (
            <>
              <ProjectDeleteButtonStyle
                onClick={() => deleteProject(project._id)}
              >
                Delete
              </ProjectDeleteButtonStyle>
              <ProjectUpdateButtonStyle
                onClick={() => toggleProject(project._id)}
              >
                {project.active ? 'Toggle off' : 'Toggle on'}
              </ProjectUpdateButtonStyle>
              <ProjectToggleButtonStyle onClick={updateProject}>
                Update
              </ProjectToggleButtonStyle>
            </>
          )}
        </ProjectContainerStyle>
      </UiRequest>
    </ProjectStyle>
  );
};

export default ProjectView;
