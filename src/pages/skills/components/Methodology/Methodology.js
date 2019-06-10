import React from 'react';
import styled from 'styled-components';

// components
import StackList from '../StackList/StackList';

// icons
import { Times } from 'styled-icons/fa-solid';

// style
const MethodologyStyle = styled.div`
  ${({ theme: { div } }) => div}

  padding: 1vh 0;

  ${({ isExtended }) => (isExtended === true ? `width: 100%` : `width: 48%`)}

  ${({
    theme: {
      media: { phone },
    },
  }) => phone`
    width: 100%;
  `}
`;

const MethodologyContainerstyle = styled.div`
  ${({
    theme: {
      ui: { item },
    },
  }) => item}

  flex-direction: column;
  width: 100%;
  height: 100%;

  ${({ isExtended }) => (isExtended === false ? `cursor: pointer` : '')}
`;

const MethodologyHeaderStyle = styled.div`
  ${({ theme: { div } }) => div}

  justify-content: space-between;
`;
const LeftHeaderStyle = styled.div`
  ${({ theme: { div } }) => div}

  align-items: center;
`;
const HeaderStyle = styled.h4`
  font-weight: bold;
  padding: 0 20px;

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
const MethodologyIconStyle = styled.div`
  ${({ theme: { div } }) => div}

  ${({
    theme: {
      ui: { headerIconSize },
    },
  }) => headerIconSize}
`;
const IconStyle = styled.img`
  width: 100%;
  height: 100%;
  ${({
    theme: {
      ui: { corners },
    },
  }) => corners}

  ${({
    theme: {
      BackgroundColor: { white2 },
    },
  }) => white2}
`;
const MethodologyCloseIconStyle = styled.div`
  ${({ theme: { div } }) => div}

  justify-content: flex-end;
  padding: 12px;

  ${({
    theme: {
      color: { white2 },
    },
  }) => white2}
`;
const CloseIconStyle = styled(Times)`
  width: 40px;
  height: 40px;
  cursor: pointer;

  ${({
    theme: {
      media: { phone },
    },
  }) => phone`
    width: 30px;
    height: 30px;
  `}
`;
const MethodologyBodyStyle = styled.div`
  ${({ theme: { div } }) => div}
`;

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
