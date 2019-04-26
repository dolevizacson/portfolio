import React from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// style
const StackStyle = styled(Flex)``;
const StackNotExtendedStyle = styled(Flex)`
  font-weight: bold;  
  font-size: 20px;
  padding 0.625rem;  

  ${props => props.theme.font.font1}
  ${props => props.theme.color.white2}
`;
const StackExtendedStyle = styled(Flex)``;

const renderStack = (content, isExtended) => {
  if (!isExtended) {
    return <StackNotExtendedStyle> - {content.language}</StackNotExtendedStyle>;
  } else {
    return <StackExtendedStyle>{content.language}</StackExtendedStyle>;
  }
};

const Stack = ({ content, isExtended }) => {
  return <StackStyle>{renderStack(content, isExtended)}</StackStyle>;
};

export default Stack;
