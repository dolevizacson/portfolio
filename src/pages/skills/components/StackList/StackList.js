import React from 'react';
import styled from 'styled-components';

// components
import Stack from '../Stack/Stack';

// icons
import { JsSquare, ReactLogo, Java, NodeJs } from 'styled-icons/fa-brands';

// style
import { StackListStyle } from './StackListStyle';

const renderIcon = index => {
  const iconsList = [JsSquare, ReactLogo, Java, NodeJs];

  if (index < iconsList.length) {
    let Elem = styled(iconsList[index])`
      width: 25px;
      height: 25px;
    `;
    return <Elem />;
  }
};

const renderStackList = (list, isExtended) => {
  return list.map((stack, index) => {
    return (
      <Stack
        key={index}
        content={stack}
        isExtended={isExtended}
        icon={renderIcon(index)}
      />
    );
  });
};

const StackList = ({ list, isExtended, close }) => {
  return (
    <StackListStyle>{renderStackList(list, isExtended, close)}</StackListStyle>
  );
};

export default StackList;
