import React from 'react';
import styled from 'styled-components';

// style
import {
  HeaderIconStyle,
  SkillsListHeaderContainerStyle,
  SkillsListHeaderStyle,
  HeaderStyle,
} from './UiHeaderStyle';

const renderIcon = icon => {
  if (icon) {
    const Elem = styled(icon)`
      ${({
        theme: {
          ui: { corners },
        },
      }) => corners}

      ${({
        theme: {
          BackgroundColor: { white2 },
        },
      }) => white2}
    `;
    return (
      <HeaderIconStyle>
        <Elem />
      </HeaderIconStyle>
    );
  }
};

const SkillsListHeader = ({ text, icon }) => {
  return (
    <SkillsListHeaderStyle>
      <SkillsListHeaderContainerStyle>
        {renderIcon(icon)}
        <HeaderStyle>{text}</HeaderStyle>
      </SkillsListHeaderContainerStyle>
    </SkillsListHeaderStyle>
  );
};

export default SkillsListHeader;
