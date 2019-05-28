import React from 'react';
import styled from 'styled-components';

// style
const SkillsListHeaderStyle = styled.div`
  ${({ theme }) => theme.div}

  padding-top: 10vh;
  padding-bottom: 5vh;

  ${({ theme }) => theme.media.phone`
    padding: 2vh 0;
  `}
`;
const SkillsListHeaderContainerStyle = styled.div`
  ${({ theme }) => theme.div}

  width: 100%;
  align-items: center;
  ${({ theme }) => theme.ui.corners}
  ${({ theme }) => theme.ui.shadow}

  ${({ theme }) => theme.BackgroundColor.black1}
`;
const HeaderStyle = styled.h4`
  font-weight: bold;
  padding: 0 20px;
  text-align: center;

  ${({ theme }) => theme.color.white2}
  ${({ theme }) => theme.font.font1}
`;
const HeaderIconStyle = styled.div`
  ${({ theme }) => theme.div}

  ${({ theme }) => theme.ui.headerIconSize}
`;

const renderIcon = icon => {
  if (icon) {
    const Elem = styled(icon)`
      ${({ theme }) => theme.ui.corners}

      ${({ theme }) => theme.BackgroundColor.white2}
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
