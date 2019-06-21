import styled from 'styled-components';

export const SkillsListStyle = styled.div`
  ${({ theme: { div } }) => div}

  flex-direction: column;
  width: 100%;
  height: 100%;
`;
export const SkillsListContainerStyle = styled.div`
  ${({ theme: { div } }) => div}

  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
`;
export const HeaderIconStyle = styled.img.attrs({
  src: '/skillsTitleImage.png',
  alt: 'stone-stack',
})`
  width: 100%;
  height: 100%;
`;
