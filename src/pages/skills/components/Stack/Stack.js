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
const StackExtendedStyle = styled(Flex).attrs({ column: true })`
  padding: 0.625rem;
`;
const StackExtendedHeaderStyle = styled(Flex).attrs({ alignCenter: true })``;
const HeaderStyle = styled(Flex)`
  text-decoration-line: underline;
  font-size: 20px;
  font-weight: bold;
  padding: 0 0.625rem;

  ${props => props.theme.font.font1}
  ${props => props.theme.color.white2}
`;
const StackExtendedHeaderIconStyle = styled(Flex)`
  ${props => props.theme.color.white2}
`;
const HeaderIconStyle = styled(FontAwesomeIcon).attrs({ size: '2x' })``;
const StackExtendedBodyStyle = styled(Flex).attrs({ column: true })``;
const StackExtendedBodyItemStyle = styled(Flex)`
  font-size: 20px;
  padding: 0.312rem 0;

  ${props => props.theme.font.font1}
  ${props => props.theme.color.white2}
`;

const renderStack = (content, isExtended) => {
  if (!isExtended) {
    return <StackNotExtendedStyle> - {content.language}</StackNotExtendedStyle>;
  } else {
    return (
      <StackExtendedStyle>
        <StackExtendedHeaderStyle>
          <StackExtendedHeaderIconStyle>
            <HeaderIconStyle icon={['fab', content.icon]} />
          </StackExtendedHeaderIconStyle>
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

const Stack = ({ content, isExtended }) => {
  return <StackStyle>{renderStack(content, isExtended)}</StackStyle>;
};

export default Stack;
