import React from 'react';
import styled from 'styled-components';

// components
import SkillsLists from './components/SkillsLists/SkillsLists';

// style
const SkillsStyle = styled.div`
  display: grid;
`;

const Skills = () => {
  return (
    <SkillsStyle>
      <SkillsLists />
    </SkillsStyle>
  );
};

export default Skills;
