import styled from 'styled-components';

export const AppStyle = styled.div`
  ${({ theme: { div } }) => div}

  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
`;
