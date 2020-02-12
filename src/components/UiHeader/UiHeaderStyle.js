import styled from 'styled-components';

export const UiHeaderStyle = styled.div`
  ${({ theme: { div } }) => div}
  width: 100%;
`;
export const UiHeaderContainerStyle = styled.div`
  ${({ theme: { div } }) => div}

  width: 100%;
  align-items: center;

  ${({
    theme: {
      ui: { style1 },
    },
  }) => style1}
`;
export const UiHeaderHeaderStyle = styled.h4`
  font-weight: bold;
  text-align: center;

  ${({
    theme: {
      font: { font1 },
    },
  }) => font1}
`;
export const UiHeaderHeaderIconStyle = styled.div`
  ${({ theme: { div } }) => div}

  ${({
    theme: {
      ui: { headerIconSize },
    },
  }) => headerIconSize}
`;
