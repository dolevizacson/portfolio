import styled from 'styled-components';

export const BackButtonStyle = styled.button`
  ${({
    theme: {
      ui: { formButton },
    },
  }) => formButton}
`;
