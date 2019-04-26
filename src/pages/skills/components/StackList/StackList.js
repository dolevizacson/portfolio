import React from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';

import './StackList.css';

// components
import Stack from '../Stack/Stack';

// style
const StackListStyle = styled(Flex).attrs({ column: true })`
  padding: 0.625rem;
`;

/* const StackList = props => {
  const createSkillsList = props.stackList.map((lang, index) => {
    return (
      <div className="skill" key={index}>
        <div className="skills-stacklist-ui-container">
          <div className="skills-stacklist-ui-container-header">
            <FontAwesomeIcon icon={['fab', lang.icon]} />
            <span> </span>
            {lang.language}
          </div>
          <div className="skills-stacklist-ui-container-body">
            {lang.longData.map((data, index) => {
              return <div key={index}> - {data} </div>;
            })}
          </div>
        </div>
      </div>
    );
  });

  return <div>{createSkillsList}</div>;
}; */

const renderStackList = (list, isExtended) => {
  return list.map((stack, index) => {
    return <Stack key={index} content={stack} isExtended={isExtended} />;
  });
};

const StackList = ({ list, isExtended, close }) => {
  return (
    <StackListStyle>{renderStackList(list, isExtended, close)}</StackListStyle>
  );
};

export default StackList;
