import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SkillList = props => {
  const { skillsListContent } = props.skillsList;
  const skillList = skillsListContent.map(lang => {
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

const mapStateToProps = state => {
  return { skillsList: state.loadSkillsListContent };
};

export default connect(mapStateToProps)(SkillList);
