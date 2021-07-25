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
import SkillsList from '../SkillsList/SkillsList';

// styles
const SkillsListsStyle = styled.section`
  display: grid;
  grid-gap: var(--ui-grid-gap-1);
`;

const SkillsListsLoadingStyle = styled.div`
  margin: var(--ui-loading-top-bottom-margin);
`;

const SkillsListContainerStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(34rem, 100%), 1fr));
  grid-gap: var(--ui-grid-gap-1);
`;

const renderSkillsList = (state, functions) => {
  if (state?.skillsLists.length === 0) {
    return <UiTextMessage>No skills at the moment</UiTextMessage>;
  }

  return state?.skillsLists.map((list) => {
    return <SkillsList key={list?._id} state={list} functions={functions} />;
  });
};

const SkillsListsView = (props) => {
  const { state, requestName, functions } = props;

  return (
    <SkillsListsStyle>
      <UiRequest
        requestName={requestName}
        loadingAnimation={
          <SkillsListsLoadingStyle>
            <UiLoading />
          </SkillsListsLoadingStyle>
        }
        topComponent={<UiHeader>Technology Stack And Stuff</UiHeader>}
        error={
          <UiRequestError
            errorMessage="Failed to load skills list"
            request={functions.getSkillsLists}
          />
        }
      >
        <SkillsListContainerStyle>
          {state?.chosenSkillsList ? (
            <SkillsList
              extended
              state={state.chosenSkillsList}
              functions={functions}
            />
          ) : (
            renderSkillsList(state, functions)
          )}
        </SkillsListContainerStyle>
      </UiRequest>
    </SkillsListsStyle>
  );
};

export default SkillsListsView;
