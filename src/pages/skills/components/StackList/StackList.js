import React from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';

// components
import Stack from '../Stack/Stack';

// style
const StackListStyle = styled(Flex).attrs({ column: true })`
  padding: 0.625rem;
`;

const renderStackList = (list, isExtended) => {
  return list.map((stack, index) => {
    return <Stack key={index} content={stack} isExtended={isExtended} />;
  });
};

const StackList = ({ list, isExtended, close }) => {
  return (
    <StackListStyle>{renderStackList(list, isExtended, close)}</StackListStyle>
  );
};

export default StackList;
