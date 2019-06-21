import styled from 'styled-components';

export const StackStyle = styled.div`
  ${({ theme: { div } }) => div}
`;
export const StackNotExtendedStyle = styled.div`
  ${({ theme: { div } }) => div}

  font-weight: bold;
  font-size: 1.25rem;
  padding: 12px;

  ${({
    theme: {
      font: { font1 },
    },
  }) => font1}
  ${({
    theme: {
      color: { white2 },
    },
  }) => white2}
`;
export const StackExtendedStyle = styled.div`
  ${({ theme: { div } }) => div}

  flex-direction: column;
  padding: 12px;
`;
export const StackExtendedHeaderStyle = styled.div`
  ${({ theme: { div } }) => div}

  align-items: center;
`;
export const HeaderStyle = styled.div`
  ${({ theme: { div } }) => div}

  text-decoration-line: underline;
  font-size: 1.25rem;
  font-weight: bold;
  padding: 12px;

  ${({
    theme: {
      font: { font1 },
    },
  }) => font1}
  ${({
    theme: {
      color: { white2 },
    },
  }) => white2}
`;
export const StackExtendedHeaderIconStyle = styled.div`
  ${({ theme: { div } }) => div}

  ${({
    theme: {
      color: { white2 },
    },
  }) => white2}
`;
export const StackExtendedBodyStyle = styled.div`
  ${({ theme: { div } }) => div}

  flex-direction: column;
`;
export const StackExtendedBodyItemStyle = styled.div`
  ${({ theme: { div } }) => div}

  font-size: 1.25rem;
  padding: 6px 0;

  ${({
    theme: {
      font: { font1 },
    },
  }) => font1}
  ${({
    theme: {
      color: { white2 },
    },
  }) => white2}
`;
