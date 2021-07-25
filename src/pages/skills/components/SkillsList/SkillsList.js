import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
// import { v4 as uuidv4 } from 'uuid';
import {
  UiTextBlock,
  UiButton,
  UiButtonsContainer,
} from '../../../../env/utils/access';

// icons
import { Times } from '@styled-icons/fa-solid';
import { Dash } from '@styled-icons/octicons';

// style
const SkillsListStyle = styled.article``;

const SkillsListContainerStyle = styled(UiTextBlock).attrs({
  gap: '0',
})`
  width: 100%;
  height: 100%;
`;

const SkillsListHeaderStyle = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SkillsListBodyStyle = styled.div``;

const SkillsListLanguageStyle = styled.h3``;

const SkillsListBodyContainerStyle = styled.div`
  ${(props) =>
    props.extended &&
    `
    padding: 1.5rem 0;
    &:first-child {
      padding-top: 0;
    }

    &:last-child {
      padding-bottom: 0;
    }

    &:not(:last-child) {
      border-bottom: 1px solid var(--ui-specific-color-3);
    }

    & > ${SkillsListLanguageStyle} {
      margin-bottom: 1.5rem;
    }
  `}

  &:not(:last-child) {
    & > ${SkillsListLanguageStyle} {
      margin-bottom: 1.5rem;
    }
  }
`;

const SkillsListDescriptionContainerStyle = styled.div`
  padding-left: 0.5rem;
`;
const SkillsListDescriptionStyle = styled.p`
  display: grid;
  grid-template-columns: max-content 1fr;

  &:not(:last-child) {
    margin-bottom: var(--ui-grid-gap-5);
  }
`;

const SkillsListShowMoreButtonsContainerStyle = styled(UiButtonsContainer)`
  margin-top: var(--ui-grid-gap-2);
`;

const SkillsListCloseButtonStyle = styled(Times).attrs({ tabIndex: '0' })`
  width: 3.5rem;
  height: 3.5rem;

  cursor: pointer;

  &:hover,
  &:focus {
    color: var(--ui-main-color-1);
    outline: none;
  }
`;

const SkillsListDashIconStyle = styled(Dash)`
  height: 1.5rem;
  width: 1.5rem;

  margin: 0 0.5rem;

  transform: translateY(0.5rem);
`;

const renderOneSkillsList = (props) => {
  const { state, functions } = props;
  const id = state._id;
  functions.renderOneSkillsList(id);
};

const renderAllSkillsLists = (props) => {
  const { functions } = props;
  functions.renderAllSkillsLists();
};

const deleteSkillsList = (props) => {
  const { state, functions } = props;
  const id = state._id;
  functions.deleteSkillsList(id);
};

const updateSkillsList = (props) => {
  const { state, functions } = props;
  const SkillsList = state;
  functions.updateSkillsList(SkillsList);
};

const toggleSkillsList = (props) => {
  const { state, functions } = props;
  const id = state._id;
  functions.toggleSkillsList(id);
};

const SkillsList = (props) => {
  const { extended, state, isLoggedIn } = props;

  return (
    <SkillsListStyle>
      <SkillsListContainerStyle
        extended={extended}
        header={
          <SkillsListHeaderStyle>
            {state?.topic}
            {extended && (
              <SkillsListCloseButtonStyle
                onClick={() => renderAllSkillsLists(props)}
                onKeyDown={(event) =>
                  event.key === 'Enter' && renderAllSkillsLists(props)
                }
              />
            )}
          </SkillsListHeaderStyle>
        }
      >
        <SkillsListBodyStyle>
          {state?.stack?.map((stack) => {
            return (
              <SkillsListBodyContainerStyle
                extended={extended}
                key={stack?._id}
              >
                <SkillsListLanguageStyle extended={extended}>
                  {stack?.language}
                </SkillsListLanguageStyle>
                {extended && stack?.longData && (
                  <SkillsListDescriptionContainerStyle>
                    {stack?.longData?.map((longData, index) => {
                      return (
                        <SkillsListDescriptionStyle key={index}>
                          <SkillsListDashIconStyle />
                          {longData}
                        </SkillsListDescriptionStyle>
                      );
                    })}
                  </SkillsListDescriptionContainerStyle>
                )}
              </SkillsListBodyContainerStyle>
            );
          })}
        </SkillsListBodyStyle>
        {!extended && (
          <SkillsListShowMoreButtonsContainerStyle>
            <UiButton onClick={() => renderOneSkillsList(props)}>
              show more
            </UiButton>
          </SkillsListShowMoreButtonsContainerStyle>
        )}
        {isLoggedIn && extended && (
          <SkillsListShowMoreButtonsContainerStyle>
            <UiButton onClick={() => updateSkillsList(props)}>update</UiButton>
            <UiButton onClick={() => deleteSkillsList(props)}>delete</UiButton>
            <UiButton onClick={() => toggleSkillsList(props)}>
              {state?.active !== 0 ? 'toggle off' : 'toggle on'}
            </UiButton>
          </SkillsListShowMoreButtonsContainerStyle>
        )}
      </SkillsListContainerStyle>
    </SkillsListStyle>
  );
};

const mapStateToProps = ({ isLoggedIn }) => ({
  isLoggedIn,
});

export default connect(mapStateToProps)(SkillsList);
