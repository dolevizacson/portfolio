import React from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';

// style
const SkillsListHeaderStyle = styled(Flex).attrs({ full: true })`
  padding: 3vh 0;
`;
const SkillsListHeaderContainerStyle = styled(Flex).attrs({
  full: true,
  alignCenter: true,
})`
  border-radius: 10px;
  box-shadow: -20px 20px 40px 5px rgba(0, 0, 0, 0.75);

  ${props => props.theme.BackgroundColor.black1}
`;
const HeaderStyle = styled.h4`
  font-weight: bold;
  padding: 0 0.625rem;

  ${props => props.theme.color.white2}
  ${props => props.theme.font.font1}
`;
const HeaderIconStyle = styled(Flex)`
  width: 5em;
  height: 5em;
`;
const IconStyle = styled.img.attrs({
  src: '/skillsTitleImage.png',
  alt: 'stone-stack',
})`
  width: 100%;
  height: 100%;
  border-radius: 10px;

  ${props => props.theme.BackgroundColor.white2}
`;

const SkillsListHeader = () => {
  return (
    <SkillsListHeaderStyle>
      <SkillsListHeaderContainerStyle>
        <HeaderIconStyle>
          <IconStyle />
        </HeaderIconStyle>
        <HeaderStyle>Technology Stack And Stuff</HeaderStyle>
      </SkillsListHeaderContainerStyle>
    </SkillsListHeaderStyle>
  );
};

export default SkillsListHeader;
