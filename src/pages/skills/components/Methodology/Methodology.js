import React from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// components
import StackList from '../StackList/StackList';

// style
const MethodologyStyle = styled(Flex).attrs({ full: true })`
  padding: 0.625rem;
`;

const MethodologyContainerstyle = styled(Flex).attrs({
  column: true,
  full: true,
})`
  border-radius: 10px;
  box-shadow: -20px 20px 40px 5px rgba(0, 0, 0, 0.75);
  ${props => (props.isExtended === false ? `cursor: pointer` : '')}

  ${props => props.theme.BackgroundColor.black1}
`;

const MethodologyHeaderStyle = styled(Flex).attrs({
  full: true,
  justifyBetween: true,
})``;
const LeftHeaderStyle = styled(Flex).attrs({ alignCenter: true })``;
const HeaderStyle = styled.h4`
  font-weight: bold;
  padding: 0 0.625rem;

  ${props => props.theme.font.font1}
  ${props => props.theme.color.white2}
`;
const MethodologyIconStyle = styled(Flex)`
  width: 5em;
  height: 5em;
`;
const IconStyle = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;

  ${props => props.theme.BackgroundColor.white2}
`;
const MethodologyCloseIconStyle = styled(Flex).attrs({
  justifyEnd: true,
})`
  padding: 0.625rem;

  ${props => props.theme.color.white2}
`;
const CloseIconStyle = styled(FontAwesomeIcon).attrs({
  icon: 'times',
  size: '3x',
})`
  cursor: pointer;
`;
const MethodologyBodyStyle = styled(Flex)``;

const renderStackList = (list, isExtended, close) => {
  return <StackList list={list} isExtended={isExtended} close={close} />;
};

const Methodology = ({ content, isExtended, choose, close }) => {
  return (
    <MethodologyStyle
      onClick={() => {
        choose(content._id);
      }}
    >
      <MethodologyContainerstyle isExtended={isExtended}>
        <MethodologyHeaderStyle>
          <LeftHeaderStyle>
            <MethodologyIconStyle>
              <IconStyle src={content.image} alt={content.topic} />
            </MethodologyIconStyle>
            <HeaderStyle>{content.topic}</HeaderStyle>
          </LeftHeaderStyle>
          {isExtended && (
            <MethodologyCloseIconStyle
              onClick={event => {
                event.stopPropagation();
                close();
              }}
            >
              <CloseIconStyle />
            </MethodologyCloseIconStyle>
          )}
        </MethodologyHeaderStyle>
        <MethodologyBodyStyle>
          {renderStackList(content.stack, isExtended)}
        </MethodologyBodyStyle>
      </MethodologyContainerstyle>
    </MethodologyStyle>
  );
};

export default Methodology;
