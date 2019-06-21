import React from 'react';

// style
import {
  StackStyle,
  StackNotExtendedStyle,
  StackExtendedStyle,
  StackExtendedHeaderStyle,
  HeaderStyle,
  StackExtendedHeaderIconStyle,
  StackExtendedBodyStyle,
  StackExtendedBodyItemStyle,
} from './StackStyle';

const renderStack = (content, isExtended, icon) => {
  if (!isExtended) {
    return <StackNotExtendedStyle> - {content.language}</StackNotExtendedStyle>;
  } else {
    return (
      <StackExtendedStyle>
        <StackExtendedHeaderStyle>
          <StackExtendedHeaderIconStyle>{icon}</StackExtendedHeaderIconStyle>
          <HeaderStyle>{content.language}</HeaderStyle>
        </StackExtendedHeaderStyle>
        <StackExtendedBodyStyle>
          {content.longData.map((data, index) => {
            return (
              <StackExtendedBodyItemStyle key={index}>
                - {data}
              </StackExtendedBodyItemStyle>
            );
          })}
        </StackExtendedBodyStyle>
      </StackExtendedStyle>
    );
  }
};

const Stack = ({ content, isExtended, icon }) => {
  return <StackStyle>{renderStack(content, isExtended, icon)}</StackStyle>;
};

export default Stack;
