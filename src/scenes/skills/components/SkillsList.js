import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, CardBody, CardHeader } from 'reactstrap';

import './SkillsList.css';

const SkillList = props => {
  const { skillsListContent } = props.skillsList;
  const createSkillsList = skillsListContent.map(lang => {
    return (
      <div className="skill" key={lang.name}>
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

  return <div>{createSkillsList}</div>;
};

export default SkillList;
