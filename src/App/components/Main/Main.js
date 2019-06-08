import React from 'react';
import styled from 'styled-components';

// style
const MainStyle = styled.div`
  ${({ theme: { div } }) => div}

  width: 70%;
  justify-content: center;
  flex: 1 0;

  ${({
    theme: {
      media: { desktop },
    },
  }) => desktop`
    width:85%;
  `}
  ${({
    theme: {
      media: { tablet },
    },
  }) => tablet`
    width:90%;
  `}
  ${({
    theme: {
      media: { phone },
    },
  }) => phone`
    width:95%;
  `};
`;

const Main = ({ children }) => {
  return <MainStyle>{children}</MainStyle>;
};

export default Main;
