import React from 'react';
import { Jumbotron } from 'reactstrap';

import './index.css';

import SkillsList from './components/SkillsList';

const Skills = () => {
  return (
    <div className="skills">
      <Jumbotron>
        <div className="skillsList">
          <SkillsList />
        </div>
      </Jumbotron>
    </div>
  );
};

export default Skills;
