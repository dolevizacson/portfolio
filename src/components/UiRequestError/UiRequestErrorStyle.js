import styled from 'styled-components';

export const UiRequestErrorStyle = styled.div`
  ${({ theme: { div } }) => div}

  flex-direction: column;
  width: 100%;
`;

export const UiRequestErrorMessageStyle = styled.div`
  ${({ theme: { div } }) => div}

  font-size: 1.5rem;
  text-align: center;

  ${({
    theme: {
      font: { font1 },
    },
  }) => font1}
`;
