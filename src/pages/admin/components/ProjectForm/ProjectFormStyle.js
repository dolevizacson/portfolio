import styled from 'styled-components';
import { Form, Field } from 'formik';

export const ProjectFormStyle = styled.div`
  ${({ theme: { div } }) => div}
`;
export const ProjectContainerStyle = styled.div`
  ${({ theme: { div } }) => div}

  width: 100%;
  justify-content:center;
  align-content:center;

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

export const FormStyle = styled(Form)`
  ${({ theme: { div } }) => div}

  width: 50%;
  flex-direction: column;
  align-content: space-around;
`;
export const ProjectHeaderFieldStyle = styled(Field)`
  ${({
    theme: {
      ui: { formTextField },
    },
  }) => formTextField}
`;
export const ProjectSummeryFieldStyle = styled(Field)`
  ${({
    theme: {
      ui: { formTextField },
    },
  }) => formTextField}
`;
export const ProjectDescriptionFieldStyle = styled(Field)`
  ${({
    theme: {
      ui: { formTextField },
    },
  }) => formTextField}
`;
export const ProjectDescriptionAddButtonStyle = styled.button`
  ${({
    theme: {
      ui: { formButton },
    },
  }) => formButton}
`;
export const ProjectDescriptionRemoveButtonStyle = styled.button`
  ${({
    theme: {
      ui: { formButton },
    },
  }) => formButton}
`;
export const ProjectTechnologiesListContainerStyle = styled.div`
  ${({ theme: { div } }) => div}

  flex-direction: column;
`;
export const ProjectTechnologyContainerStyle = styled.div`
  ${({ theme: { div } }) => div}

  flex-direction: column;
`;
export const ProjectTechnologyFieldStyle = styled(Field)`
  ${({
    theme: {
      ui: { formTextField },
    },
  }) => formTextField}
`;
export const ProjectTechnologyRemoveButtonStyle = styled.button`
  ${({
    theme: {
      ui: { formButton },
    },
  }) => formButton}
`;
export const ProjectTechnologyAddButtonStyle = styled.button`
  ${({
    theme: {
      ui: { formButton },
    },
  }) => formButton}
`;

export const ProjectLinksListContainerStyle = styled.div`
  ${({ theme: { div } }) => div}

  flex-direction: column;
`;
export const ProjectLinkContainerStyle = styled.div`
  ${({ theme: { div } }) => div}

  flex-direction: column;
`;
export const ProjectLinkFieldStyle = styled(Field)`
  ${({
    theme: {
      ui: { formTextField },
    },
  }) => formTextField}
`;
export const ProjectLinkRemoveButtonStyle = styled.button`
  ${({
    theme: {
      ui: { formButton },
    },
  }) => formButton}
`;
export const ProjectLinkAddButtonStyle = styled.button`
  ${({
    theme: {
      ui: { formButton },
    },
  }) => formButton}
`;

export const ProjectSubmitButtonStyle = styled.button`
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
export const ProjectResetButtonStyle = styled.button`
  ${({
    theme: {
      ui: { formButton },
    },
  }) => formButton}
`;
