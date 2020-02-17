import styled from 'styled-components';

export const ProjectStyle = styled.div`
         ${({ theme: { div } }) => div}

         flex-direction: column;
         width: 100%;
       `;
export const ProjectContainerStyle = styled.div`
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
export const ProjectHeaderStyle = styled.h5`
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
export const ProjectSummeryStyle = styled.div`
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
export const ProjectDescriptionStyle = styled.div`
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
export const ProjectSeperatorStyle = styled.hr`
  width: 100%;
  height: 2px;
  background-color: ${({
    theme: {
      mainAppThemeColors: { red1 },
    },
  }) => red1};
  border: none;
`;
export const ProjectTechnologiesListStyle = styled.div`
  ${({ theme: { div } }) => div};

  flex-direction: column;
`;
export const ProjectTechnologiesStyle = styled.div`
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
export const ProjectLinksListStyle = styled.div`
  ${({ theme: { div } }) => div};

  flex-direction: column;
`;
export const ProjectLinkStyle = styled.div`
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

export const ProjectDeleteButtonStyle = styled.button`
  ${({
    theme: {
      ui: { formButton },
    },
  }) => formButton}
`;
export const ProjectUpdateButtonStyle = styled.button`
  ${({
    theme: {
      ui: { formButton },
    },
  }) => formButton}
`;
export const ProjectToggleButtonStyle = styled.button`
  ${({
    theme: {
      ui: { formButton },
    },
  }) => formButton}
`;
