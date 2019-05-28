import React from 'react';
import styled from 'styled-components';

// style
const MainStyle = styled.div`
  ${({ theme }) => theme.div}

  width: 70%;
  justify-content: center;
  flex: 1 0;

  ${({ theme }) => theme.media.desktop`
    width:85%;
  `}
  ${({ theme }) => theme.media.tablet`
    width:90%;
  `}
  ${({ theme }) => theme.media.tablet`
    width:95%;
  `};
`;

const Main = props => {
  return <MainStyle>{props.children}</MainStyle>;
};

export default Main;
