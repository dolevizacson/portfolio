import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

import './index.css';

import SkillsList from './components/SkillsList';

const Skills = () => {
  return (
    <div>
      <Container>
        <Jumbotron>
          <SkillsList />
        </Jumbotron>
      </Container>
    </div>
  );
};

export default Skills;
