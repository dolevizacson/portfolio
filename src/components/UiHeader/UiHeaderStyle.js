import styled from 'styled-components';

export const SkillsListHeaderStyle = styled.div`
  ${({ theme: { div } }) => div}

  padding-top: 10vh;
  padding-bottom: 5vh;

  ${({
    theme: {
      media: { phone },
    },
  }) => phone`
    padding: 2vh 0;
  `}
`;
export const SkillsListHeaderContainerStyle = styled.div`
  ${({ theme: { div } }) => div}

  width: 100%;
  align-items: center;
  ${({
    theme: {
      ui: { corners },
    },
  }) => corners}
  ${({
    theme: {
      ui: { shadow },
    },
  }) => shadow}

  ${({
    theme: {
      BackgroundColor: { black1 },
    },
  }) => black1}
`;
export const HeaderStyle = styled.h4`
  font-weight: bold;
  padding: 0 20px;
  text-align: center;

  ${({
    theme: {
      color: { white2 },
    },
  }) => white2}
  ${({
    theme: {
      font: { font1 },
    },
  }) => font1}
`;
export const HeaderIconStyle = styled.div`
  ${({ theme: { div } }) => div}

  ${({
    theme: {
      ui: { headerIconSize },
    },
  }) => headerIconSize}
`;
