import styled from 'styled-components';

export const ErrorPageStyle = styled.div`
  ${({ theme: { div } }) => div}

  flex-direction: column;
  width: 100%;
`;

export const ErrorPageHeaderStyle = styled.h4`
  font-weight: bold;
  padding: 0 20px;
  text-align: center;

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

export const ErrorPageMessageStyle = styled.div`
  ${({ theme: { div } }) => div}

  font-size: 1.5rem;
  text-align: center;

  ${({
    theme: {
      font: { font1 },
    },
  }) => font1}
`;
