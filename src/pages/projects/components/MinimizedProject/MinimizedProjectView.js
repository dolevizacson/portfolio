import React from 'react';
import { Link } from 'react-router-dom';
import { constants } from '../../../../env/utils/access';

// style
import {
  MinimizedProjectStyle,
  MinimizedProjectContainerStyle,
  MinimizedProjectHeaderStyle,
  MinimizedProjectSeperatorStyle,
  MinimizedProjectSummeryStyle,
  MinimizedProjectToggleStateStyle,
} from './MinimizedProjectStyle';

// constants
const { projectsRoute } = constants;

const MinimizedProjectView = ({ state: { projectData, isLoggedIn } }) => {
  if (projectData) {
    return (
      <MinimizedProjectStyle>
        <MinimizedProjectContainerStyle>
          <MinimizedProjectHeaderStyle>
            {projectData.header}
          </MinimizedProjectHeaderStyle>
          <MinimizedProjectSeperatorStyle />
          <MinimizedProjectSummeryStyle>
            {projectData.summery}
          </MinimizedProjectSummeryStyle>
          <MinimizedProjectSeperatorStyle />
          <Link to={`${projectsRoute}/${projectData._id}`}>Show more</Link>
          {isLoggedIn && (
            <MinimizedProjectToggleStateStyle>
              project toggled {`${projectData.active ? 'on' : 'off'}`}
            </MinimizedProjectToggleStateStyle>
          )}
        </MinimizedProjectContainerStyle>
      </MinimizedProjectStyle>
    );
  }
};

export default MinimizedProjectView;
