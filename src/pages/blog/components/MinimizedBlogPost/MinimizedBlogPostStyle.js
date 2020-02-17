import styled from 'styled-components';

export const MinimizedBlogPostStyle = styled.div`
  ${({ theme: { div } }) => div}
`;
export const MinimizedBlogPostContainerStyle = styled.div`
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
export const MinimizedBlogPostHeaderStyle = styled.h5`
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
export const MinimizedBlogPostSummeryStyle = styled.h5`
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
export const MinimizedBlogPostDateStyle = styled.div`
  ${({ theme: { div } }) => div};

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
export const MinimizedBlogPostSeperatorStyle = styled.hr`
  width: 100%;
  height: 2px;
  background-color: ${({
    theme: {
      mainAppThemeColors: { red1 },
    },
  }) => red1};
  border: none;
`;
export const MinimizedBlogPostToggleStateStyle = styled.div`
  ${({ theme: { div } }) => div};

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
