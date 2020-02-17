import React from 'react';
import { connect } from 'react-redux';

// components
import StackList from '../StackList/StackList';

// style
import {
  MethodologyStyle,
  MethodologyContainerstyle,
  MethodologyHeaderStyle,
  LeftHeaderStyle,
  HeaderStyle,
  MethodologyCloseIconStyle,
  CloseIconStyle,
  MethodologyBodyStyle,
  MethodologyUpdateButtonStyle,
  MethodologyDeleteButtonStyle,
} from './MethodologyStyle';

const renderStackList = (list, isExtended, close) => {
  return <StackList list={list} isExtended={isExtended} close={close} />;
};

const Methodology = ({
  content,
  isExtended,
  choose,
  close,
  deleteSkillsList,
  updateSkillsList,
  closeOpenSkills,
  isLoggedIn,
}) => {
  return (
    <MethodologyStyle
      onClick={() => {
        choose(content._id);
      }}
      isExtended={isExtended}
    >
      <MethodologyContainerstyle isExtended={isExtended}>
        <MethodologyHeaderStyle>
          <LeftHeaderStyle>
            <HeaderStyle>{content.topic}</HeaderStyle>
          </LeftHeaderStyle>
          {isExtended && (
            <MethodologyCloseIconStyle
              onClick={event => {
                event.stopPropagation();
                close();
              }}
            >
              <CloseIconStyle />
            </MethodologyCloseIconStyle>
          )}
        </MethodologyHeaderStyle>
        <MethodologyBodyStyle>
          {renderStackList(content.stack, isExtended)}
        </MethodologyBodyStyle>
        {isLoggedIn && isExtended && (
          <>
            <MethodologyUpdateButtonStyle
              onClick={event => {
                event.stopPropagation();
                updateSkillsList(content);
              }}
            >
              Update
            </MethodologyUpdateButtonStyle>
            <MethodologyDeleteButtonStyle
              onClick={event => {
                event.stopPropagation();
                deleteSkillsList(content._id);
                if (isExtended) {
                  closeOpenSkills();
                }
              }}
            >
              Delete
            </MethodologyDeleteButtonStyle>
          </>
        )}
      </MethodologyContainerstyle>
    </MethodologyStyle>
  );
};

const mapStateToProps = ({ isLoggedIn }) => ({
  isLoggedIn,
});

export default connect(mapStateToProps)(Methodology);
