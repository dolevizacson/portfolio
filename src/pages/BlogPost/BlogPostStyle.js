import styled from 'styled-components';

export const BlogPostStyle = styled.div`
  ${({ theme: { div } }) => div}

  flex-direction: column;
  width: 100%;
`;
export const BlogPostContainerStyle = styled.div`
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
export const BlogPostHeaderStyle = styled.h5`
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
export const BlogPostSummeryStyle = styled.h5`
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
export const BlogPostDateStyle = styled.div`
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
export const BlogPostSeperatorStyle = styled.hr`
  width: 100%;
  height: 2px;
  background-color: ${({
    theme: {
      mainAppThemeColors: { red1 },
    },
  }) => red1};
  border: none;
`;
export const BlogPostBodyStyle = styled.div`
  ${({ theme: { div } }) => div};

  flex-direction: column;
`;
export const BlogPostparagraphStyle = styled.div`
  ${({ theme: { div } }) => div};

  align-items: center;
  flex-direction: column;
`;
export const BlogPostparagraphHeaderStyle = styled.div`
  ${({ theme: { div } }) => div};

  font-size: 1.125rem;
  font-weight: bold;

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
export const BlogPostparagraphBodyStyle = styled.div`
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
export const BlogPostFooterStyle = styled.div`
  ${({ theme: { div } }) => div};

  justify-content: center;
  font-size: 1.125rem;
  font-weight: bold;

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
export const BlogPostDeleteButtonStyle = styled.button`
  ${({
    theme: {
      ui: { formButton },
    },
  }) => formButton}
`;
export const BlogPostUpdateButtonStyle = styled.button`
  ${({
    theme: {
      ui: { formButton },
    },
  }) => formButton}
`;
export const BlogPostToggleButtonStyle = styled.button`
  ${({
    theme: {
      ui: { formButton },
    },
  }) => formButton}
`;
