import React from 'react';
import {
  UiHeader,
  UiLoading,
  UiRequest,
  UiRequstError,
} from '../../../../env/utils/access';

// components
import Methodology from '../Methodology/Methodology';

// styles
import {
  SkillsListStyle,
  SkillsListContainerStyle,
  HeaderIconStyle,
} from './SkillsListStyle';

const renderMethodologyList = (
  list,
  isExtended,
  choose,
  close,
  deleteSkillsList,
  updateSkillsList,
  closeOpenSkills
) => {
  return list.map((methodology, index) => {
    return (
      <Methodology
        key={index}
        content={methodology}
        isExtended={isExtended}
        choose={choose}
        close={close}
        deleteSkillsList={deleteSkillsList}
        updateSkillsList={updateSkillsList}
        closeOpenSkills={closeOpenSkills}
      />
    );
  });
};

const SkillsListView = ({
  state: { skillsList },
  requestName,
  isExtended,
  choose,
  close,
  deleteSkillsList,
  updateSkillsList,
  closeOpenSkills,
}) => {
  return (
    <SkillsListStyle>
      <UiRequest
        requestName={requestName}
        loading={<UiLoading size={50} />}
        component={
          <UiHeader text="Technology Stack And Stuff" icon={HeaderIconStyle} />
        }
        error={<UiRequstError message="failed to load" />}
      >
        <>
          <SkillsListContainerStyle>
            {renderMethodologyList(
              skillsList,
              isExtended,
              choose,
              close,
              deleteSkillsList,
              updateSkillsList,
              closeOpenSkills
            )}
          </SkillsListContainerStyle>
        </>
      </UiRequest>
    </SkillsListStyle>
  );
};

export default SkillsListView;
