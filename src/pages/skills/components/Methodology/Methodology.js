import React from 'react';

// components
import StackList from '../StackList/StackList';

// style
import {
  MethodologyStyle,
  MethodologyContainerstyle,
  MethodologyHeaderStyle,
  LeftHeaderStyle,
  HeaderStyle,
  MethodologyIconStyle,
  IconStyle,
  MethodologyCloseIconStyle,
  CloseIconStyle,
  MethodologyBodyStyle,
} from './MethodologyStyle';

const renderStackList = (list, isExtended, close) => {
  return <StackList list={list} isExtended={isExtended} close={close} />;
};

const Methodology = ({ content, isExtended, choose, close }) => {
  return (
    <MethodologyStyle
      onClick={() => {
        choose(content._id);
      }}
      isExtended={isExtended}
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
