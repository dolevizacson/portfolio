import styled from 'styled-components';

export const TaskListStyle = styled.div`
  ${({ theme: { div } }) => div}

  flex-direction: column;
  width: 100%;
  height: 100%;
`;
