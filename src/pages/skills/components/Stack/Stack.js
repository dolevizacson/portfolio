import React from 'react';
import styled from 'styled-components';

// style
const StackStyle = styled.div`
  ${({ theme: { div } }) => div}
`;
const StackNotExtendedStyle = styled.div`
  ${({ theme: { div } }) => div}

  font-weight: bold;
  font-size: 1.25rem;
  padding: 12px;

  ${({
    theme: {
      font: { font1 },
    },
  }) => font1}
  ${({
    theme: {
      color: { white2 },
    },
  }) => white2}
`;
const StackExtendedStyle = styled.div`
  ${({ theme: { div } }) => div}

  flex-direction: column;
  padding: 12px;
`;
const StackExtendedHeaderStyle = styled.div`
  ${({ theme: { div } }) => div}

  align-items: center;
`;
const HeaderStyle = styled.div`
  ${({ theme: { div } }) => div}

  text-decoration-line: underline;
  font-size: 1.25rem;
  font-weight: bold;
  padding: 12px;

  ${({
    theme: {
      font: { font1 },
    },
  }) => font1}
  ${({
    theme: {
      color: { white2 },
    },
  }) => white2}
`;
const StackExtendedHeaderIconStyle = styled.div`
  ${({ theme: { div } }) => div}

  ${({
    theme: {
      color: { white2 },
    },
  }) => white2}
`;
const StackExtendedBodyStyle = styled.div`
  ${({ theme: { div } }) => div}

  flex-direction: column;
`;
const StackExtendedBodyItemStyle = styled.div`
  ${({ theme: { div } }) => div}

  font-size: 1.25rem;
  padding: 6px 0;

  ${({
    theme: {
      font: { font1 },
    },
  }) => font1}
  ${({
    theme: {
      color: { white2 },
    },
  }) => white2}
`;

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
