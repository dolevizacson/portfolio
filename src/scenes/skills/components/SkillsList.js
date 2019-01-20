import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SkillList = props => {
  const { skills } = props.skillObject;
  const skillList = skills.map(lang => {
    return (
      <div className="skill">
        <div className="icon">{lang.icon}</div>
        <div>{lang.language}</div>
        <div>{lang.shortData}</div>
      </div>
    );
  });

  return <div>{skillList}</div>;
};

export default SkillList;
