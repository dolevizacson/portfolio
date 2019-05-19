import React from 'react';
import styled from 'styled-components';

// style
const StackStyle = styled.div`
  ${({ theme }) => theme.div}
`;
const StackNotExtendedStyle = styled.div`
  ${({ theme }) => theme.div}

  font-weight: bold;
  font-size: 1.25rem;
  padding: 12px;

  ${({ theme }) => theme.font.font1}
  ${({ theme }) => theme.color.white2}
`;
const StackExtendedStyle = styled.div`
  ${({ theme }) => theme.div}

  flex-direction: column;
  padding: 12px;
`;
const StackExtendedHeaderStyle = styled.div`
  ${({ theme }) => theme.div}

  align-items: center;
`;
const HeaderStyle = styled.div`
  ${({ theme }) => theme.div}

  text-decoration-line: underline;
  font-size: 1.25rem;
  font-weight: bold;
  padding: 12px;

  ${({ theme }) => theme.font.font1}
  ${({ theme }) => theme.color.white2}
`;
const StackExtendedHeaderIconStyle = styled.div`
  ${({ theme }) => theme.div}

  ${({ theme }) => theme.color.white2}
`;
const StackExtendedBodyStyle = styled.div`
  ${({ theme }) => theme.div}

  flex-direction: column;
`;
const StackExtendedBodyItemStyle = styled.div`
  ${({ theme }) => theme.div}

  font-size: 1.25rem;
  padding: 6px 0;

  ${({ theme }) => theme.font.font1}
  ${({ theme }) => theme.color.white2}
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
