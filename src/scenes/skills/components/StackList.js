import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, CardBody, CardHeader, CardFooter, Button } from 'reactstrap';

import './StackList.css';

const StackList = props => {
  const createSkillsList = props.stackList.map(lang => {
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
            <div>
              {lang.longData.map(data => {
                return <div> - {data} </div>;
              })}
            </div>
          </CardBody>
        </Card>
      </div>
    );
  });

  return (
    <div>
      {createSkillsList}
      <CardFooter>
        <Button onClick={props.backButton}>Go Back</Button>
      </CardFooter>
    </div>
  );
};

export default StackList;
