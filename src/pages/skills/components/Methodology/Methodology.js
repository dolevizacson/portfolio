import React from 'react';
import styled from 'styled-components';
import { Times } from 'styled-icons/fa-solid';

// components
import StackList from '../StackList/StackList';

// style
const MethodologyStyle = styled.div`
  ${({ theme }) => theme.div}

  padding: 1vh 0;

  ${({ isExtended }) => (isExtended === true ? `width: 100%` : `width: 48%`)}

  ${({ theme }) => theme.media.phone`
    width: 100%;
  `}
`;

const MethodologyContainerstyle = styled.div`
  ${({ theme }) => theme.div}

  flex-direction: column;
  width: 100%;
  height: 100%;
  ${({ theme }) => theme.ui.corners}
  ${({ theme }) => theme.ui.shadow}

  ${({ theme }) => theme.BackgroundColor.black1}

  ${({ isExtended }) => (isExtended === false ? `cursor: pointer` : '')}
`;

const MethodologyHeaderStyle = styled.div`
  ${({ theme }) => theme.div}

  justify-content: space-between;
`;
const LeftHeaderStyle = styled.div`
  ${({ theme }) => theme.div}

  align-items: center;
`;
const HeaderStyle = styled.h4`
  font-weight: bold;
  padding: 0 20px;

  ${({ theme }) => theme.font.font1}
  ${({ theme }) => theme.color.white2}
`;
const MethodologyIconStyle = styled.div`
  ${({ theme }) => theme.div}

  ${({ theme }) => theme.ui.headerIconSize}
`;
const IconStyle = styled.img`
  width: 100%;
  height: 100%;
  ${({ theme }) => theme.ui.corners}

  ${({ theme }) => theme.BackgroundColor.white2}
`;
const MethodologyCloseIconStyle = styled.div`
  ${({ theme }) => theme.div}

  justify-content: flex-end;
  padding: 12px;

  ${props => props.theme.color.white2}
`;
const CloseIconStyle = styled(Times)`
  width: 40px;
  height: 40px;
  cursor: pointer;

  ${({ theme }) => theme.media.phone`
    width: 30px;
    height: 30px;
  `}
`;
const MethodologyBodyStyle = styled.div`
  ${({ theme }) => theme.div}
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
