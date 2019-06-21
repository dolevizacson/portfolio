import React from 'react';

// components
import SkillsList from './components/SkillsList/SkillsList';

// style
import { SkillsStyle } from './SkillsStyle';

const Skills = () => {
  return (
    <SkillsStyle>
      <SkillsList />
    </SkillsStyle>
  );
};

export default Skills;
