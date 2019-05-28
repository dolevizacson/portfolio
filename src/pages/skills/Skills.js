import React from 'react';
import styled from 'styled-components';

// components
import SkillsList from './components/SkillsList/SkillsList';

// style
const SkillsStyle = styled.div`
  ${({ theme }) => theme.div}

  flex-direction: column;
  width: 100%;
`;

class Skills extends React.Component {
  render() {
    return (
      <SkillsStyle>
        <SkillsList />
      </SkillsStyle>
    );
  }
}

export default Skills;
