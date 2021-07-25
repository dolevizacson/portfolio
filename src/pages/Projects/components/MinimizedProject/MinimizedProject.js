import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { v4 as uuidv4 } from 'uuid';
import {
  UiTextBlock,
  UiButton,
  UiButtonsContainer,
  constants,
} from '../../../../env/utils/access';

// constants
const { projectsRoute } = constants;

// style
const MinimizedProjectStyle = styled.article``;

const MinimizedProjectContainerStyle = styled(UiTextBlock).attrs({
  gap: '0',
})``;

const MinimizedProjectHeaderContainerStyle = styled.h2``;

const MinimizedProjectDescriptionStyle = styled.p`
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--ui-specific-color-3);
`;

const MinimizedProjectTechnologiesStyle = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;

  padding: 1.5rem 0;
`;
const MinimizedProjectTechnologiesListHeaderStyle = styled.h3`
  display: inline-block;

  margin: 0.3rem 0;
`;
const MinimizedProjectTechnologiesListStyle = styled.ul`
  list-style: none;
  margin-left: 0.7rem;
`;

const MinimizedProjectTechnologyStyle = styled.li`
  display: inline-block;
  line-height: 1.1;

  margin: 0.3rem 0;
`;

const MinimizedProjectTechnologySeparetorStyle = styled.span`
  font-size: 1.8rem;
  font-weight: 700;
  padding: 0 0.7rem;
  color: var(--ui-main-color-1);
`;

const MinimizedProject = (props) => {
  const { state } = props;
  return (
    <MinimizedProjectStyle>
      <MinimizedProjectContainerStyle
        header={
          <MinimizedProjectHeaderContainerStyle>
            {state?.header}
          </MinimizedProjectHeaderContainerStyle>
        }
      >
        <MinimizedProjectDescriptionStyle>
          {state?.summery}
        </MinimizedProjectDescriptionStyle>
        <MinimizedProjectTechnologiesStyle>
          <MinimizedProjectTechnologiesListHeaderStyle>
            Technologies :
          </MinimizedProjectTechnologiesListHeaderStyle>
          <MinimizedProjectTechnologiesListStyle>
            {state?.technologies?.map((technology, index, array) => (
              <MinimizedProjectTechnologyStyle key={technology}>
                {technology}
                {index < array.length - 1 && (
                  <MinimizedProjectTechnologySeparetorStyle>
                    |
                  </MinimizedProjectTechnologySeparetorStyle>
                )}
              </MinimizedProjectTechnologyStyle>
            ))}
          </MinimizedProjectTechnologiesListStyle>
        </MinimizedProjectTechnologiesStyle>
        <UiButtonsContainer>
          <UiButton as={Link} to={`${projectsRoute}/${state._id}`}>
            show more
          </UiButton>
        </UiButtonsContainer>
      </MinimizedProjectContainerStyle>
    </MinimizedProjectStyle>
  );
};

const mapStateToProps = ({ isLoggedIn }) => ({
  isLoggedIn,
});

export default connect(mapStateToProps)(MinimizedProject);
