import styled from 'styled-components';
import { Form, Field } from 'formik';

export const TaskFormStyle = styled.div`
  ${({ theme: { div } }) => div}
`;
export const TaskContainerStyle = styled.div`
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
export const TaskHeaderFieldStyle = styled(Field)`
  ${({
    theme: {
      ui: { formTextField },
    },
  }) => formTextField}
`;
export const TaskDescriptionFieldStyle = styled(Field)`
  ${({
    theme: {
      ui: { formTextField },
    },
  }) => formTextField}
`;
export const TaskSubmitButtonStyle = styled.button`
  ${({
    theme: {
      ui: { formButton },
    },
  }) => formButton}
`;
export const TaskUpdateButtonStyle = styled.button`
  ${({
    theme: {
      ui: { formButton },
    },
  }) => formButton}
`;
export const TaskResetButtonStyle = styled.button`
  ${({
    theme: {
      ui: { formButton },
    },
  }) => formButton}
`;
