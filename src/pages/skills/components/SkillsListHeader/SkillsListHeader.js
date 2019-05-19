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
  border-radius: 10px;
  box-shadow: -20px 20px 40px 5px rgba(0, 0, 0, 0.75);
  align-items: center;

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

  width: 80px;
  height: 80px;
`;
const IconStyle = styled.img.attrs({
  src: '/skillsTitleImage.png',
  alt: 'stone-stack',
})`
  width: 100%;
  height: 100%;
  border-radius: 10px;

  ${({ theme }) => theme.BackgroundColor.white2}
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
