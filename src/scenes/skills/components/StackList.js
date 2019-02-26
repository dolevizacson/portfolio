import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './StackList.css';

const StackList = props => {
  const createSkillsList = props.stackList.map(lang => {
    return (
      <div className="skill" key={lang.key}>
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
};

export default StackList;
