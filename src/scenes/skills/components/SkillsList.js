import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, CardBody, CardHeader } from 'reactstrap';

const SkillList = props => {
  const { skillsListContent } = props.skillsList;
  const skillList = skillsListContent.map(lang => {
    return (
      <div className="skill" key={lang.key}>
        <Card>
          <CardHeader>
            <div>
              <FontAwesomeIcon icon={['fab', lang.icon]} />
              <span> </span>
              {lang.language}
            </div>
          </CardHeader>
          <CardBody>
            <div />
            <div>{lang.shortData}</div>
          </CardBody>
        </Card>
      </div>
    );
  });

  return <div>{skillList}</div>;
};

const mapStateToProps = state => {
  return { skillsList: state.loadSkillsListContent };
};

export default connect(mapStateToProps)(SkillList);
