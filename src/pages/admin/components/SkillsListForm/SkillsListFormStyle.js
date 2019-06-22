import styled from 'styled-components';
import { Form, Field } from 'formik';

export const SkillsListFormStyle = styled.div`
  ${({ theme: { div } }) => div}
`;
export const SkillsListContainerStyle = styled.div`
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
export const SkillsListTopicFieldStyle = styled(Field)`
  ${({
    theme: {
      ui: { formTextField },
    },
  }) => formTextField}
`;
export const SkillsListImageFieldStyle = styled(Field)`
  ${({
    theme: {
      ui: { formTextField },
    },
  }) => formTextField}
`;
export const SkillsListLanguageFieldStyle = styled(Field)`
  ${({
    theme: {
      ui: { formTextField },
    },
  }) => formTextField}
`;

export const SkillsListStackContainerStyle = styled.div`
  ${({ theme: { div } }) => div}

  flex-direction: column;
`;
export const SkillsListLongDataContainerStyle = styled.div`
  ${({ theme: { div } }) => div}

  flex-direction: column;
`;
export const SkillsListLongDataFieldStyle = styled(Field)`
  ${({
    theme: {
      ui: { formTextField },
    },
  }) => formTextField}
`;

export const SkillsListStackListListContainerStyle = styled.div`
  ${({ theme: { div } }) => div}

  flex-direction: column;
`;
export const SkillsListLongDataListContainerStyle = styled.div`
  ${({ theme: { div } }) => div}

  flex-direction: column;
`;
export const SkillsListStackRemoveButtonStyle = styled.button`
  ${({
    theme: {
      ui: { formButton },
    },
  }) => formButton}
`;
export const SkillsListstackAddButtonStyle = styled.button`
  ${({
    theme: {
      ui: { formButton },
    },
  }) => formButton}
`;
export const SkillsListSubmitButtonStyle = styled.button`
  ${({
    theme: {
      ui: { formButton },
    },
  }) => formButton}
`;
export const SkillsListUpdateButtonStyle = styled.button`
  ${({
    theme: {
      ui: { formButton },
    },
  }) => formButton}
`;
export const SkillsListResetButtonStyle = styled.button`
  ${({
    theme: {
      ui: { formButton },
    },
  }) => formButton}
`;
export const SkillsListLongDataAddButtonStyle = styled.button`
  ${({
    theme: {
      ui: { formButton },
    },
  }) => formButton}
`;
export const SkillsListLongDataRemoveButtonStyle = styled.button`
  ${({
    theme: {
      ui: { formButton },
    },
  }) => formButton}
`;
