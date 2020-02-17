import styled from 'styled-components';

export const MinimizedProjectStyle = styled.div`
  ${({ theme: { div } }) => div}
`;
export const MinimizedProjectContainerStyle = styled.div`
  ${({
    theme: {
      ui: { item },
    },
  }) => item}

  flex-direction: column;
  width: 100%;
  margin: 10px 0;
  padding: 10px;
`;
export const MinimizedProjectHeaderStyle = styled.h5`
  font-weight: bold;
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
export const MinimizedProjectSummeryStyle = styled.div`
  ${({ theme: { div } }) => div};

  ${({
    theme: {
      color: { white2 },
    },
  }) => white2};
  ${({
    theme: {
      font: { font1 },
    },
  }) => font1};
`;
export const MinimizedProjectToggleStateStyle = styled.div`
  ${({ theme: { div } }) => div};

  ${({
    theme: {
      color: { white2 },
    },
  }) => white2};
  ${({
    theme: {
      font: { font1 },
    },
  }) => font1};
`;
export const MinimizedProjectSeperatorStyle = styled.hr`
  width: 100%;
  height: 2px;
  background-color: ${({
    theme: {
      mainAppThemeColors: { red1 },
    },
  }) => red1};
  border: none;
`;
