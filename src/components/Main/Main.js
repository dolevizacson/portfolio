import React from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';

// style
const MainStyle = styled(Flex)`
  padding: 0 150px;

  ${props => props.theme.media.desktop`padding:2%`}
`;

const Main = props => {
  return <MainStyle>{props.children}</MainStyle>;
};

export default Main;
