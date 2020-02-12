import styled from 'styled-components';

export const UiTextBoxStyle = styled.div`
  ${({ theme: { div } }) => div}

  flex-direction: column;
  width: 100%;
`;

export const UiTextBoxMessageStyle = styled.div`
  ${({ theme: { div } }) => div}

  font-size: 1.5rem;
  text-align: center;

  ${({
    theme: {
      font: { font1 },
    },
  }) => font1}
`;
